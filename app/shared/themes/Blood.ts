import { createTheme } from "@mui/material";

import { DarkOptions, LightOptions, BloodOptions } from "./ThemeOptions";

export const BloodDarkTheme = createTheme({
  palette: {
    ...DarkOptions.palette,
    ...BloodOptions.palette,
  },

  typography: DarkOptions.typography,
});

export const BloodLightTheme = createTheme({
  palette: {
    ...LightOptions.palette,
    ...BloodOptions.palette,
  },
});
