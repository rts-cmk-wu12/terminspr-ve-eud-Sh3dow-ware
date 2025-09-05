import {MdError} from "react-icons/md";
import {ErrorMessageProps} from "@/types/ErrorType";

export const ErrorMessage = ({error_message = "Der opstod en fejl med selve API'et Prøv venlist igen senere.", children}: ErrorMessageProps) => {
  return (
      <>
        <label className={"error-activity"}>
          <MdError className={"error-activity__icon"}></MdError>
          <span className={"error-activity__message"}>{error_message}</span>
          {children}
        </label>
      </>
  );
};