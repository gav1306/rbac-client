import { Provider } from "react-redux";
import store from "../state/store";
import { Toaster } from "@/components/ui/sonner";
import AuthChecker from "../layouts/auth-checker";

const StoreProvider = () => {
  return (
    <Provider store={store}>
      <AuthChecker />
      <Toaster richColors toastOptions={{}} />
    </Provider>
  );
};

export default StoreProvider;
