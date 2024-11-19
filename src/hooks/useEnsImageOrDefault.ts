import { useEnsAvatar } from "wagmi";
import Avatar from "../images/avatar.png?base64";
import { normalize } from "viem/ens";
import { Address } from "viem";

export const useEnsImageOrDefault = ({ address }: { address?: Address }) => {
  const { data: avatar } = useEnsAvatar({ name: normalize(address || "") });

  return avatar || Avatar;
};
