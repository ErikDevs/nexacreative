import { Sora } from "next/font/google";
import { Roboto } from "next/font/google";
import { Rowdies } from "next/font/google";
const sora = Sora({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export { sora, roboto, rowdies };
