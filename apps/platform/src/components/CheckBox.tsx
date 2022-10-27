import React, { FC } from "react";
import cx from "classnames";

interface CheckBoxProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  checked?: boolean;
  onChanged?: (checked: boolean) => void;
}

export const CheckBox: FC<CheckBoxProps> = ({
  className,
  title,
  checked = false,
  onChanged,
}) => {
  const [status, setStatus] = React.useState<boolean>(false);

  React.useEffect(() => {
    setStatus(checked);
  }, [checked]);

  const handleToggleChecked = () => {
    setStatus(!status);
    onChanged && onChanged(!status);
  };

  return (
    <div
      className={cx(className, "my-check-box flex items-center")}
      onClick={handleToggleChecked}
    >
      <div className={`tick w-[20px] h-[20px] ${status ? "checked" : ""}`} />
      <span className="text-currentColor">{title}</span>
    </div>
  );
};
