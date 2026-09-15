import type { Metadata } from "next";
import "swiper/css";

import styles from "./layout.module.scss";
import Providers from "./providers";

import "@/assets/scss/reset.scss";
import "@/assets/scss/global.scss";

export const metadata: Metadata = {
  title: "Spaceful",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <div className={styles["app-layout"]}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
