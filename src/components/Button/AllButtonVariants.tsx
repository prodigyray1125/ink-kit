import { Button, type ButtonProps } from "./index";

export type AllButtonVariantsProps = Exclude<ButtonProps, "variant" | "size">;

export const AllButtonVariants: React.FC<AllButtonVariantsProps> = (props) => {
  return (
    <div className="ink-flex ink-flex-col ink-items-center ink-gap-2">
      <div className="ink-flex ink-gap-2">
        <Button variant="primary" size="md" {...props}>
          {props.children}
        </Button>
        <Button variant="secondary" size="md" {...props}>
          {props.children}
        </Button>
      </div>
      <div className="ink-flex ink-gap-2">
        <Button variant="primary" size="sm" {...props}>
          {props.children}
        </Button>
        <Button variant="secondary" size="sm" {...props}>
          {props.children}
        </Button>
      </div>
    </div>
  );
};
