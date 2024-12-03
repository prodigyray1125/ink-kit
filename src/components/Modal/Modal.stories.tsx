import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import {
  ModalProvider,
  useModalContext,
  Modal,
  type ModalProps,
} from "./index";
import { fn } from "@storybook/test";
import { ModalLayout } from ".";

const meta: Meta<ModalProps> = {
  title: "Components/Modal",
  decorators: [
    (Story, { args }) => {
      function ModalContent() {
        const { isModalOpen, openModal } = useModalContext(args.id);
        return (
          <div className="ink:p-4">
            <Button variant="primary" size="md" onClick={openModal}>
              {isModalOpen ? "Close Modal" : "Open Modal"}
            </Button>
            <Story />
          </div>
        );
      }

      return (
        <ModalProvider>
          <ModalContent />
        </ModalProvider>
      );
    },
  ],
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    id: "modal",
    title: "Example modal",
    hasBackdrop: false,
    onClose: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalContent = ({
  closeModal,
}: {
  closeModal: (success: boolean) => void;
}) => {
  return (
    <ModalLayout.CallToAction
      title="Get started"
      content="Keep it simple, keep it actionable, give them a goal and they will come"
      button={
        <Button
          className="ink:w-full"
          variant="primary"
          size="lg"
          onClick={() => closeModal(true)}
        >
          Let's go
        </Button>
      }
    />
  );
};

export const Simple: Story = {
  args: {
    children: ModalContent,
  },
};

export const Nested: Story = {
  decorators: [
    (Story) => {
      return (
        <>
          <Story />
          <Modal id="nested" title="Nested modal" size="md" hasBackdrop>
            {({ closeModal }) => (
              <ModalLayout.CallToAction
                title="A nested modal example"
                content="This one uses the backdrop and size='md'"
                button={
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => closeModal()}
                  >
                    Close Nested
                  </Button>
                }
              />
            )}
          </Modal>
        </>
      );
    },
  ],
  args: {
    children: () => {
      const { openModal } = useModalContext("nested");
      return (
        <div>
          <Button
            className="ink:w-full"
            variant="primary"
            size="lg"
            onClick={openModal}
          >
            Open Nested
          </Button>
        </div>
      );
    },
  },
};
