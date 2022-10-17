import { FC, ReactNode } from "react";
import cx from "classnames";

interface AboutGridProps {
    className?: string;
    children?: ReactNode;
}

export const AboutGrid:FC<AboutGridProps> = ({ className, children }) => (
    <div className={
        cx(
            "py-12 grid gap-8 w-full mx-auto sm:px-0 px-2",
            className
        )
    }>
        {children}
    </div>
)