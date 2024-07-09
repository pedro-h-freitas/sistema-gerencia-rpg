import { ThemeOptions } from "@mui/material";
import {
  blue,
  cyan,
  green,
  grey,
  purple,
  red,
  yellow,
} from "@mui/material/colors";

export const DarkOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      paper: "#303134",
      default: "#202124",
    },
  },

  typography: {
    allVariants: {
      color: "white",
    },
  },
};

export const LightOptions: ThemeOptions = {
  palette: {
    background: {
      paper: "#ffffff",
      default: "#f7f6f3",
    },
  },
};

export const DeathOptions: ThemeOptions = {
  palette: {
    primary: {
      main: grey[700],
      dark: grey[800],
      light: grey[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: grey[700],
      dark: grey[800],
      light: grey[500],
      contrastText: "#ffffff",
    },
  },
};

export const BloodOptions: ThemeOptions = {
  palette: {
    primary: {
      main: red[700],
      dark: red[800],
      light: red[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: blue[500],
      dark: blue[600],
      light: blue[300],
      contrastText: "#ffffff",
    },
  },
};

export const KnowledgeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#ffffff",
    },
  },
};

export const EnergyOptions: ThemeOptions = {
  palette: {
    primary: {
      main: purple[700],
      dark: purple[800],
      light: purple[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: green[600],
      dark: green[700],
      light: green[400],
      contrastText: "#ffffff",
    },
  },
};
