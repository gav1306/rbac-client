import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "../components/login-form";

const Login = () => {
  return (
    <Card className="w-[400px] h-full flex flex-col justify-center shadow-none border-none relative">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl text-primary">Login</CardTitle>
        <CardDescription>Please enter your details</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default Login;
