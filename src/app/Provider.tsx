"use client"
import React from 'react';
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit";
import { argentWallet, trustWallet, ledgerWallet } from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, sepolia, lineaTestnet } from "viem/chains";
import { publicProvider} from "@wagmi/core/dist/providers/public";

interface providerProps{
  children: React.ReactNode
}

const projectId = "b5dca9f919b3ab9cbb9e525dbd9ea1bd"

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, sepolia, lineaTestnet ],
  [publicProvider()]
)

const { wallets } = getDefaultWallets({
  appName: "RainbowKit demo",
  projectId,
  chains
})

const appInfo = {
  appName: "RainbowKit demo"
}

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains })
    ]
  }
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
})

const Provider: React.FC<providerProps> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={appInfo} modalSize="compact" >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Provider;