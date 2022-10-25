import { FC } from "react";

interface Props {
  className?: string;
}

export const AvalancheIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1086_27149)">
      <g clipPath="url(#clip0_1086_27149)">
        <path d="M35.3137 8.86133H10.6328V31.3081H35.3137V8.86133Z" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.9605 21.9998C42.9605 33.0309 34.0182 41.9732 22.9871 41.9732C11.9561 41.9732 3.01367 33.0309 3.01367 21.9998C3.01367 10.9688 11.9561 2.02637 22.9871 2.02637C34.0182 2.02637 42.9605 10.9688 42.9605 21.9998ZM17.3272 29.9482H13.4509C12.6364 29.9482 12.234 29.9482 11.9887 29.7913C11.7238 29.6194 11.5618 29.3349 11.5422 29.0208C11.5275 28.7314 11.7287 28.378 12.131 27.6714L21.702 10.8012C22.1093 10.0849 22.3153 9.72666 22.5754 9.59418C22.8551 9.4519 23.1888 9.4519 23.4684 9.59418C23.7285 9.72666 23.9346 10.0849 24.3418 10.8012L26.3094 14.2359L26.3194 14.2534C26.7593 15.022 26.9824 15.4117 27.0798 15.8208C27.1877 16.2673 27.1877 16.7383 27.0798 17.1848C26.9816 17.597 26.7608 17.9895 26.3143 18.7697L21.2869 27.6567L21.2739 27.6795C20.8311 28.4544 20.6067 28.8471 20.2957 29.1434C19.9572 29.4673 19.5499 29.7027 19.1034 29.8354C18.6961 29.9482 18.2398 29.9482 17.3272 29.9482ZM27.1161 29.9482H32.6703C33.4897 29.9482 33.902 29.9482 34.1475 29.7865C34.4123 29.6147 34.5791 29.325 34.594 29.0112C34.6081 28.7312 34.4113 28.3915 34.0256 27.726C34.0123 27.7034 33.999 27.6803 33.9855 27.6568L31.2033 22.8974L31.1717 22.8438C30.7807 22.1827 30.5834 21.8488 30.3299 21.7198C30.0504 21.5775 29.7214 21.5775 29.4418 21.7198C29.1867 21.8522 28.9806 22.2006 28.5734 22.9023L25.8011 27.6618L25.7916 27.6781C25.3857 28.3787 25.1829 28.7288 25.1976 29.016C25.2172 29.3301 25.3791 29.6194 25.644 29.7913C25.8845 29.9482 26.2967 29.9482 27.1161 29.9482Z"
          fill="#E84142"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_1086_27149"
        x="0"
        y="0"
        width="46"
        height="46"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.129412 0 0 0 0 0.105882 0 0 0 0 0.305882 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1086_27149"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1086_27149"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1086_27149">
        <rect width="39.9734" height="40" fill="white" transform="translate(3 2)" />
      </clipPath>
    </defs>
  </svg>
);
