import { Jost, Rowdies, Sora, Syne } from "next/font/google";
import localFont from "next/font/local";

const sora = Sora({
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["variable"],
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export { sora, jost, rowdies, syne };
