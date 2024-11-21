import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useModalContext } from "./ModalContext";
import {
  classNames,
  resetClasses,
  variantClassNames,
} from "../../util/classes";
import { InkIcon } from "../..";
import { useEffect, useRef } from "react";

export interface ModalProps<TOnCloseProps = boolean> {
  id: string;
  title?: string;
  size?: "lg" | "md";
  hasBackdrop?: boolean;
  openOnMount?: boolean;
  onClose?: (props?: TOnCloseProps) => void;
  children: ({
    closeModal,
  }: {
    closeModal: (props?: TOnCloseProps) => void;
  }) => React.ReactNode;
}

export const Modal = <TOnCloseProps,>({
  id,
  title,
  size = "lg",
  hasBackdrop,
  openOnMount,
  onClose,
  children,
}: ModalProps<TOnCloseProps>) => {
  const { isModalOpen, closeModal, modalIndex, openModal } =
    useModalContext(id);

  const wasOpenedOnMount = useRef(false);
  useEffect(() => {
    if (openOnMount && !wasOpenedOnMount.current) {
      openModal();
      wasOpenedOnMount.current = true;
    }
  }, [openModal, openOnMount]);

  const handleClose = (props?: TOnCloseProps) => {
    closeModal();
    onClose?.(props);
  };

  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={() => handleClose()}
        transition
        className="ink-relative ink-font-default ink-text-text-default"
        style={{ zIndex: 5 + modalIndex }}
      >
        {hasBackdrop && (
          <DialogBackdrop
            transition
            className="ink-fixed ink-inset-0 ink-transition-opacity ink-duration-200 ink-backdrop-blur-lg data-[closed]:ink-opacity-0"
          />
        )}
        <div
          className={classNames(
            "ink-fixed ink-inset-0 ink-p-4",
            "ink-flex ink-items-center ink-justify-center"
          )}
        >
          <DialogPanel
            transition
            className={classNames(
              "ink-flex ink-flex-col ink-justify-between ink-gap-3 ink-p-3",
              "ink-bg-background-light ink-shadow-modal ink-rounded-24",
              "ink-duration-200 ink-ease-out data-[closed]:ink-scale-95 data-[closed]:ink-opacity-0",
              variantClassNames(size, {
                lg: "ink-min-w-[320px] sm:ink-min-w-[640px] ink-min-h-[480px] ink-max-w-4xl",
                md: "ink-min-w-[200px] sm:ink-min-w-[300px] ink-min-h-[300px]",
              })
            )}
          >
            <DialogTitle
              className={classNames(
                resetClasses,
                "ink-w-full ink-flex ink-items-center ink-justify-between"
              )}
            >
              <div className="ink-font-bold ink-text-h4">{title}</div>
              <InkIcon.Close
                className="ink-cursor-pointer ink-size-3"
                onClick={() => handleClose()}
              />
            </DialogTitle>
            <div className="ink-flex-1 ink-flex ink-flex-col ink-justify-center ink-items-center">
              {children({ closeModal: handleClose })}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
