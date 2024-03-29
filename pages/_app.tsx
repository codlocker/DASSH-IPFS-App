import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      activeChain={activeChain}
      secretKey={process.env.NEXT_PUBLIC_API_KEY}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
    <Footer />
    </>
  );
}

export default MyApp;
