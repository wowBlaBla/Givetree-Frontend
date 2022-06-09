import React, { FC } from "react";

interface InputErrorProps {
  message?: string;
  styled?: boolean;
}

export const InputError: FC<InputErrorProps> = ({ message }) => (
  <div className="flex flex-grow mx-auto py-2 px-3 rounded-lg border border-red-100 bg-red-50">
    <p className="text-sm text-red-600">{message}</p>
  </div>
);

interface InputErrorBoxProps {
  hasError?: boolean;
  message?: string;
}

export const InputErrorBox: FC<InputErrorBoxProps> = ({ hasError, message }) => (
  <div className="mt-1">{hasError ? <InputError message={message} /> : null}</div>
);
