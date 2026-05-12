"use client";
import React from "react";
import { MidenFiSignerProvider } from "@miden-sdk/miden-wallet-adapter";
import { MidenProvider } from "@miden-sdk/react";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <MidenFiSignerProvider appName="Shado" network="testnet">
      <MidenProvider config={{ rpcUrl: "testnet" }}>
        {children}
      </MidenProvider>
    </MidenFiSignerProvider>
  );
}
