"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";
const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    //alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);
// add acontract id
const contractId = "";
const { connectors } = getDefaultWallets({
  appName: "passlip ",
  projectId: "payment",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

import React, { useEffect } from "react";
// import { SalaryLedgerEntry } from "@/app/ui/payslip/buttons";

export default function Page() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col">
              <ConnectButton />
              <p>press to connet to sync Payslips</p>
            </div>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
      <div></div>
    </>
  );
}
