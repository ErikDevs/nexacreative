import { Almarai, Asap, Nunito, Rowdies, Sora, Syne } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
});

const roboto = Asap({
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
export { sora, roboto, rowdies, syne };
