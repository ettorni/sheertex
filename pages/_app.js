// import Layout from "../components/layout/layout";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/layout/layout"));
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DynamicComponent>
      <Component {...pageProps} />
    </DynamicComponent>
  );
}

export default MyApp;
