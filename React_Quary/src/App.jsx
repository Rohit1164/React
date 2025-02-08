import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Header />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
