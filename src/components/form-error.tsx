import { FaExclamation } from "react-icons/fa6";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-red-500">
      <FaExclamation />
      <p>{message}</p>
    </div>
  );
};
