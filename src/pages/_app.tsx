import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import "~/styles/global.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
