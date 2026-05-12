"use client";
import { WalletProvider, WalletModalProvider, MidenWalletAdapter } from "@demox-labs/miden-wallet-adapter";
import "@demox-labs/miden-wallet-adapter/styles.css";

const wallets = [new MidenWalletAdapter({ appName: "Shado" })];

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </WalletProvider>
  );
}