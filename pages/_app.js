import "imports/styles/globals.css";
import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
// import AuthProvider from "./AuthContext";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
     {/* <AuthProvider> */}
      <Component {...pageProps} />
      {/* </AuthProvider> */}
    </Layout>
  );
}
