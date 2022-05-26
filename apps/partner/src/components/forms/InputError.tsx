import React, { FC } from "react";

interface InputErrorProps {
  message?: string;
  styled?: boolean;
}

export const InputError: FC<InputErrorProps> = ({ message }) => (
  <div className="flexflex-grow mx-auto h-auto py-2 px-3 rounded border border-red-100 bg-red-50">
    <p className="text-sm text-red-600">{message}</p>
  </div>
);

interface Props {
  hasError?: boolean;
  message?: string;
}

export const InputErrorBox: FC<Props> = ({ hasError, message }) => (
  <>
    {hasError ? (
      <div className="mt-1">
        <InputError message={message} />
      </div>
    ) : (
      <div className="h-8 mt-1"></div>
    )}
  </>
);
