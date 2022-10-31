import React, { FC } from "react";
import cx from "classnames";

interface CheckBoxProps extends React.HTMLAttributes<HTMLElement> {
  count?: number;
  title: string;
  checked?: boolean;
  onChanged?: (checked: boolean) => void;
}

export const CheckBox: FC<CheckBoxProps> = ({
  className,
  title,
  count,
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
      className={cx(className, "my-check-box flex items-center justify-between")}
      onClick={handleToggleChecked}
    >
      <span className="text-currentColor">{title}</span>
      <div className="flex items-center">
        {count !== undefined && <span className="text-[#BABABA] mr-2">({count})</span>}
        <div className={`tick w-[20px] h-[20px] ${checked ? "checked" : ""}`} />
      </div>
    </div>
  );
};
