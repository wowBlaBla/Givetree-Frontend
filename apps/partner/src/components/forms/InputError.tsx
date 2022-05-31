import React, { FC } from "react";

interface InputErrorProps {
  message?: string;
  styled?: boolean;
}

export const InputError: FC<InputErrorProps> = ({ message }) => (
  <div className="flexflex-grow mx-auto py-2 px-3 rounded-lg border border-red-100 bg-red-50">
    <p className="text-sm text-red-600">{message}</p>
  </div>
);

interface Props {
  hasError?: boolean;
  message?: string;
}

export const InputErrorBox: FC<Props> = ({ hasError, message }) => (
  <div>
    {hasError ? (
      <div>
        <InputError message={message} />
      </div>
    ) : null}
  </div>
);
