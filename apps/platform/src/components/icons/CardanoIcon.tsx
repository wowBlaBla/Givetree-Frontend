import { FC } from "react";

interface Props {
  className?: string;
}

export const CardanoIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1086_27151)">
      <circle cx="23" cy="22" r="20" fill="#0033AD" />
      <path
        d="M22.6843 10.166C23.2447 9.87377 23.9288 10.5517 23.6311 11.1117C23.4581 11.5681 22.8024 11.6895 22.4675 11.3415C22.1126 11.0076 22.2284 10.3477 22.6843 10.166ZM16.6562 10.8158C16.9966 10.6757 17.4276 10.9876 17.3929 11.3586C17.429 11.7615 16.9365 12.0579 16.5895 11.8665C16.1297 11.6884 16.1823 10.9421 16.6562 10.8158ZM29.0024 11.8778C28.4704 11.8135 28.3862 10.977 28.8984 10.8086C29.2957 10.6149 29.6602 10.9782 29.7183 11.3548C29.635 11.6763 29.3658 11.9708 29.0024 11.8778ZM18.0278 13.3815C18.597 13.0215 19.4092 13.5576 19.3216 14.2187C19.292 14.8863 18.4054 15.273 17.9051 14.8217C17.4214 14.4673 17.4947 13.654 18.0278 13.3815ZM26.7168 13.7635C26.9707 13.109 27.9997 13.0892 28.2887 13.7263C28.5744 14.2221 28.223 14.836 27.714 15.0046C27.0398 15.1304 26.3994 14.4016 26.7168 13.7635ZM21.9584 14.9674C21.9528 14.4049 22.4652 13.9858 22.9998 13.9474C23.3544 14.0185 23.7409 14.1696 23.893 14.5274C24.1765 15.021 23.9247 15.7006 23.4125 15.9272C23.1782 16.0585 22.9013 16.0092 22.6462 15.9939C22.2563 15.8025 21.9279 15.427 21.9584 14.9674ZM12.9937 15.787C13.5136 15.4674 14.2151 16.0507 14.0183 16.6156C13.9099 17.1041 13.2531 17.3029 12.8777 16.991C12.477 16.6987 12.5405 15.9961 12.9937 15.787ZM32.2441 15.786C32.6852 15.4435 33.4132 15.8364 33.3606 16.3934C33.3902 16.9012 32.7608 17.2843 32.3229 17.0228C31.8406 16.806 31.7914 16.064 32.2441 15.786ZM24.4794 16.7972C25.2074 16.5357 26.072 16.8487 26.4869 17.4977C27.0342 18.2911 26.743 19.4994 25.8937 19.9547C25.0136 20.4932 23.7285 20.0367 23.4035 19.0539C23.0345 18.1741 23.5721 17.073 24.4794 16.7972ZM20.2082 16.8838C21.015 16.5029 22.1008 16.8224 22.4905 17.6477C22.9491 18.4511 22.5945 19.5696 21.7746 19.9844C20.9537 20.4506 19.7955 20.0972 19.3982 19.2347C18.9527 18.4007 19.3483 17.2678 20.2082 16.8838ZM15.9316 18.3459C15.9929 17.8261 16.4833 17.4878 16.978 17.4528C17.5111 17.5171 17.9369 17.9311 17.9949 18.4706C17.9599 19.0047 17.5472 19.5267 16.9812 19.5235C16.3585 19.5771 15.8126 18.9576 15.9316 18.3459ZM28.5635 17.5658C29.2027 17.1938 30.0904 17.7354 30.062 18.4698C30.1058 19.2479 29.1234 19.7963 28.4868 19.3399C27.8256 18.9598 27.8772 17.8895 28.5635 17.5658ZM18.4701 20.3083C19.2177 20.1026 20.0726 20.455 20.4393 21.1422C20.8409 21.8339 20.6768 22.7949 20.0529 23.3022C19.2528 24.0464 17.7772 23.7476 17.3514 22.732C16.862 21.801 17.4564 20.5533 18.4701 20.3083ZM26.5713 20.3044C27.2981 20.0965 28.1519 20.3767 28.5426 21.0388C29.0592 21.7961 28.8126 22.9256 28.0435 23.4138C27.2379 23.9807 25.99 23.683 25.5467 22.7967C25.0092 21.8798 25.55 20.5841 26.5713 20.3044ZM13.6614 21.1684C14.3072 20.9241 15.0231 21.6368 14.7614 22.2771C14.6016 22.8604 13.7795 23.076 13.3548 22.646C12.8579 22.2421 13.0419 21.3435 13.6614 21.1684ZM31.1664 22.0976C31.1478 21.5625 31.5393 21.0886 32.088 21.059C32.5303 21.1291 32.9604 21.4859 32.9254 21.9674C32.9659 22.6033 32.1996 23.0355 31.6578 22.7367C31.4039 22.6077 31.2736 22.3472 31.1664 22.0976ZM10.4859 21.4825C10.8744 21.3129 11.355 21.6497 11.2663 22.0812C11.2455 22.5697 10.5242 22.7576 10.2592 22.3494C10.0251 22.0659 10.1652 21.6287 10.4859 21.4825ZM34.9844 21.4728C35.258 21.278 35.6969 21.418 35.8053 21.7376C35.9891 22.0867 35.652 22.565 35.2591 22.506C34.7075 22.5562 34.5291 21.7156 34.9844 21.4728ZM20.5805 23.818C21.6029 23.5521 22.7019 24.4047 22.7083 25.4574C22.775 26.5213 21.6926 27.4646 20.646 27.2189C19.837 27.0886 19.2023 26.3094 19.2285 25.4919C19.2263 24.7101 19.8163 23.9834 20.5805 23.818ZM24.6294 23.8158C25.6671 23.5258 26.799 24.3936 26.7825 25.4707C26.8373 26.5148 25.7886 27.4264 24.7639 27.2193C23.7996 27.0946 23.0881 26.0351 23.3573 25.0994C23.4932 24.4758 24.0142 23.9687 24.6294 23.8158ZM16.8227 24.4638C17.5408 24.3413 18.214 25.1424 17.9227 25.8243C17.7103 26.5508 16.653 26.7479 16.1855 26.1544C15.6371 25.5845 16.0465 24.5425 16.8227 24.4638ZM28.6969 24.4959C29.3372 24.2277 30.1232 24.7815 30.0739 25.4765C30.0997 26.2415 29.1293 26.769 28.5032 26.3225C27.794 25.9216 27.9231 24.7418 28.6969 24.4959ZM32.0159 27.8248C31.7652 27.3575 32.2206 26.738 32.7395 26.8246C32.9978 26.8202 33.1784 27.0237 33.3438 27.1945C33.3777 27.4714 33.4347 27.8018 33.2048 28.0153C32.8926 28.4104 32.1855 28.2976 32.0159 27.8248ZM12.9915 26.9547C13.4765 26.6318 14.1744 27.1133 14.0653 27.6803C14.0073 28.1818 13.3757 28.4683 12.9596 28.1838C12.5131 27.9255 12.5295 27.1901 12.9915 26.9547ZM22.5727 28.0043C23.2076 27.7242 24.0164 28.2769 23.9562 28.9762C24.0033 29.7489 23.0029 30.284 22.3821 29.82C21.6926 29.4216 21.8075 28.2494 22.5727 28.0043ZM18.135 29.0396C18.6758 28.7551 19.4014 29.2465 19.3522 29.8517C19.3687 30.3486 18.8837 30.7721 18.3933 30.6987C17.9872 30.6899 17.7223 30.3258 17.5921 29.9796C17.5987 29.6022 17.7541 29.1819 18.135 29.0396ZM27.124 29.0483C27.6801 28.7047 28.4704 29.1982 28.4178 29.8455C28.4321 30.5219 27.5389 30.9552 27.0211 30.5108C26.5198 30.1625 26.581 29.3253 27.124 29.0483ZM28.6872 32.9128C28.4398 32.5385 28.731 32.0876 29.1327 32.0023C29.4556 32.068 29.7971 32.3108 29.7292 32.6852C29.6822 33.1919 28.9411 33.3474 28.6872 32.9128ZM16.2786 32.5878C16.3771 32.2912 16.6157 31.9964 16.9649 32.0735C17.4739 32.1096 17.625 32.8768 17.1795 33.1133C16.7788 33.3834 16.3141 33.0135 16.2786 32.5878ZM22.265 32.9281C22.3625 32.4893 22.9305 32.2759 23.3049 32.509C23.5523 32.6152 23.6245 32.892 23.688 33.1273C23.6541 33.2498 23.6237 33.3725 23.5939 33.495C23.4407 33.6767 23.2437 33.8583 22.9886 33.8518C22.5146 33.9073 22.0869 33.3714 22.265 32.9281Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1086_27151"
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
          result="effect1_dropShadow_1086_27151"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1086_27151"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
