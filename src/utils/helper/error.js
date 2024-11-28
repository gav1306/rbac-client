import { toast } from "sonner";

export const successToast = (message) => {
  toast.success("Success", {
    description: message,
  });
};

export const errorToast = (message) => {
  toast.error("Error", {
    description: message,
  });
};

export const warningToast = (message) => {
  toast.warning("Warning", {
    description: message,
  });
};

export const defaultToast = (message) => {
  toast.info("Info", {
    description: message,
  });
};
