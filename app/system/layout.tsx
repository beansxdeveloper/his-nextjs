"use client";

import LayoutMain from "@/layouts/LayoutMain";
import { Spin } from "antd";
import { Suspense } from "react";

const RootLayout = ({ children }: React.PropsWithChildren) => {

return (
    <>
      <LayoutMain namePage="">
        <Suspense fallback={<Spin size="large" />}>
          {children}
        </Suspense>
      </LayoutMain>
    </>
  );
};

export default RootLayout;