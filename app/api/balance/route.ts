import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const accountId = searchParams.get("accountId");

  if (!accountId) {
    return NextResponse.json({ error: "No account ID" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://rpc.testnet.miden.io/accounts/${accountId}`, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    const balance = data?.vault?.assets?.[0]?.amount || "0";
    return NextResponse.json({ balance });
  } catch (e) {
    return NextResponse.json({ balance: "0" });
  }
}
