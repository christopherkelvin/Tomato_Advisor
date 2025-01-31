import { Error } from "../types/auth";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Setter<T> = Dispatch<SetStateAction<T>>;
export const useLoginHook = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) errors.email = "Invalid email format";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const submitForm = () => {
    const validated = validate();
    if (validated) {
      console.log("Login successful", email, password);
      setEmail("")
      setPassword("")
    }
  };
   const handleInputChange = (setter:Setter<string>) => (value: string) => {
     setter(value);
     if (errors) setErrors({});
   };
  const treeImage=require("../../assets/tomato-tree.png");
  return {
    isLoading,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    submitForm,
    setErrors,
    handleInputChange,
    treeImage
  };
};
