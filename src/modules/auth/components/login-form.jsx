import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "../schema";
import { PasswordInput } from "../../../components/ui/password-input";
import { useLoginMutation } from "../../../features/auth/api-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginHandler } from "../../../features/auth/action";

const LoginForm = () => {
  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values) {
    login(values)
      .unwrap()
      .then((data) => {
        dispatch(loginHandler(data));
        navigate("/user");
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="eg. gavravi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="eg. Test@123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading || isSuccess} type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
