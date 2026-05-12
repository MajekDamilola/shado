"use client";
import React from "react";
import dynamic from "next/dynamic";
import { WalletAdapterNetwork } from "@miden-sdk/miden-wallet-adapter";

const MidenFiSignerProvider = dynamic(
  () => import("@miden-sdk/miden-wallet-adapter").then(m => m.MidenFiSignerProvider),
  { ssr: false }
);

const MidenProvider = dynamic(
  () => import("@miden-sdk/react").then(m => m.MidenProvider),
  { ssr: false }
);

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <MidenFiSignerProvider appName="Shado" network={WalletAdapterNetwork.Testnet}>
      <MidenProvider config={{ rpcUrl: "testnet" }}>
        {children}
      </MidenProvider>
    </MidenFiSignerProvider>
  );
}
