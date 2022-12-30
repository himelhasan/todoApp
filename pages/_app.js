import { Toaster } from "react-hot-toast";
import Header from "../Components/Header/Header";
import AuthProvider from "../Context/AuthProvider";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Toaster />
          <Header />
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
