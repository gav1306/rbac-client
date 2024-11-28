import { useEffect, useState } from "react";

export const useFirstRender = () => {
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    setFirstRender(true);
  }, []);

  return { firstRender };
};
