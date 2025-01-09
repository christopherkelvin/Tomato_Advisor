import { Error } from "../../../types/auth";
import { useEffect, useState } from "react";

export const useLoginHook = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Error>({});
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const validate = () => {
    let errors: Error = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const submitForm = () => {
    const validated = validate();
    if (validated) {
      console.log("Login successful", email, password);
    }
  };
  return {
    isLoading,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    submitForm,
  };
};
