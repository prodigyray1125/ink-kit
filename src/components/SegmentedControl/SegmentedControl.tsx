import React, { useEffect, useMemo, useRef, useState } from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { Slot } from "../Slot";
import { useWindowSize } from "../../hooks/useWindowSize";

export type SegmentedControlProps<TOptionValue extends string> = {
  options: SegmentedControlOption<TOptionValue>[];
  onOptionChange: (
    option: SegmentedControlOption<TOptionValue>,
    index: number
  ) => void;
  variableTabWidth?: boolean;
  variant?: "default" | "primary" | "tag";
};

export interface SegmentedControlOption<TOptionValue extends string> {
  children: React.ReactNode;
  value: TOptionValue;
  selectedByDefault?: boolean;
  asChild?: boolean;
}

export const SegmentedControl = <TOptionValue extends string>({
  options,
  onOptionChange,
  variableTabWidth,
  variant = "default",
}: SegmentedControlProps<TOptionValue>) => {
  const itemsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const [selectedOption, setSelectedOption] = useState<TOptionValue | null>(
    options.find((opt) => opt.selectedByDefault)?.value ?? null
  );
  const selectedIndex = useMemo(
    () => options.findIndex((opt) => opt.value === selectedOption),
    [options, selectedOption]
  );
  const windowWidth = useWindowSize();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // We need to wait for the component to be mounted before we can get the
    // selected element's offsetLeft and offsetWidth.
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
  }, []);

  const { left, width } = useMemo(() => {
    if (!isMounted) {
      return { left: 0, width: 0 };
    }
    const selectedElement = itemsRef.current[selectedIndex];
    return {
      left: selectedElement?.offsetLeft || 0,
      width: selectedElement?.offsetWidth || 0,
    };
  }, [itemsRef, selectedIndex, isMounted, windowWidth]);

  return (
    <div className="ink:relative ink:font-default ink:h-fit">
      <div
        className={classNames(
          "ink:grid ink:h-5 ink:grid-flow-col ink:text-body-3-bold ink:rounded-md ink:p-0.5 ink:box-border ink:backdrop-blur-lg",
          variantClassNames(variant, {
            default: "ink:bg-background-container",
            primary: "ink:bg-background-container",
            tag: "",
          }),
          variableTabWidth
            ? "ink:[grid-auto-columns:auto]"
            : "ink:[grid-auto-columns:1fr]"
        )}
      >
        {options.map((option, index) => {
          const ButtonComponent = option.asChild ? Slot : "button";

          return (
            <ButtonComponent
              className={classNames(
                "ink:h-full ink:box-border ink:rounded-sm ink:relative ink:z-10 ink:transition-colors ink:transition-default-animation ink:hover:cursor-pointer ink:select-none ink:no-underline ink:flex ink:items-center ink:justify-center",
                selectedOption === option.value
                  ? variantClassNames(variant, {
                      default: "ink:text-text-default",
                      primary: "ink:text-text-on-primary",
                      tag: "ink:text-text-default",
                    })
                  : "ink:text-text-muted ink:hover:text-text-default",
                variantClassNames(variant, {
                  default: variableTabWidth ? "ink:px-3" : "ink:px-4",
                  primary: variableTabWidth ? "ink:px-3" : "ink:px-4",
                  tag: "ink:px-2",
                })
              )}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              key={option.value}
              onClick={() => {
                setSelectedOption(option.value);
                onOptionChange(option, index);
              }}
              draggable={false}
            >
              {option.children}
            </ButtonComponent>
          );
        })}
        {isMounted && selectedOption && (
          <div
            className="ink:absolute ink:py-0.5 ink:box-border ink:transition-[left,width] ink:transition-default-animation"
            style={{
              top: 0,
              bottom: 0,
              left: `${left}px`,
              width: `${width}px`,
            }}
          >
            <div
              className={classNames(
                "ink:w-full ink:h-full ink:rounded-sm",
                variantClassNames(variant, {
                  default: "ink:bg-background-light",
                  primary: "ink:bg-button-primary",
                  tag: "ink:bg-button-secondary",
                })
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

SegmentedControl.displayName = "SegmentedControl";
