import React, { FC } from "react";
import cx from "classnames";
import { kebabCase } from "lodash";

export interface RadioOption {
  isDisabled?: boolean;
  label: string;
  value: string;
}

interface RadioGroupProps {
  legend?: string;
  label?: string;
  name: string;
  setValue: (name: string, option: string | boolean) => void;
  options: RadioOption[];
  value?: string | number | boolean;
}

const isSelected = (option: RadioOption, selectedOption?: string | number) => {
  return selectedOption ? selectedOption === option.value : false;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  legend,
  name,
  setValue,
  options,
  value,
}) => (
  <fieldset>
    <legend className="sr-only">{legend}</legend>
    <div className="label">{label}</div>
    <div className="flex items-center space-x-3">
      {options.map((option, idx) => (
        <label
          key={`${name}-${idx}`}
          className="flex relative items-center h-4 space-x-2 mt-0.5 p-4 border border-gray-300 rounded-lg hover:bg-gray-300 transition duration-150 ease-in-out cursor-pointer"
          onChange={() => {
            if (!option.isDisabled) {
              // Formik's setFieldValue function to set value
              return setValue(name, option.value);
            }
          }}
        >
          <input
            aria-describedby={`${kebabCase(name)}-${idx}-description`}
            aria-labelledby={`${kebabCase(name)}-${idx}-label`}
            data-cy={`${kebabCase(name)}-${idx}-cbx`}
            defaultChecked={isSelected(option, value?.toString())}
            disabled={option.isDisabled}
            name={kebabCase(name)}
            type="radio"
            value={option.value}
          />
          <div>
            <span
              className={cx("block text-gray-600", {
                "text-brand-black": isSelected(option, value?.toString()),
              })}
            >
              {option.label}
            </span>
          </div>
        </label>
      ))}
    </div>
  </fieldset>
);
