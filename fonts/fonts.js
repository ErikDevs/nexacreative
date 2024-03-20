import { Poppins, Rowdies, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
});

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export { sora, roboto, rowdies };
