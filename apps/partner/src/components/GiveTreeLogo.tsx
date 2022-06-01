import React, { FC } from "react";

interface Props {
  className?: string;
  withText?: boolean;
}

export const GiveTreeLogo: FC<Props> = ({ className, withText }) => (
  <svg
    className={className}
    viewBox={`0 0 ${withText ? "145" : "40"} 40`}
    fill="currentColor"
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
    {withText && (
      <path
        d="M55.9385 20.1807H62.1689V28.3232C61.3454 28.5954 60.4896 28.8138 59.6016 28.9785C58.7135 29.1361 57.7074 29.2148 56.583 29.2148C55.0218 29.2148 53.6969 28.9069 52.6084 28.291C51.5199 27.6751 50.6927 26.7656 50.127 25.5625C49.5612 24.3594 49.2783 22.8805 49.2783 21.126C49.2783 19.4788 49.5934 18.0537 50.2236 16.8506C50.861 15.6475 51.7884 14.7165 53.0059 14.0576C54.2305 13.3988 55.7236 13.0693 57.4854 13.0693C58.3161 13.0693 59.1361 13.1589 59.9453 13.3379C60.7546 13.5169 61.4886 13.7497 62.1475 14.0361L61.041 16.7002C60.5612 16.4567 60.0133 16.2526 59.3975 16.0879C58.7816 15.9232 58.137 15.8408 57.4639 15.8408C56.4971 15.8408 55.6556 16.0628 54.9395 16.5068C54.2305 16.9508 53.679 17.5739 53.2852 18.376C52.8984 19.1709 52.7051 20.109 52.7051 21.1904C52.7051 22.2145 52.8447 23.124 53.124 23.9189C53.4033 24.7067 53.8438 25.3262 54.4453 25.7773C55.0469 26.2214 55.8311 26.4434 56.7979 26.4434C57.2705 26.4434 57.668 26.4219 57.9902 26.3789C58.3197 26.3288 58.6276 26.2786 58.9141 26.2285V22.9521H55.9385V20.1807ZM68.9365 16.9902V29H65.6602V16.9902H68.9365ZM67.3037 12.2852C67.7907 12.2852 68.2096 12.3997 68.5605 12.6289C68.9115 12.8509 69.0869 13.2699 69.0869 13.8857C69.0869 14.4945 68.9115 14.917 68.5605 15.1533C68.2096 15.3825 67.7907 15.4971 67.3037 15.4971C66.8096 15.4971 66.387 15.3825 66.0361 15.1533C65.6924 14.917 65.5205 14.4945 65.5205 13.8857C65.5205 13.2699 65.6924 12.8509 66.0361 12.6289C66.387 12.3997 66.8096 12.2852 67.3037 12.2852ZM75.2422 29L70.666 16.9902H74.0928L76.4131 23.833C76.542 24.234 76.6423 24.6566 76.7139 25.1006C76.7926 25.5446 76.8464 25.9421 76.875 26.293H76.9609C76.9824 25.9134 77.0326 25.5088 77.1113 25.0791C77.1973 24.6494 77.3083 24.234 77.4443 23.833L79.7539 16.9902H83.1807L78.6045 29H75.2422ZM89.8623 16.7646C90.9723 16.7646 91.9284 16.9795 92.7305 17.4092C93.5326 17.8317 94.152 18.4476 94.5889 19.2568C95.0257 20.0661 95.2441 21.0544 95.2441 22.2217V23.8115H87.499C87.5348 24.7354 87.8105 25.4622 88.3262 25.9922C88.849 26.515 89.5723 26.7764 90.4961 26.7764C91.2624 26.7764 91.9642 26.6976 92.6016 26.54C93.2389 26.3825 93.8942 26.1462 94.5674 25.8311V28.3662C93.973 28.6598 93.3499 28.8747 92.6982 29.0107C92.0537 29.1468 91.2695 29.2148 90.3457 29.2148C89.1426 29.2148 88.0755 28.9928 87.1445 28.5488C86.2207 28.1048 85.4938 27.4281 84.9639 26.5186C84.4411 25.609 84.1797 24.4632 84.1797 23.0811C84.1797 21.6774 84.416 20.5101 84.8887 19.5791C85.3685 18.641 86.0345 17.9391 86.8867 17.4736C87.7389 17.001 88.7308 16.7646 89.8623 16.7646ZM89.8838 19.0957C89.2464 19.0957 88.7165 19.2998 88.2939 19.708C87.8786 20.1162 87.6387 20.7572 87.5742 21.6309H92.1719C92.1647 21.1439 92.0752 20.7106 91.9033 20.3311C91.7386 19.9515 91.488 19.6507 91.1514 19.4287C90.8219 19.2067 90.3994 19.0957 89.8838 19.0957ZM104.225 29H100.895V16.0664H96.6299V13.2949H108.489V16.0664H104.225V29ZM117.352 16.7646C117.516 16.7646 117.706 16.7754 117.921 16.7969C118.143 16.8112 118.322 16.8327 118.458 16.8613L118.211 19.9336C118.104 19.8978 117.95 19.8727 117.749 19.8584C117.556 19.8369 117.387 19.8262 117.244 19.8262C116.822 19.8262 116.41 19.8799 116.009 19.9873C115.615 20.0947 115.26 20.2702 114.945 20.5137C114.63 20.75 114.38 21.0651 114.193 21.459C114.014 21.8457 113.925 22.3219 113.925 22.8877V29H110.648V16.9902H113.13L113.613 19.0098H113.774C114.011 18.6016 114.304 18.2292 114.655 17.8926C115.013 17.5488 115.418 17.2767 115.869 17.0762C116.327 16.8685 116.822 16.7646 117.352 16.7646ZM125.591 16.7646C126.701 16.7646 127.657 16.9795 128.459 17.4092C129.261 17.8317 129.881 18.4476 130.317 19.2568C130.754 20.0661 130.973 21.0544 130.973 22.2217V23.8115H123.228C123.263 24.7354 123.539 25.4622 124.055 25.9922C124.577 26.515 125.301 26.7764 126.225 26.7764C126.991 26.7764 127.693 26.6976 128.33 26.54C128.967 26.3825 129.623 26.1462 130.296 25.8311V28.3662C129.701 28.6598 129.078 28.8747 128.427 29.0107C127.782 29.1468 126.998 29.2148 126.074 29.2148C124.871 29.2148 123.804 28.9928 122.873 28.5488C121.949 28.1048 121.222 27.4281 120.692 26.5186C120.17 25.609 119.908 24.4632 119.908 23.0811C119.908 21.6774 120.145 20.5101 120.617 19.5791C121.097 18.641 121.763 17.9391 122.615 17.4736C123.467 17.001 124.459 16.7646 125.591 16.7646ZM125.612 19.0957C124.975 19.0957 124.445 19.2998 124.022 19.708C123.607 20.1162 123.367 20.7572 123.303 21.6309H127.9C127.893 21.1439 127.804 20.7106 127.632 20.3311C127.467 19.9515 127.216 19.6507 126.88 19.4287C126.55 19.2067 126.128 19.0957 125.612 19.0957ZM138.589 16.7646C139.699 16.7646 140.655 16.9795 141.457 17.4092C142.259 17.8317 142.879 18.4476 143.315 19.2568C143.752 20.0661 143.971 21.0544 143.971 22.2217V23.8115H136.226C136.261 24.7354 136.537 25.4622 137.053 25.9922C137.576 26.515 138.299 26.7764 139.223 26.7764C139.989 26.7764 140.691 26.6976 141.328 26.54C141.965 26.3825 142.621 26.1462 143.294 25.8311V28.3662C142.7 28.6598 142.076 28.8747 141.425 29.0107C140.78 29.1468 139.996 29.2148 139.072 29.2148C137.869 29.2148 136.802 28.9928 135.871 28.5488C134.947 28.1048 134.22 27.4281 133.69 26.5186C133.168 25.609 132.906 24.4632 132.906 23.0811C132.906 21.6774 133.143 20.5101 133.615 19.5791C134.095 18.641 134.761 17.9391 135.613 17.4736C136.465 17.001 137.457 16.7646 138.589 16.7646ZM138.61 19.0957C137.973 19.0957 137.443 19.2998 137.021 19.708C136.605 20.1162 136.365 20.7572 136.301 21.6309H140.898C140.891 21.1439 140.802 20.7106 140.63 20.3311C140.465 19.9515 140.215 19.6507 139.878 19.4287C139.549 19.2067 139.126 19.0957 138.61 19.0957Z"
        fill="currentColor"
      />
    )}

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