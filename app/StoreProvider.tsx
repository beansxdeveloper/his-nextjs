"use client";

import { useState } from "react";
import { Provider as ReduxProvide } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistStore } from "redux-persist";
// import SocketProvider from "@/websocket";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { store } from "./lib/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


persistStore(store);


export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(new QueryClient());
  
  return (
    <ReduxProvide store={store}>
      <QueryClientProvider client={client}>
        {/* <SocketProvider> */}
          <AntdRegistry>{children}</AntdRegistry>
        {/* </SocketProvider> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReduxProvide>
  );
}
