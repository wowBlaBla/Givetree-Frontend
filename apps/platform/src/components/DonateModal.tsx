import React, { FC } from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Charity } from "../typed/charity";
import { SectionTitle } from "./SectionTitle";
import { Field } from "./forms/Field";
import { InputErrorBox } from "./forms/InputError";
import { Label } from "./forms/Label";
import { Modal } from "./Modal";

interface DonateModalProps {
  className?: string;
  charity: Charity;
}

const validateDonationForm = yup.object().shape({
  amount: yup.number(),
});

export const DonateModal: FC<DonateModalProps> = ({ charity, className }) => {
  const onSubmit = () => {
    toast.success("Thank you for the donation, you legend!");
  };

  return (
    <div className={className}>
      <label
        htmlFor={`donate-modal-${charity.slug}`}
        className="flex flex-col items-center flex-1 py-1 text-sm rounded-lg bg-brand-orange text-white button-hover sm:text-base xl:text-lg"
      >
        Donate
      </label>

      <Modal modalName={`donate-modal-${charity.slug}`}>
        <SectionTitle className="text-center text-white">{charity.name}</SectionTitle>

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
                <table className="mt-1">
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

              <div className="flex flex-row-reverse w-full mt-6">
                <label
                  htmlFor={`donate-modal-${charity.slug}`}
                  className="py-2 px-3 rounded-lg bg-brand-orange text-white button-hover cursor-pointer"
                >
                  Donate
                </label>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
