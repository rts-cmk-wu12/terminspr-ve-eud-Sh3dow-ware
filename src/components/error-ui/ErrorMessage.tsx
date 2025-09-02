import {MdError} from "react-icons/md";

export const ErrorMessage = () => {
  return (
      <>
        <label className={"error-activity"}>
          <MdError className={"error-activity__icon"}></MdError>
          <span className={"error-activity__message"}>Der opstod en fejl med selve API'et Prøv venlist igen senere.</span>
        </label>
      </>
  );
};