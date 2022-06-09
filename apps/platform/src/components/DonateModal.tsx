import React, { FC, useCallback, useMemo, MouseEvent } from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Charity } from "../typed/charity";
import { SectionTitle } from "./SectionTitle";
import { InputGroup } from "./forms/InputGroup";
import { PrimaryButton } from "./PrimaryButton";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletIcon } from "./wallet/WalletIcon";
import { Button } from "./wallet/Button";
import { WalletName } from "@solana/wallet-adapter-base";

interface DonateModalProps {
  className?: string;
  charity: Charity;
}

const validateDonationForm = yup.object().shape({
  amount: yup.number(),
});

export const DonateModal: FC<DonateModalProps> = ({ charity, className }) => {
  const { wallets, select, connecting, connected, wallet, publicKey } = useWallet();

  const onSubmit = () => {
    toast.success("Thank you for the donation, you legend!");

    return console.log("submitted");
  };

  const content = useMemo(() => {
    if (connecting) {
      return "Connecting ...";
    } else if (connected && publicKey) {
      return publicKey.toBase58().slice(0, 10) + "...";
    } else if (connected) {
      return "Connected";
    } else if (wallet) {
      return "Connect";
    } else {
      return "Connect Wallet";
    }
  }, [connecting, connected, wallet, publicKey]);

  const handleSolanaWallet = useCallback(
    (event: MouseEvent, walletName: WalletName) => {
      return select(walletName);
    },
    [select]
  );

  return (
    <div className={className}>
      <label
        htmlFor={`donate-modal-${charity.slug}`}
        className="flex flex-1 flex-col items-center rounded-lg py-1 bg-brand-orange text-white button-hover text-sm sm:text-base xl:text-lg"
      >
        Donate
      </label>

      <input
        type="checkbox"
        id={`donate-modal-${charity.slug}`}
        className="modal-toggle"
      />
      <label
        htmlFor={`donate-modal-${charity.slug}`}
        className="modal cursor-pointer bg-black bg-opacity-50"
      >
        <label
          className="modal-box flex relative flex-col space-y-5 bg-brand-black rounded-xl"
          htmlFor=""
        >
          <label
            htmlFor={`donate-modal-${charity.slug}`}
            className="absolute right-2 top-2 my-4 mx-5 text-lg text-gray-400"
          >
            ✕
          </label>

          <SectionTitle className="text-center text-white">{charity.name}</SectionTitle>

          <div className="flex flex-col items-center space-y-5 w-full">
            {wallets.map((wallet, idx) => (
              <Button
                key={idx}
                className="border-2 border-brand-orange rounded-lg text-brand-orange button-hover"
                startIcon={<WalletIcon wallet={wallet} />}
                onClick={(event) => handleSolanaWallet(event, wallet.adapter.name)}
              >
                {content}
              </Button>
            ))}
          </div>

          <Formik
            initialValues={{ amount: 0 }}
            onSubmit={onSubmit}
            validationSchema={validateDonationForm}
          >
            {({ errors, touched, values }) => (
              <Form>
                <InputGroup
                  error={errors.amount}
                  label="Amount"
                  name="amount"
                  type="number"
                  value={values.amount}
                  touched={touched.amount}
                />

                <div className="flex flex-row-reverse w-full mt-3">
                  <PrimaryButton className="btn" type="submit">
                    Donate
                  </PrimaryButton>
                </div>
              </Form>
            )}
          </Formik>
        </label>
      </label>
    </div>
  );
};
