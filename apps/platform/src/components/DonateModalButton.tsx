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
import { SolanaColorIcon } from "./icons/SolanaColorIcon";

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
      }
    },
    [publicKey, sendTransaction, connection]
  );

  return (
    <div className={className}>
      <label
        htmlFor={`donate-modal-${charity.slug}`}
        className="flex flex-col items-center flex-1 py-1 mx-2 text-sm text-white rounded-lg cursor-pointer bg-brand-orange button-hover sm:text-base xl:text-lg"
      >
        Donate
      </label>

      <Modal modalName={`donate-modal-${charity.slug}`}>
        <SectionTitle className="space-x-1 text-center text-white">
          <span>{charity.name}</span>
          {charity.isVerified && (
            <VerifiedBadge
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
              <div className="flex flex-row items-center">
                <SolanaColorIcon className="mr-2 w-7" />
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
                <p className="ml-2 font-medium">SOL</p>
              </div>

              <div className="flex flex-col w-full py-2 mt-6">
                <h3>Distribution</h3>
                <table className="mt-1">
                  <tbody>
                    <tr>
                      <td className="py-1">{charity.name}</td>
                      <td className="py-1 text-right">96.5%</td>
                    </tr>
                    <tr>
                      <td className="py-1">GiveTree platform fee</td>
                      <td className="py-1 text-right">3.5%</td>
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
