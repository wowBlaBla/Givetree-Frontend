import React, { FC } from "react";
import cx from "classnames";

interface RadioOption {
  id: string;
  isDisabled?: boolean;
  label: string;
  ref?: string;
  testId?: string;
}

interface RadioGroupProps {
  legend?: string;
  onChange: (option: RadioOption) => void;
  options: RadioOption[];
  selected?: RadioOption;
}

const isSelected = (option: RadioOption, selectedOption?: RadioOption) => {
  return selectedOption ? selectedOption.id === option.id : false;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  legend,
  onChange,
  options,
  selected,
}) => (
  <fieldset>
    <legend className="sr-only">{legend}</legend>
    <div className="-space-y-px rounded-xl">
      {options.map((option, idx) => (
        <label
          key={option.id}
          className="cursor-pointer focus:ring-brand-orange h-4 mt-0.5"
          onChange={() => {
            if (option.isDisabled) {
              return;
            }

            onChange(option);
          }}
        >
          <input
            data-cy={`${option.testId}-${idx}-cbx`}
            disabled={option.isDisabled}
            type="radio"
            value={option.id}
          >
            <span
              className={cx("block text-gray-400 font-medium", {
                "": isSelected(option, selected),
              })}
            >
              {option.label}
            </span>
          </input>
        </label>
      ))}
    </div>
  </fieldset>
);
