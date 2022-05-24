import React, { FC } from "react";

interface Props {
  className?: string;
}

export const GiveTreeLogo: FC<Props> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      r="20"
      transform="matrix(-1 0 0 1 20 20)"
      fill="url(#paint0_linear_952_30489)"
      fillOpacity="0.9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5872 20.7023C13.3891 21.5893 13.432 23.1225 14.1316 24.2109C15.4586 26.2751 17.0794 25.8274 17.4598 25.5422C17.8401 25.2569 18.1254 24.1158 16.9843 23.4502C15.7306 22.7189 14.9874 21.4533 14.8924 20.027C14.8776 19.806 14.8745 19.5909 14.8801 19.3853C14.5361 19.827 14.0455 20.382 13.5872 20.7023ZM15.8398 19.5817C15.8405 20.4745 16.1062 21.4604 16.9843 22.119C18.8861 23.5453 20.7879 22.4042 21.7387 21.3583C21.9813 21.0915 22.2179 20.7356 22.4327 20.3642C21.9128 20.3548 21.3509 20.2148 21.0731 20.1222C20.6928 20.5977 19.5897 21.4725 18.2205 21.1682C16.8512 20.8639 16.6356 19.7102 16.699 19.1713C16.5025 19.3679 16.165 19.5966 15.8398 19.5817ZM23.7262 20.0532C23.2264 20.9003 22.4921 21.99 21.7387 22.6895C20.4075 23.9257 20.6928 24.6864 20.978 24.9716C21.0338 25.0274 22.1191 26.0176 23.6405 24.0207C24.5205 22.8658 24.7742 21.7904 24.8472 20.7801C24.2632 20.618 24.116 20.0864 24.116 19.837C24.0526 19.8845 23.9195 19.9653 23.7262 20.0532ZM25.5379 20.8174C25.5209 21.3059 25.4907 21.8229 25.4472 22.2141C25.3976 22.6601 25.3076 23.0139 25.2394 23.2821C25.1428 23.6618 25.0898 23.8699 25.257 23.9257C25.7033 24.0744 27.3225 23.1899 27.9913 21.0362C27.888 21.0174 27.7987 20.997 27.7293 20.978C27.5708 21.1682 27.1208 21.5295 26.5883 21.4535C26.0558 21.3774 25.986 20.8512 26.0177 20.5977C25.9449 20.6705 25.7802 20.7725 25.5379 20.8174ZM28.8071 21.103C29.0581 21.0967 29.3132 21.0616 29.536 20.978C30.1446 20.7498 30.2333 19.9321 30.2016 19.5517C30.4869 19.6468 31.3554 19.7164 31.8181 18.791C32.2936 17.8401 31.8181 16.9209 31.4378 16.5089C31.8181 16.1285 32.5028 15.0445 32.1985 13.7513C31.8942 12.4581 30.6771 12.1982 30.1065 12.2299C30.1065 11.9129 29.8932 11.0133 28.7753 10.7085C27.7293 10.4232 26.7467 10.8986 26.3981 11.279C26.3981 11.0254 26.303 10.5183 25.7325 10.0428C25.2297 9.62391 24.6231 9.56739 24.4012 9.56739C24.528 9.25043 24.5914 8.52142 23.7356 7.8558C22.9189 7.22057 21.9923 7.47544 21.6437 7.66562C21.4535 7.38035 21.0731 7 20.4075 7C19.7419 7 19.2347 7.44375 19.0763 7.66562C18.791 7.44375 18.0683 7.13312 17.0794 7.66562C16.2236 8.12644 15.8432 8.90177 15.8432 9.37722C15.4946 9.28213 14.5691 9.32017 13.6562 10.233C12.7434 11.1459 12.8321 12.5785 12.9906 13.1808C12.5468 12.737 10.8986 12.2836 9.37722 13.2758C7.62759 14.4169 7.98258 16.0968 8.33124 16.7941C7.88749 16.9843 7 17.6689 7 18.8861C7 20.1032 8.07767 20.3441 8.61651 20.3124C8.61651 20.8196 8.92079 21.8529 10.1379 21.9289C10.2674 21.937 10.3923 21.9323 10.5125 21.9167C10.5272 22.4523 10.6355 23.269 10.9937 23.9256C11.5642 24.9716 13.1209 25.9977 15.4629 26.7783C17.745 27.539 18.9812 29.631 17.2696 32.2935H20.8829C19.5517 29.1555 20.5026 27.1587 24.5914 25.5422C27.5979 24.3535 28.5662 22.2022 28.8071 21.103ZM11.2582 21.6639C11.2482 22.6276 11.4512 23.718 12.2299 23.9257C12.9286 24.112 12.8071 23.4194 12.638 22.4557C12.5392 21.8926 12.4242 21.237 12.4471 20.6101C12.4279 20.5396 12.4201 20.4687 12.4201 20.4075C12.255 20.7582 11.8538 21.3289 11.2582 21.6639Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_952_30489"
        x1="-2.98023e-07"
        y1="20"
        x2="40"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC4D1F" />
        <stop offset="1" stopColor="#FFA63E" />
      </linearGradient>
    </defs>
  </svg>
);
