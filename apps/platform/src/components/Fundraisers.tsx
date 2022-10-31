import { useQuery } from "@apollo/client";
import { FC } from "react";
import cx from "classnames";
import { GetHomeDataQuery, GET_HOME_DATA } from "../containers/home/home.data";
import { CampaignCard } from "./cards/CampaignCard";
import { ErrorContainer } from "./ErrorContainer";
import { LoadingContainer } from "./LoadingContainer";
import { CardGrid } from "./CardGrid";

interface Props {
  className?: string;
}

export const Fundraisers: FC<Props> = ({ className }) => {
  const { data, error, loading } = useQuery<GetHomeDataQuery>(GET_HOME_DATA);

  if (loading) {
    return <LoadingContainer message="Loading collections..." />;
  }

  if (error) {
    return <ErrorContainer message="Failed to load collections." />;
  }

  if (!data) {
    return <ErrorContainer message="Failed to load collections." />;
  }

  return (
    <div className={cx(className, "mx-auto w-full")}>
      <CardGrid>
        {[...data.campaigns, ...data.campaigns].map((campaign, idx) => (
          <CampaignCard key={idx} campaign={campaign} />
        ))}
      </CardGrid>
    </div>
  );
};
