import React, { ComponentProps } from "react";

type TContainer = ComponentProps<"div"> & {
  children: React.ReactNode;
};

function Container({ children }: TContainer) {
  return <div className=" container mx-auto mb-16">{children}</div>;
}

export default Container;
