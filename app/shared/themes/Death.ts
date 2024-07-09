import { createTheme } from "@mui/material";

import { DarkOptions, LightOptions, DeathOptions } from "./ThemeOptions";

export const DeathDarkTheme = createTheme({
  palette: {
    ...DarkOptions.palette,
    ...DeathOptions.palette,
  },

  typography: DarkOptions.typography,
});

export const DeathLightTheme = createTheme({
  palette: {
    ...LightOptions.palette,
    ...DeathOptions.palette,
  },
});
