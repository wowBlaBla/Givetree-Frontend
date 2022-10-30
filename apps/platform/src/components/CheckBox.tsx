import React, { FC } from "react";
import cx from "classnames";

interface CheckBoxProps extends React.HTMLAttributes<HTMLElement> {
  count?: number;
  title: string;
  checked?: boolean;
  direction?: "left" | "right";
  onChanged?: (checked: boolean) => void;
}

export const CheckBox: FC<CheckBoxProps> = ({
  className,
  title,
  count,
  checked = false,
  direction,
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
      {direction === "right" ? (
        <>
          <span className="text-currentColor">{title}</span>
          <div className="flex items-center ml-2">
            {count !== undefined && (
              <span className="text-[#BABABA] mr-2">({count})</span>
            )}
            <div className={`tick w-[20px] h-[20px] ${status ? "checked" : ""}`} />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center">
            {count !== undefined && (
              <span className="text-[#BABABA] mr-2">({count})</span>
            )}
            <div className={`tick w-[20px] h-[20px] ${status ? "checked" : ""}`} />
          </div>
          <span className="text-currentColor ml-2">{title}</span>
        </>
      )}
    </div>
  );
};
