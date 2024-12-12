import { FaCheck } from "react-icons/fa6";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-green-500">
      <FaCheck />
      <p>{message}</p>
    </div>
  );
};
