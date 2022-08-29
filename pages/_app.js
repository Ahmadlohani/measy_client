import {UserProvider} from "../context";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import Head from "next/head";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
    return(
     <UserProvider>
     <Head>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
     <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet" />
     <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
     <link rel="stylesheet" href="/css/styles.css" />
     </Head>
     <Nav />
     <ToastContainer position="top-center" />
     <Component {...pageProps} />
     <Footer />
     </UserProvider>
    );
}

export default MyApp