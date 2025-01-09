import { Dispatch, SetStateAction, useState } from "react";
import { Error } from "../types/auth";
type Setter<T> = Dispatch<SetStateAction<T>>;

export const useRegisterHook = () => {
    const [email, setEmail] = useState<string>('');
    const [errors, setErrors] = useState<Error>({});
    const [password, setPassword] = useState<string>('');
       const handleInputChange =
         (setter: Setter<string>) => (value: string) => {
           setter(value);
           if (errors) setErrors({});
           };
    const handleRegister=()=>{

    }
    return {
      errors,
      setErrors,
      handleInputChange,
      password,
      setPassword,
      email,
      setEmail,
      handleRegister,
    };
}