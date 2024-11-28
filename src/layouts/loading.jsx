import { Loader } from "lucide-react";

const Loading = (props) => {
  const { message = "Building your experience..." } = props;
  return (
    <main className="min-h-screen grid place-content-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <Loader
          className="stroke-primary motion-safe:animate-spin-slow"
          size={50}
        />
        <span className="capitalize">{message}</span>
      </div>
    </main>
  );
};

export default Loading;
