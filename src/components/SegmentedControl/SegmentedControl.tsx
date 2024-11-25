import React, { useEffect, useMemo, useRef, useState } from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { DisplayOnProps } from "../../util/theme";
import { PolymorphicDefinition } from "../polymorphic";

export type SegmentedControlProps<
  TOptionValue extends string,
  TButtonAs extends React.ElementType = "button",
> = DisplayOnProps & {
  options: SegmentedControlOption<TOptionValue, TButtonAs>[];
  onOptionChange: (
    option: SegmentedControlOption<TOptionValue, TButtonAs>,
    index: number
  ) => void;
  variableTabWidth?: boolean;
};

export interface SegmentedControlOption<
  TOptionValue extends string,
  TButtonAs extends React.ElementType = "button",
> {
  label: React.ReactNode;
  value: TOptionValue;
  selectedByDefault?: boolean;
  props?: PolymorphicDefinition<TButtonAs>;
}

export const SegmentedControl = <
  TOptionValue extends string,
  TButtonAs extends React.ElementType = "button",
>({
  options,
  onOptionChange,
  variableTabWidth,
  displayOn = "light",
}: SegmentedControlProps<TOptionValue, TButtonAs>) => {
  const itemsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const [selectedOption, setSelectedOption] = useState<TOptionValue | null>(
    options.find((opt) => opt.selectedByDefault)?.value ?? null
  );
  const selectedIndex = useMemo(
    () => options.findIndex((opt) => opt.value === selectedOption),
    [options, selectedOption]
  );

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
  }, [itemsRef, selectedIndex, isMounted]);

  return (
    <div className="ink:relative ink:font-default">
      {isMounted && selectedOption && (
        <div
          className="ink:absolute ink:transition-all ink:duration-200 ink:p-0.5 ink:box-border opacity-0 starting:opacity-100"
          style={{
            top: 0,
            bottom: 0,
            left: `${left}px`,
            width: `${width}px`,
          }}
        >
          <div
            className={classNames(
              "ink:w-full ink:h-full ink:rounded-full",
              variantClassNames(displayOn, {
                light: "ink:bg-background-light",
                dark: "ink:bg-background-dark",
              })
            )}
          />
        </div>
      )}
      <div
        className={classNames(
          "ink:grid ink:h-6 ink:grid-flow-col ink:text-body-2 ink:font-bold ink:rounded-full",
          variantClassNames(displayOn, {
            light: "ink:bg-background-container",
            dark: "ink:bg-background-light",
          }),
          variableTabWidth
            ? "ink:[grid-auto-columns:auto]"
            : "ink:[grid-auto-columns:1fr]"
        )}
      >
        {options.map((option, index) => {
          const { as, asProps } = option.props ?? {};

          const ButtonComponent = as ?? "button";

          return (
            <ButtonComponent
              {...asProps}
              className={classNames(
                "ink:h-full ink:box-border ink:rounded-full ink:relative ink:z-10 ink:transition-colors ink:duration-200 ink:hover:cursor-pointer ink:select-none ink:no-underline ink:flex ink:items-center ink:justify-center",
                selectedOption === option.value
                  ? "ink:text-text-default"
                  : "ink:text-text-on-secondary",
                variableTabWidth ? "ink:px-3" : "ink:px-4",
                asProps?.className
              )}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              key={option.value}
              onClick={(event) => {
                setSelectedOption(option.value);
                onOptionChange(option, index);
                asProps?.onClick?.(event);
              }}
              draggable={false}
            >
              {option.label}
            </ButtonComponent>
          );
        })}
      </div>
    </div>
  );
};
