import { FC } from "react";

interface Props {
  className?: string;
}

export const ImageDefaultIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="78"
    height="60"
    viewBox="0 0 78 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 0C2.685 0 0 2.685 0 6V54C0 57.315 2.685 60 6 60H72C75.315 60 78 57.315 78 54V6C78 2.685 75.315 0 72 0H6ZM63 9C66.315 9 69 11.685 69 15C69 18.315 66.315 21 63 21C59.685 21 57 18.315 57 15C57 11.685 59.685 9 63 9ZM9 15L23.918 29.918L27 33L30.4688 36.4688C31.7347 37.7347 33.7789 37.723 35.0449 36.457C36.3139 35.191 36.3139 33.1323 35.0449 31.8633L31.5879 28.4121L36 24L44.918 32.918L51.4688 39.4688C52.7347 40.7347 54.7789 40.723 56.0449 39.457C57.3139 38.191 57.3139 36.1323 56.0449 34.8633L55.5879 34.4121L60 30L69 39V51H9V15Z"
      fill="#F3F3F3"
    />
  </svg>
);