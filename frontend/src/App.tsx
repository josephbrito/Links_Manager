import React from "react";
import Layout from "./components/Layout";
import { DataProvider } from "./context";
import { ModalProvider } from "./context/modal";
import { GlobalStyle } from "./global/GlobalStyle";

function App() {
  return (
    <ModalProvider>
      <DataProvider>
        <GlobalStyle />
        <Layout />
      </DataProvider>
    </ModalProvider>
  );
}

export default App;
