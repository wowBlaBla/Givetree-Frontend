import React, { FC } from "react";
import cx from "classnames";

interface CheckBoxProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  checked?: boolean;
  onChanged?: (checked: boolean) => void;
}

export const CheckBox: FC<CheckBoxProps> = ({ className, title, checked, onChanged }) => {
  const [status, setStatus] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    setStatus(checked);
  }, [setStatus, checked]);

  React.useEffect(() => {
    onChanged && onChanged(status === true);
  }, [onChanged, status]);

  const handleToggleChecked = () => {
    setStatus((prev) => !prev);
  };

  return (
    <div
      className={cx(className, "check-box flex items-center")}
      onClick={handleToggleChecked}
    >
      <div className={`tick w-[20px] h-[20px] ${status ? "checked" : ""}`} />
      <span className="text-white">{title}</span>
    </div>
  );
};
