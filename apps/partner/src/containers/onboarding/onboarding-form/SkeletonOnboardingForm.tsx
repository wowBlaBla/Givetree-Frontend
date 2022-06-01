import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { SkeletonFormInputField } from "../../../components/skeleton/SkeletonFormInputField";

export const SkeletonOnboardingForm = () => (
  <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f9f9f9">
    <h2 className="section-title">
      <Skeleton height={40} width={`100%`} />
    </h2>

    <div className="flex flex-col space-y-8 mt-8">
      <SkeletonFormInputField />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SkeletonFormInputField />
        <SkeletonFormInputField />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SkeletonFormInputField />
        <SkeletonFormInputField />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SkeletonFormInputField />
        <SkeletonFormInputField />
      </div>

      <SkeletonFormInputField textarea />

      {/* <div className="space-y-3 text-gray-200">
        <Skeleton height={20} />
        <Skeleton height={250} />
      </div> */}

      <SkeletonFormInputField />
      <SkeletonFormInputField />
      <SkeletonFormInputField />
      <SkeletonFormInputField />
      <SkeletonFormInputField />
    </div>
  </SkeletonTheme>
);
