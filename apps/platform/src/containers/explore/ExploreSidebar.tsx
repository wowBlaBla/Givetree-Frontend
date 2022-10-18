import { FC, useMemo } from "react";
import { useRoute } from "wouter";
import { MenuList, PlatformRoute } from "../../configs/routes";
import { CheckBox } from "../../components/CheckBox";
import { InputBox } from "../../components/InputBox";

const navs = MenuList.find((m) => m.id === "explore")?.childrens || [];

export const ExploreSideBar: FC = () => {
  const [_, params] = useRoute(PlatformRoute.ExploreDetails);

  const navTitle = useMemo(
    () => navs.find((n) => n.id === params?.category)?.title,
    [params?.category]
  );

  return (
    <div className="hidden sm:flex flex-col min-w-[340px] max-w-[340px] py-8 bg-white border-r border-base-content border-opacity-25 dark:bg-mid-dark !relative">
      <div className="flex flex-col px-[20px]">
        <label
          tabIndex={0}
          className="justify-start w-full mb-4 bg-transparent border-0 text-xl uppercase text-white hover:bg-transparent font-bold"
        >
          Explore
        </label>
        {navs.map((item, index) => (
          <CheckBox key={`explore-nav-${index}`} title={item.title} className="mb-2" />
        ))}
        <div className="divider after:bg-[#C0C0C0] before:bg-[#C0C0C0]" />
        <CheckBox title="ALL" className="mb-2" />
        <CheckBox title="MINTS" className="mb-2" />
        <CheckBox title="SALES" className="mb-2" />
        <CheckBox title="AUCTIONS" />
        <div className="divider after:bg-[#C0C0C0] before:bg-[#C0C0C0]" />
        <InputBox
          Icon={() => (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99698 0C2.24314 0 0 2.24314 0 4.99698C0 7.75082 2.24314 9.99396 4.99698 9.99396C6.19451 9.99396 7.29429 9.56871 8.15621 8.86281L11.1398 11.8464C11.1858 11.8943 11.241 11.9326 11.302 11.959C11.363 11.9854 11.4287 11.9993 11.4952 12C11.5616 12.0007 11.6276 11.9881 11.6891 11.9629C11.7507 11.9378 11.8066 11.9006 11.8536 11.8536C11.9006 11.8066 11.9378 11.7507 11.9629 11.6891C11.9881 11.6276 12.0007 11.5616 12 11.4952C11.9993 11.4287 11.9854 11.363 11.959 11.302C11.9326 11.241 11.8943 11.1858 11.8464 11.1398L8.86281 8.15621C9.56871 7.29429 9.99396 6.19451 9.99396 4.99698C9.99396 2.24314 7.75082 0 4.99698 0ZM4.99698 0.999396C7.21071 0.999396 8.99457 2.78326 8.99457 4.99698C8.99457 7.21071 7.21071 8.99457 4.99698 8.99457C2.78326 8.99457 0.999396 7.21071 0.999396 4.99698C0.999396 2.78326 2.78326 0.999396 4.99698 0.999396Z"
                fill="#F3F3F3"
              />
            </svg>
          )}
          className="text-white"
          placeholder="Search"
        />
        <div className="divider after:bg-[#C0C0C0] before:bg-[#C0C0C0]" />
        <InputBox
          Icon={() => (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49704 0C7.85122 0 7.30089 0.459638 7.09245 1.09091H0.50652C0.440343 1.08989 0.374639 1.10324 0.313228 1.13019C0.251817 1.15715 0.195922 1.19716 0.148794 1.24791C0.101665 1.29866 0.064241 1.35914 0.0386975 1.42583C0.0131539 1.49251 0 1.56408 0 1.63636C0 1.70865 0.0131539 1.78022 0.0386975 1.8469C0.064241 1.91359 0.101665 1.97406 0.148794 2.02481C0.195922 2.07557 0.251817 2.11558 0.313228 2.14253C0.374639 2.16949 0.440343 2.18284 0.50652 2.18182H7.09245C7.30089 2.81309 7.85122 3.27273 8.49704 3.27273C9.14285 3.27273 9.69319 2.81309 9.90162 2.18182H11.4935C11.5597 2.18284 11.6254 2.16949 11.6868 2.14253C11.7482 2.11558 11.8041 2.07557 11.8512 2.02481C11.8983 1.97406 11.9358 1.91359 11.9613 1.8469C11.9868 1.78022 12 1.70865 12 1.63636C12 1.56408 11.9868 1.49251 11.9613 1.42583C11.9358 1.35914 11.8983 1.29866 11.8512 1.24791C11.8041 1.19716 11.7482 1.15715 11.6868 1.13019C11.6254 1.10324 11.5597 1.08989 11.4935 1.09091H9.90162C9.69319 0.459638 9.14285 0 8.49704 0ZM8.49704 1.09091C8.76863 1.09091 8.97568 1.3139 8.99059 1.60547C8.98949 1.6264 8.98949 1.64739 8.99059 1.66832C8.97521 1.95936 8.76829 2.18182 8.49704 2.18182C8.22544 2.18182 8.01839 1.95883 8.00348 1.66726C8.00459 1.64632 8.00459 1.62534 8.00348 1.6044C8.01886 1.31337 8.22578 1.09091 8.49704 1.09091ZM4.50178 4.36364C3.85597 4.36364 3.30563 4.82327 3.0972 5.45455H0.50652C0.440343 5.45352 0.374639 5.46688 0.313228 5.49383C0.251817 5.52078 0.195922 5.5608 0.148794 5.61155C0.101665 5.6623 0.064241 5.72278 0.0386975 5.78946C0.0131539 5.85615 0 5.92771 0 6C0 6.07229 0.0131539 6.14385 0.0386975 6.21054C0.064241 6.27722 0.101665 6.3377 0.148794 6.38845C0.195922 6.4392 0.251817 6.47922 0.313228 6.50617C0.374639 6.53312 0.440343 6.54648 0.50652 6.54545H3.0972C3.30563 7.17673 3.85597 7.63636 4.50178 7.63636C5.14759 7.63636 5.69793 7.17673 5.90636 6.54545H11.4935C11.5597 6.54648 11.6254 6.53312 11.6868 6.50617C11.7482 6.47922 11.8041 6.4392 11.8512 6.38845C11.8983 6.3377 11.9358 6.27722 11.9613 6.21054C11.9868 6.14385 12 6.07229 12 6C12 5.92771 11.9868 5.85615 11.9613 5.78946C11.9358 5.72278 11.8983 5.6623 11.8512 5.61155C11.8041 5.5608 11.7482 5.52078 11.6868 5.49383C11.6254 5.46688 11.5597 5.45352 11.4935 5.45455H5.90636C5.69793 4.82327 5.14759 4.36364 4.50178 4.36364ZM4.50178 5.45455C4.77337 5.45455 4.98042 5.67753 4.99533 5.96911C4.99423 5.99004 4.99423 6.01103 4.99533 6.03196C4.97995 6.323 4.77304 6.54545 4.50178 6.54545C4.23019 6.54545 4.02313 6.32247 4.00822 6.0309C4.00933 6.00996 4.00933 5.98897 4.00822 5.96804C4.0236 5.677 4.23052 5.45455 4.50178 5.45455ZM6.49941 8.72727C5.85359 8.72727 5.30326 9.18691 5.09482 9.81818H0.50652C0.440343 9.81716 0.374639 9.83051 0.313228 9.85747C0.251817 9.88442 0.195922 9.92443 0.148794 9.97519C0.101665 10.0259 0.064241 10.0864 0.0386975 10.1531C0.0131539 10.2198 0 10.2914 0 10.3636C0 10.4359 0.0131539 10.5075 0.0386975 10.5742C0.064241 10.6409 0.101665 10.7013 0.148794 10.7521C0.195922 10.8028 0.251817 10.8429 0.313228 10.8698C0.374639 10.8968 0.440343 10.9101 0.50652 10.9091H5.09482C5.30326 11.5404 5.85359 12 6.49941 12C7.14522 12 7.69556 11.5404 7.90399 10.9091H11.4935C11.5597 10.9101 11.6254 10.8968 11.6868 10.8698C11.7482 10.8429 11.8041 10.8028 11.8512 10.7521C11.8983 10.7013 11.9358 10.6409 11.9613 10.5742C11.9868 10.5075 12 10.4359 12 10.3636C12 10.2914 11.9868 10.2198 11.9613 10.1531C11.9358 10.0864 11.8983 10.0259 11.8512 9.97519C11.8041 9.92443 11.7482 9.88442 11.6868 9.85747C11.6254 9.83051 11.5597 9.81716 11.4935 9.81818H7.90399C7.69556 9.18691 7.14522 8.72727 6.49941 8.72727ZM6.49941 9.81818C6.771 9.81818 6.97805 10.0412 6.99296 10.3327C6.99186 10.3537 6.99186 10.3747 6.99296 10.3956C6.97758 10.6866 6.77066 10.9091 6.49941 10.9091C6.22781 10.9091 6.02076 10.6861 6.00585 10.3945C6.00696 10.3736 6.00696 10.3526 6.00585 10.3317C6.02123 10.0406 6.22815 9.81818 6.49941 9.81818Z"
                fill="#F3F3F3"
              />
            </svg>
          )}
          className="text-white"
          placeholder="Alphabetical"
        />
        <CheckBox title="All" className="mt-6 mb-2" />
        <CheckBox title="Top" className="mb-2" />
        <CheckBox title="Art" className="mb-2" />
        <CheckBox title="Collectibles" className="mb-2" />
        <CheckBox title="Domain names" className="mb-2" />
        <CheckBox title="Music" className="mb-2" />
        <CheckBox title="Photography" className="mb-2" />
        <CheckBox title="Sports" className="mb-2" />
        <CheckBox title="Trading cards" className="mb-2" />
        <CheckBox title="Utility" className="mb-2" />
        <CheckBox title="Virtual worlds" />
        <div className="divider after:bg-[#C0C0C0] before:bg-[#C0C0C0]" />
        <InputBox
          Icon={() => (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49704 0C7.85122 0 7.30089 0.459638 7.09245 1.09091H0.50652C0.440343 1.08989 0.374639 1.10324 0.313228 1.13019C0.251817 1.15715 0.195922 1.19716 0.148794 1.24791C0.101665 1.29866 0.064241 1.35914 0.0386975 1.42583C0.0131539 1.49251 0 1.56408 0 1.63636C0 1.70865 0.0131539 1.78022 0.0386975 1.8469C0.064241 1.91359 0.101665 1.97406 0.148794 2.02481C0.195922 2.07557 0.251817 2.11558 0.313228 2.14253C0.374639 2.16949 0.440343 2.18284 0.50652 2.18182H7.09245C7.30089 2.81309 7.85122 3.27273 8.49704 3.27273C9.14285 3.27273 9.69319 2.81309 9.90162 2.18182H11.4935C11.5597 2.18284 11.6254 2.16949 11.6868 2.14253C11.7482 2.11558 11.8041 2.07557 11.8512 2.02481C11.8983 1.97406 11.9358 1.91359 11.9613 1.8469C11.9868 1.78022 12 1.70865 12 1.63636C12 1.56408 11.9868 1.49251 11.9613 1.42583C11.9358 1.35914 11.8983 1.29866 11.8512 1.24791C11.8041 1.19716 11.7482 1.15715 11.6868 1.13019C11.6254 1.10324 11.5597 1.08989 11.4935 1.09091H9.90162C9.69319 0.459638 9.14285 0 8.49704 0ZM8.49704 1.09091C8.76863 1.09091 8.97568 1.3139 8.99059 1.60547C8.98949 1.6264 8.98949 1.64739 8.99059 1.66832C8.97521 1.95936 8.76829 2.18182 8.49704 2.18182C8.22544 2.18182 8.01839 1.95883 8.00348 1.66726C8.00459 1.64632 8.00459 1.62534 8.00348 1.6044C8.01886 1.31337 8.22578 1.09091 8.49704 1.09091ZM4.50178 4.36364C3.85597 4.36364 3.30563 4.82327 3.0972 5.45455H0.50652C0.440343 5.45352 0.374639 5.46688 0.313228 5.49383C0.251817 5.52078 0.195922 5.5608 0.148794 5.61155C0.101665 5.6623 0.064241 5.72278 0.0386975 5.78946C0.0131539 5.85615 0 5.92771 0 6C0 6.07229 0.0131539 6.14385 0.0386975 6.21054C0.064241 6.27722 0.101665 6.3377 0.148794 6.38845C0.195922 6.4392 0.251817 6.47922 0.313228 6.50617C0.374639 6.53312 0.440343 6.54648 0.50652 6.54545H3.0972C3.30563 7.17673 3.85597 7.63636 4.50178 7.63636C5.14759 7.63636 5.69793 7.17673 5.90636 6.54545H11.4935C11.5597 6.54648 11.6254 6.53312 11.6868 6.50617C11.7482 6.47922 11.8041 6.4392 11.8512 6.38845C11.8983 6.3377 11.9358 6.27722 11.9613 6.21054C11.9868 6.14385 12 6.07229 12 6C12 5.92771 11.9868 5.85615 11.9613 5.78946C11.9358 5.72278 11.8983 5.6623 11.8512 5.61155C11.8041 5.5608 11.7482 5.52078 11.6868 5.49383C11.6254 5.46688 11.5597 5.45352 11.4935 5.45455H5.90636C5.69793 4.82327 5.14759 4.36364 4.50178 4.36364ZM4.50178 5.45455C4.77337 5.45455 4.98042 5.67753 4.99533 5.96911C4.99423 5.99004 4.99423 6.01103 4.99533 6.03196C4.97995 6.323 4.77304 6.54545 4.50178 6.54545C4.23019 6.54545 4.02313 6.32247 4.00822 6.0309C4.00933 6.00996 4.00933 5.98897 4.00822 5.96804C4.0236 5.677 4.23052 5.45455 4.50178 5.45455ZM6.49941 8.72727C5.85359 8.72727 5.30326 9.18691 5.09482 9.81818H0.50652C0.440343 9.81716 0.374639 9.83051 0.313228 9.85747C0.251817 9.88442 0.195922 9.92443 0.148794 9.97519C0.101665 10.0259 0.064241 10.0864 0.0386975 10.1531C0.0131539 10.2198 0 10.2914 0 10.3636C0 10.4359 0.0131539 10.5075 0.0386975 10.5742C0.064241 10.6409 0.101665 10.7013 0.148794 10.7521C0.195922 10.8028 0.251817 10.8429 0.313228 10.8698C0.374639 10.8968 0.440343 10.9101 0.50652 10.9091H5.09482C5.30326 11.5404 5.85359 12 6.49941 12C7.14522 12 7.69556 11.5404 7.90399 10.9091H11.4935C11.5597 10.9101 11.6254 10.8968 11.6868 10.8698C11.7482 10.8429 11.8041 10.8028 11.8512 10.7521C11.8983 10.7013 11.9358 10.6409 11.9613 10.5742C11.9868 10.5075 12 10.4359 12 10.3636C12 10.2914 11.9868 10.2198 11.9613 10.1531C11.9358 10.0864 11.8983 10.0259 11.8512 9.97519C11.8041 9.92443 11.7482 9.88442 11.6868 9.85747C11.6254 9.83051 11.5597 9.81716 11.4935 9.81818H7.90399C7.69556 9.18691 7.14522 8.72727 6.49941 8.72727ZM6.49941 9.81818C6.771 9.81818 6.97805 10.0412 6.99296 10.3327C6.99186 10.3537 6.99186 10.3747 6.99296 10.3956C6.97758 10.6866 6.77066 10.9091 6.49941 10.9091C6.22781 10.9091 6.02076 10.6861 6.00585 10.3945C6.00696 10.3736 6.00696 10.3526 6.00585 10.3317C6.02123 10.0406 6.22815 9.81818 6.49941 9.81818Z"
                fill="#F3F3F3"
              />
            </svg>
          )}
          className="text-white"
          placeholder="Alphabetical"
        />
        <CheckBox title="Animal Welfare" className="mt-6 mb-2" />
        <CheckBox title="Ocean Conservation" className="mb-2" />
        <CheckBox title="Animal Conservation" className="mb-2" />
        <CheckBox title="Homelessness" className="mb-2" />
        <CheckBox title="Water safety " className="mb-2" />
        <CheckBox title="Education" className="mb-2" />
      </div>
    </div>
  );
};
