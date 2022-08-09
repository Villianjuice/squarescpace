import { ClipLoader } from "react-spinners";

import "./spinner.scss";

export const Spinner = () => {
  return (
    <div className="spinner">
      <ClipLoader size={55} />
    </div>
  );
};
