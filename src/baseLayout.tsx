import { ReactNode } from "react";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        maxHeight: "calc(100vh - 64px)",
      }}
      className="bg-[#FBFBFB] mt-[64px] scroll-smooth overflow-hidden overflow-y-scroll scrollbar animate-fadeIn"
    >
      {children}
    </div>
  );
};
