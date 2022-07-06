import React, { FC, useCallback, useState } from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { SystemProgram, Transaction, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import {
  useConnection,
  useWallet as useSolanaWallet,
} from "@solana/wallet-adapter-react";

import { GiveTreeLogo } from "./GiveTreeLogo";
import { PrimaryButton, PrimaryModalButton } from "./PrimaryCta";
import { Modal } from "./Modal";
import { SectionTitle } from "./SectionTitle";
import { VerifiedBadge } from "./badges/VerifiedBadge";
import { Field } from "./forms/Field";
import { InputErrorBox } from "./forms/InputError";
import { Label } from "./forms/Label";
import { SolanaColorIcon } from "./icons/SolanaColorIcon";
import { ConnectWalletButton } from "./wallet/ConnectWalletButton";
import { Charity } from "../typed/charity";
import { VerifiedBadgeType } from "../typed/enum/verifiedBadgeType";

interface DonateModalButtonProps {
  containerClassName?: string;
  buttonClassName?: string;
  charity: Charity;
}

interface DonationValues {
  amount: number;
}

const validateDonationForm = yup.object().shape({
  amount: yup
    .number()
    .test("amount", "Donation amount cannot be less than 0.1 SOL", (value) => {
      if (!value) {
        return false;
      }

      return value >= 0.1;
    }),
});

export const DonateModalButton: FC<DonateModalButtonProps> = ({
  charity,
  buttonClassName,
  containerClassName,
}) => {
  const { connection } = useConnection();
  const { connected: isWalletConnected, publicKey, sendTransaction } = useSolanaWallet();
  const [isProcessingPaymentLoading, setIsProcessingPaymentLoading] =
    useState<boolean>(false);

  const processTransaction = useCallback(
    async (amount: number) => {
      if (!publicKey) {
        toast.warning("Donation was not processed.");
        setIsProcessingPaymentLoading(false);
        return;
      }

      try {
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            // TODO: Add contract address here.
            toPubkey: "" as unknown as PublicKey,
            lamports: parseInt((LAMPORTS_PER_SOL * amount).toFixed(2)),
          })
        );

        const signature = await sendTransaction(transaction, connection);

        return await connection.confirmTransaction(signature, "processed");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.warning("Donation was not processed.");
        setIsProcessingPaymentLoading(false);
      }
    },
    [publicKey, sendTransaction, connection]
  );

  const onSubmit = async (values: DonationValues) => {
    setIsProcessingPaymentLoading(true);

    const transactionSuccessful = await processTransaction(values.amount);

    if (transactionSuccessful) {
      toast.success("Thank you for your donation!");
    }

    setIsProcessingPaymentLoading(false);
  };

  return (
    <div className={containerClassName}>
      <PrimaryModalButton
        htmlFor={`donate-modal-${charity.slug}`}
        className={buttonClassName}
      >
        Donate
      </PrimaryModalButton>

      <Modal modalName={`donate-modal-${charity.slug}`}>
        {isProcessingPaymentLoading && (
          <div className="flex flex-col space-y-3 absolute inset-0 justify-center items-center w-full h-full bg-black bg-opacity-70 z-50">
            <GiveTreeLogo className="w-12 h-12 animate-pulse" />
            <h3 className="text-white font-semibold">Processing donation...</h3>
          </div>
        )}

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

        <div className="flex flex-col items-center w-full mt-5 space-y-5" />

        <Formik
          initialValues={{ amount: 0.1 }}
          onSubmit={onSubmit}
          validationSchema={validateDonationForm}
        >
          {({ errors, touched, values }) => (
            <Form>
              <Label>Amount</Label>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <SolanaColorIcon className="w-7" />
                  <Field
                    className="w-full input input-bordered mx-3"
                    name="amount"
                    type="number"
                    min="0.1"
                    value={values.amount}
                    isError={!!errors.amount}
                    isDisabled={isProcessingPaymentLoading}
                  />
                  <p className="font-medium">SOL</p>
                </div>

                <div className="mt-1">
                  <InputErrorBox
                    hasError={touched.amount && !!errors.amount}
                    message={errors.amount}
                  />
                </div>
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

              <div className="flex flex-row-reverse mt-3">
                {isWalletConnected && <PrimaryButton type="submit">Donate</PrimaryButton>}
                {!isWalletConnected && <ConnectWalletButton />}
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
