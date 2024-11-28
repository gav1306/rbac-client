import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

export const PasswordInput = forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibilityHandler = () => {
    setShowPassword((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="relative">
      <Input ref={ref} type={showPassword ? "text" : "password"} {...props} />
      <Button
        type="button"
        className="absolute inset-y-0 right-0"
        variant="icon"
        onClick={togglePasswordVisibilityHandler}
      >
        {showPassword ? (
          <EyeClosedIcon color="#e11d48" className="!w-5 !h-5" />
        ) : (
          <EyeOpenIcon color="#e11d48" className="!w-5 !h-5" />
        )}
      </Button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
