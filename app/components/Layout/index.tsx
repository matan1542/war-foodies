import { FC } from "react";
import Header from "../Header";

import s from "./style.module.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import { THEME_COLORS } from "@/constants";

const materialTheme = createTheme({
  palette: {
    primary: {
      main: THEME_COLORS.primary,
    },
  },
  typography: {
    fontFamily: "var(--font-Noto_Sans_Hebrew_Regular)",
  },
  components: {
    MuiSvgIcon: {
      variants: [
        {
          props: { fontSize: "large" },
          style: {
            fontSize: "50px",
          },
        },
      ],
    },
  },
});

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={s.layoutContainer}>
      <ThemeProvider theme={materialTheme}>
        <Header />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
