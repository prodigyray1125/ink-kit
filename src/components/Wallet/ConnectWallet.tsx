import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import { Button } from "../Button";
import {
  InkIcon,
  Popover,
  PopoverButton,
  PopoverContent,
  PopoverPanel,
} from "../..";
import { Address } from "viem";
import { trimAddress } from "../../util/trim";
import { inkSepolia } from "wagmi/chains";
import { useEnsImageOrDefault } from "../../hooks/useEnsImageOrDefault";
import { useEnsNameOrDefault } from "../../hooks/useEnsNameOrDefault";
import { useEffect, useState } from "react";
import { PlaceholderUntilLoaded } from "../Effects";

export interface ConnectWalletProps {
  className?: string;
  listItems?: React.ReactNode;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({
  className,
  listItems,
}) => {
  const { address, isConnecting, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const ensName = useEnsNameOrDefault({ address });
  const ensImage = useEnsImageOrDefault({ address });

  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const isLoading = isConnecting || !hasLoaded;

  return (
    <Popover>
      <PopoverButton asChild>
        <Button
          variant={isConnected || isLoading ? "wallet" : "primary"}
          className={className}
          iconLeft={
            isConnected || isLoading ? (
              <img src={ensImage} alt={`avatar for ${ensName}`} />
            ) : undefined
          }
        >
          <PlaceholderUntilLoaded
            placeholder={
              <div className="flex items-center justify-center">
                Connecting...
              </div>
            }
            isLoading={isLoading}
          >
            {isConnected && address ? ensName : "Connect"}
          </PlaceholderUntilLoaded>
        </Button>
      </PopoverButton>

      <PopoverPanel
        className="ink:z-100"
        headerContent={
          isConnected ? (
            <ConnectedWalletPopupHeader address={address!} />
          ) : undefined
        }
      >
        {isConnected ? (
          <ConnectedWalletSection address={address!} listItems={listItems} />
        ) : (
          <div className="ink:flex ink:flex-col ink:gap-2">
            {connectors.map((connector) => (
              <PopoverContent.ListItem
                key={connector.uid}
                onClick={() => connect({ connector })}
              >
                {connector.name}
              </PopoverContent.ListItem>
            ))}
          </div>
        )}
      </PopoverPanel>
    </Popover>
  );
};

const ConnectedWalletPopupHeader = ({ address }: { address: Address }) => {
  const {
    isLoading,
    isSuccess,
    data: balance,
  } = useBalance({
    address,
    chainId: inkSepolia.id,
  });

  if (isLoading) {
    return null;
  }

  return (
    <div className="ink:text-body-2-bold ink:p-1.5 ink:bg-background-container ink:rounded-md ink:flex ink:gap-1.5 ink:font-default">
      <div className="ink:flex ink:flex-col ink:flex-1">
        <div className="ink:text-text-muted ink:text-caption-1-bold">
          Balance
        </div>
        <div className="ink:text-h4 ink:text-text-default">
          {isSuccess ? `${balance.value} ${balance.symbol}` : "..."}
        </div>
      </div>
      <div>
        <Button asChild variant="primary" rounded="full">
          <a href="https://inkonchain.com/bridge" target="_blank">
            <InkIcon.Deposit />
          </a>
        </Button>
      </div>
    </div>
  );
};

const ConnectedWalletSection = ({
  address,
  listItems,
}: {
  address: Address;
  listItems?: React.ReactNode;
}) => {
  const { disconnect } = useDisconnect();
  return (
    <>
      {listItems}
      <PopoverContent.ListItem
        iconLeft={<InkIcon.Copy />}
        onClick={() => navigator.clipboard.writeText(address)}
      >
        {trimAddress(address)}
      </PopoverContent.ListItem>
      <PopoverContent.ListItem
        variant="error"
        iconLeft={<InkIcon.Disconnect />}
        onClick={() => disconnect()}
      >
        Disconnect
      </PopoverContent.ListItem>
    </>
  );
};
