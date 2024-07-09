import { createTheme } from "@mui/material";

import { DarkOptions, LightOptions, EnergyOptions } from "./ThemeOptions";

export const EnergyDarkTheme = createTheme({
  palette: {
    ...DarkOptions.palette,
    ...EnergyOptions.palette,
  },

  typography: DarkOptions.typography,
});

export const EnergyLightTheme = createTheme({
  palette: {
    ...LightOptions.palette,
    ...EnergyOptions.palette,
  },
});
