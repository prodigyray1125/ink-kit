import { createContext, useContext, useEffect, useState } from "react";

const InkLayoutContext = createContext<{
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isOpen: boolean) => void;
}>({
  isMobileNavOpen: false,
  setIsMobileNavOpen: () => {},
});

export const useInkLayoutContext = () => {
  return useContext(InkLayoutContext);
};

export const InkLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    isMobileNavOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMobileNavOpen]);

  return (
    <InkLayoutContext.Provider value={{ isMobileNavOpen, setIsMobileNavOpen }}>
      {children}
    </InkLayoutContext.Provider>
  );
};

InkLayoutProvider.displayName = "InkLayoutProvider";
