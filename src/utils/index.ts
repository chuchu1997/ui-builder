import { toast } from "react-hot-toast";

const UtilsHandler = {
  callToast: ({ typeToast, message }: { typeToast: "success" | "error"; message: string }) => {
    if (typeToast == "success") return toast.success(message);
    toast.error("AAA");
  },
};
export { UtilsHandler };
