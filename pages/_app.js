import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar'

import { ApolloProvider } from "@apollo/react-hooks";

import AuthProvider from "../appstate/AuthProvider";
import apolloClient from "../apollo/apolloClient";


function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
    <Navbar/>
    <Component {...pageProps} />{""}
  
    </ApolloProvider>
  );
  
}


export default apolloClient(MyApp);
