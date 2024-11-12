import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-red-gradient":
          "linear-gradient(90deg, #BD1F17 28%, #A51D13 60%, #8E1B0F 100%)",
        "text-red-opacity-gradient":
          "linear-gradient(90deg, rgba(189, 31, 23, 0) 33%, rgba(189, 31, 23, 0.7) 100%)",
        "hero-pattern": "url('/hero-pattern.png')",
        "footer-background-image": "url('/footer.webp')",
        "booking-form-background-image": "url('/form-bg.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "chili-red": "#B52B1D",
        "mustard-yellow": "#FEBF00",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
    screens: {
      sm: "391px",
    },
    boxShadow: {
      "custom-shadow": "0px 8px 9px rgba(0, 0, 0, 0.25)",
      "custom-shadow-two": "0px 7px 16px rgba(0, 0, 0,0.1)",
      "icon-shadow": "0px  0px 13.64px rgba(0,0,0,0.1)",
    },
  },

  plugins: [require("tailwindcss-animate")],
};
export default config;
