import { FC, ReactNode } from "react";
import cx from "classnames";

interface AboutGridProps {
    className?: string;
    children?: ReactNode;
}

export const AboutGrid:FC<AboutGridProps> = ({ className, children }) => (
    <div className={
        cx(
            "py-12 grid gap-8 max-w-layout w-full mx-auto",
            className
        )
    }>
        {children}
    </div>
)