import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { handle, walletAddress } = await req.json();

  if (!handle || handle.length < 3) {
    return NextResponse.json({ error: "Handle too short" }, { status: 400 });
  }

  // Hash the username (same logic as our Rust code)
  const encoder = new TextEncoder();
  const data = encoder.encode(handle);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

  // Store in localStorage-compatible format for now
  // This will be replaced with actual Miden on-chain call
  return NextResponse.json({
    success: true,
    handle,
    hash: hashHex,
    walletAddress: walletAddress || "unknown",
    registeredAt: new Date().toISOString(),
  });
}
