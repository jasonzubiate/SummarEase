"use client";

import { Provider } from "react-redux";
import { store } from "@/services/store";

function ProviderLayout({ children }: any) {
  return (
    <Provider store={store}>
      <body>{children}</body>
    </Provider>
  );
}

export default ProviderLayout;
