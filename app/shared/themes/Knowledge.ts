import { createTheme } from "@mui/material";

import { DarkOptions, LightOptions, KnowledgeOptions } from "./ThemeOptions";

export const KnowledgeDarkTheme = createTheme({
  palette: {
    ...DarkOptions.palette,
    ...KnowledgeOptions.palette,
  },

  typography: DarkOptions.typography,
});

export const KnowledgeLightTheme = createTheme({
  palette: {
    ...LightOptions.palette,
    ...KnowledgeOptions.palette,
  },
});
