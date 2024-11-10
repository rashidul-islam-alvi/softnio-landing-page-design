import {
  Raleway,
  Roboto,
  Bebas_Neue,
  Poppins,
  Inter,
  Montserrat,
} from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "500", "700", "800", "900"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
