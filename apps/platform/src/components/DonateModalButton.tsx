import React, { FC, useCallback } from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";

import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL } from "@solana/web3.js";

import { PrimaryButton, PrimaryModalButton } from "./PrimaryCta";
import { Field } from "./forms/Field";
import { InputErrorBox } from "./forms/InputError";
import { Label } from "./forms/Label";
import { Modal } from "./Modal";
import { VerifiedBadge } from "./badges/VerifiedBadge";
import { ConnectWalletIcon } from "./icons/ConnectWalletIcon";
import { SectionTitle } from "./SectionTitle";
import { Charity } from "../typed/charity";
import { VerifiedBadgeType } from "../typed/enum/verifiedBadgeType";

interface DonateModalButtonProps {
  className?: string;
  charity: Charity;
}

interface DonationValues {
  amount: number;
}

const validateDonationForm = yup.object().shape({
  amount: yup.number(),
});

export const DonateModalButton: FC<DonateModalButtonProps> = ({ charity, className }) => {
  const { connection } = useConnection();
  const { connected, publicKey, sendTransaction } = useWallet();

  const onSubmit = useCallback(
    async (values: DonationValues) => {
      const donationAmount = (LAMPORTS_PER_SOL * values.amount).toFixed(2);
      if (!publicKey) throw new WalletNotConnectedError();

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: Keypair.generate().publicKey,
          lamports: parseInt(donationAmount),
        })
      );

      const signature = await sendTransaction(transaction, connection);

      const isProcessed = await connection.confirmTransaction(signature, "processed");

      if (isProcessed) {
        toast.success("Thank you for your donation!");
        // document.getElementById(`donate-modal-${charity.slug}`);
      }
    },
    [publicKey, sendTransaction, connection]
  );

  // if (isLoading) {
  //   return <LoadingContainer message="processing donation...." />;
  // }

  return (
    <div className={className}>
      <label
        htmlFor={`donate-modal-${charity.slug}`}
        className="flex absolute justify-center items-center cursor-pointer py-2 px-3 w-full text-sm rounded-b-lg bg-brand-orange text-white button-hover sm:text-base xl:text-lg"
      >
        Donate
      </label>

      <Modal modalName={`donate-modal-${charity.slug}`}>
        <SectionTitle className="space-x-1 text-center text-white">
          <span>{charity.name}</span>
          {charity.isVerified && (
            <VerifiedBadge
              className="mb-3.5"
              isVerified={charity.isVerified}
              type={VerifiedBadgeType.Charity}
              large
            />
          )}
        </SectionTitle>

        <div className="flex flex-col items-center w-full mt-5 space-y-5"></div>

        <Formik
          initialValues={{ amount: 0 }}
          onSubmit={onSubmit}
          validationSchema={validateDonationForm}
        >
          {({ errors, touched, values }) => (
            <Form>
              <Label>Amount</Label>
              <Field
                className="w-full input input-bordered"
                name="amount"
                type="number"
                value={values.amount}
              />
              <InputErrorBox
                hasError={touched.amount && !!errors.amount}
                message={errors.amount}
              />

              <div className="flex flex-col w-full py-2 mt-6">
                <h3>Distribution:</h3>
                <table className="mt-1 ">
                  <tbody>
                    <tr>
                      <td className="py-1">{charity.name}</td>
                      <td className="py-1 text-right">99%</td>
                    </tr>
                    <tr>
                      <td className="py-1">GiveTree Fee</td>
                      <td className="py-1 text-right">1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-row-reverse">
                {connected && <PrimaryButton type="submit">Donate</PrimaryButton>}
                {!connected && (
                  <PrimaryModalButton htmlFor="wallet-modal">
                    <div className="flex items-center space-x-1">
                      <ConnectWalletIcon className="w-6 h-6" />
                      <div className="hidden md:block whitespace-nowrap">
                        Connect wallet
                      </div>
                    </div>
                  </PrimaryModalButton>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
