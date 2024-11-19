import { Chain } from "viem";
import { http, Transport } from "wagmi";
import { inkSepolia } from "wagmi/chains";

const chains = [inkSepolia] as const satisfies Chain[];
const transports = {
  [inkSepolia.id]: http(),
} as const satisfies Record<Chain["id"], Transport>;

export const inkConfig = {
  chains,
  transports,
} as const;
