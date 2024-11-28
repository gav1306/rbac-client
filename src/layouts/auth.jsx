import { Outlet } from "react-router-dom";
import LoginImage from "../assets/login/login-illustration.png";

const AuthLayout = () => {
  return (
    <main className="p-10 h-dvh">
      <section className="grid grid-cols-2 w-full h-full overflow-hidden max-w-screen-xl m-auto rounded-xl">
        <div className="relative bg-[#ffe8e0] rounded-xl">
          <img
            src={LoginImage}
            alt="login image"
            className="absolute w-[305%] max-w-none left-[-120%] bottom-[-60%]"
          />
        </div>
        <div className="flex justify-center items-center rounded-xl">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
