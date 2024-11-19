import { Address } from "viem";

export const trimAddress = (address?: Address) => {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "";
};
