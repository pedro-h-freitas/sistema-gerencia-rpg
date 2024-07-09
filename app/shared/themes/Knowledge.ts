import { createTheme } from "@mui/material";

import {
  DarkOptions,
  LightOptions,
  KnowledgeOptions,
} from "@/app/shared/themes";

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
