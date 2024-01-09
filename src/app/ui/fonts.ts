import { Inter } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

// 参考URL https://fonts.google.com/variablefonts

export const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const inter = Inter({ subsets: ["latin"] });
