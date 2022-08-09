import React from "react";
import { FieldError } from "react-hook-form";

interface ErrorMessageProps {
  obj: FieldError | undefined;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ obj }) => {
  return (
    <div className="form__error">{obj && <p>{obj?.message || "Error"}</p>}</div>
  );
};
