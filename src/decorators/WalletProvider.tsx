import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { metaMask, mock } from "wagmi/connectors";
import { inkConfig } from "../providers.index";
import { createConfig, WagmiProvider } from "wagmi";
import { Decorator } from "@storybook/react";
import { DEFAULT_MOCK_ACCOUNT } from "../util/mocks";

const config = createConfig({
  connectors: [
    metaMask(),
    mock({
      accounts: [DEFAULT_MOCK_ACCOUNT],
      features: {
        defaultConnected: true,
        reconnect: true,
      },
    }),
  ],
  chains: inkConfig.chains,
  transports: inkConfig.transports,
  ssr: true,
});

const queryClient = new QueryClient();

export const WalletProvider: Decorator = (Story) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </WagmiProvider>
  );
};
