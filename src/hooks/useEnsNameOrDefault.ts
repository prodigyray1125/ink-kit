import { Address } from "viem";
import { useEnsName } from "wagmi";
import { trimAddress } from "../util/trim";
import { DEFAULT_MOCK_ACCOUNT } from "../util/mocks";

export const useEnsNameOrDefault = ({
  address,
}: {
  address: Address | undefined;
}) => {
  const { data: ensName } = useEnsName({ address });

  if (address === DEFAULT_MOCK_ACCOUNT) {
    return "mock.account.ink.eth";
  }

  return ensName ?? trimAddress(address);
};
