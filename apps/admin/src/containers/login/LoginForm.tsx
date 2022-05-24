import React, { FC } from "react";
import cx from "classnames";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";

import { AuthToken } from "../../utils/auth";
import { hasGraphQLError } from "../../utils/hasGraphQLError";
import { InputGroup } from "../../components/forms/InputGroup";
import { InputError } from "../../components/forms/InputError";

interface LoginFormValues {
  email: string;
  password: string;
}

const InnerLoginForm: FC<FormikProps<LoginFormValues>> = ({ errors, touched }) => (
  <Form>
    <div className="space-y-1">
      <InputGroup
        error={errors.email}
        label="Email"
        name="email"
        touched={touched.email}
        type="email"
      />

      <InputGroup
        error={errors.password}
        label="Password"
        name="password"
        touched={touched.password}
        type="password"
      />
    </div>

    <div className="flex mt-5">
      <button className="w-full" type="submit">
        Continue
      </button>
    </div>
  </Form>
);

interface LoginFormProps {
  initialEmail?: string;
  onSubmit: ({ email, password }: LoginFormValues) => void;
}

const LoginForm = withFormik<LoginFormProps, LoginFormValues>({
  mapPropsToValues: ({ initialEmail }) => ({
    email: initialEmail || "",
    password: "",
  }),
  validationSchema: yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
  }),

  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
})(InnerLoginForm);

interface LoginFormContainerProps {
  onAuthenticated: (authToken: AuthToken) => void;
}

export const LoginFormContainer: FC<LoginFormContainerProps> = ({}) => {
  const error = false;
  const unauthenticatedError = hasGraphQLError("UNAUTHENTICATED");

  // if (data?.authenticate) {
  //   onAuthenticated(data.authenticate);
  // }

  const handleOnSubmit = (values: LoginFormValues) => {
    return values;
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="w-full max-w-md">
        <div className={cx("z-10", [{ shake: error }])}>
          <div className="px-5 py-5 mt-5 bg-white border rounded-xl shadow-2xl md:px-12 md:py-10 border-50">
            <h2 className="text-xl font-medium text-left md:text-2xl text-brand-shark">
              Log in to GiveTree Partnerships
            </h2>
            <div className="mt-3" data-cy="login-error-msg">
              {unauthenticatedError && (
                <InputError message="Incorrect email or password." />
              )}
            </div>
            <div className="mt-5">
              <LoginForm onSubmit={handleOnSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
