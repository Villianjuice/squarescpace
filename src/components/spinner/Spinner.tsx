import { ClipLoader } from "react-spinners";

import "./spinner.scss";

interface SpinnerProps {
  width?: boolean
}

export const Spinner: React.FC <SpinnerProps> = ({width}) => {
  return (
    <div className={`${width && 'spinner__width'} spinner`}>
      <ClipLoader size={55} />
    </div>
  );
};
