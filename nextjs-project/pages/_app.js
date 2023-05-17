import '../styles/globals.css'
import escapePathDelimiters from "next/dist/shared/lib/router/utils/escape-path-delimiters";

function MyApp({Component, pageProps}) {
return <Component {...pageProps}/>
}

export default MyApp;
