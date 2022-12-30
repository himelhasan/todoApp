import Header from "../Components/Header/Header";
import AuthProvider from "../Context/AuthProvider";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
