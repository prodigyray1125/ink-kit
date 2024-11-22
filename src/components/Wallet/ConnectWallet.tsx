import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import { Button } from "../Button";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { InkIcon } from "../..";
import { Address } from "viem";
import { classNames } from "../../util/classes";
import { trimAddress } from "../../util/trim";
import { inkSepolia } from "wagmi/chains";
import { useEnsImageOrDefault } from "../../hooks/useEnsImageOrDefault";
import { useEnsNameOrDefault } from "../../hooks/useEnsNameOrDefault";
import { InternalButton } from "../Button/InternalButton";

export interface ConnectWalletProps {
  className?: string;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({ className }) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const ensName = useEnsNameOrDefault({ address });
  const ensImage = useEnsImageOrDefault({ address });

  return (
    <Popover className="ink:relative ink:font-default">
      <PopoverButton
        as={InternalButton}
        variant={isConnected ? "wallet" : "primary"}
        className={className}
        iconLeft={
          isConnected && address ? (
            <img src={ensImage} alt={`avatar for ${ensName}`} />
          ) : undefined
        }
      >
        {isConnected && address ? ensName : "Connect"}
      </PopoverButton>

      <PopoverPanel
        className={classNames(
          "ink:absolute ink:z-10 ink:min-w-[240px]",
          "ink:rounded-24 ink:rounded-lg ink:bg-background-light ink:p-1.5 ink:shadow-menu",
          "ink:flex ink:flex-col ink:gap-2"
        )}
        anchor={{ to: "bottom end", gap: 8 }}
      >
        {isConnected ? (
          <ConnectedWalletSection address={address!} />
        ) : (
          <div className="ink:flex ink:flex-col ink:gap-2">
            {connectors.map((connector) => (
              <InternalButton
                key={connector.uid}
                variant="wallet-inside"
                className="ink:w-full"
                onClick={() => connect({ connector })}
              >
                {connector.name}
              </InternalButton>
            ))}
          </div>
        )}
      </PopoverPanel>
    </Popover>
  );
};

const ConnectedWalletSection = ({ address }: { address: Address }) => {
  const { disconnect } = useDisconnect();
  const {
    isLoading,
    isSuccess,
    data: balance,
  } = useBalance({
    address,
    chainId: inkSepolia.id,
  });
  return (
    <>
      {(isLoading || isSuccess) && (
        <div className="ink:text-body-2 ink:font-medium ink:p-1.5 ink:bg-background-container ink:rounded-16 ink:flex ink:gap-1.5 ink:font-default">
          <div className="ink:flex ink:flex-col ink:flex-1">
            <div className="ink:text-text-muted ink:text-caption ink:font-bold">
              Balance
            </div>
            <div className="ink:text-h4 ink:font-bold ink:text-text-default">
              {isSuccess ? `${balance.value} ${balance.symbol}` : "..."}
            </div>
          </div>
          <div>
            <Button
              as="a"
              href="https://inkonchain.com/bridge"
              target="_blank"
              variant="primary"
              rounded="full"
            >
              <InkIcon.Deposit />
            </Button>
          </div>
        </div>
      )}
      <div className="ink:flex ink:flex-col ink:gap-0.5">
        <InternalButton
          variant="wallet-inside"
          className="ink:w-full"
          iconLeft={<InkIcon.Profile />}
        >
          Profile
        </InternalButton>
        <InternalButton
          variant="wallet-inside"
          className="ink:w-full"
          iconLeft={<InkIcon.Settings />}
        >
          Settings
        </InternalButton>
        <InternalButton
          variant="wallet-inside"
          className="ink:w-full"
          iconLeft={<InkIcon.Copy />}
          onClick={() => navigator.clipboard.writeText(address)}
        >
          {trimAddress(address)}
        </InternalButton>
        <InternalButton
          variant="wallet-inside"
          className="ink:w-full ink:text-status-error ink:hover:bg-status-error-bg"
          iconLeft={<InkIcon.Disconnect />}
          onClick={() => disconnect()}
        >
          Disconnect
        </InternalButton>
      </div>
    </>
  );
};
