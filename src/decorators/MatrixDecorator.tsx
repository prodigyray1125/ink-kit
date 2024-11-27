import { Decorator } from "@storybook/react";

type MatrixDefinition<TProps, TKey extends keyof TProps = keyof TProps> = {
  [P in TKey]: {
    key: P;
    values: Array<TProps[P]>;
  };
}[TKey];

export const MatrixDecorator =
  <
    TProps,
    TFirst extends keyof TProps = keyof TProps,
    TSecond extends keyof TProps = keyof TProps,
  >({
    first: { key: firstKey, values: firstValues },
    second: { key: secondKey, values: secondValues },
  }: {
    first: MatrixDefinition<TProps, TFirst>;
    second: MatrixDefinition<TProps, TSecond>;
  }): Decorator =>
  (Story, { args, parameters }) => {
    if (parameters.disableMatrix) return <Story />;

    return (
      <div className="ink:flex ink:flex-col ink:items-center ink:gap-2">
        {firstValues.map((firstValue, i) => (
          <div key={`${String(firstKey)}-${i}`} className="ink:flex ink:gap-2">
            {secondValues.map((secondValue, j) => {
              return (
                <Story
                  key={`${String(firstKey)}-${i}-${j}`}
                  args={{
                    ...args,
                    [firstKey]: firstValue,
                    [secondKey]: secondValue,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  };
