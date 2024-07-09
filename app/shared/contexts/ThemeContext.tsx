"use client";

import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, Theme } from "@mui/material";

import {
  EnergyLightTheme,
  EnergyDarkTheme,
  BloodDarkTheme,
  BloodLightTheme,
  DeathDarkTheme,
  DeathLightTheme,
  KnowledgeDarkTheme,
  KnowledgeLightTheme,
} from "@/app/shared/themes";

type TThemesMode = "light" | "dark";
type TThemesName = "blood" | "death" | "energy" | "knowledge";

interface IThemeContextData {
  themeMode: TThemesMode;
  toggleMode: () => void;
  themeName: TThemesName;
  setTheme: (newTheme: TThemesName) => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

interface IThemeProviderProps {
  children: ReactNode;
}

const themes: Record<TThemesName, Record<TThemesMode, Theme>> = {
  blood: {
    dark: BloodDarkTheme,
    light: BloodLightTheme,
  },
  death: {
    dark: DeathDarkTheme,
    light: DeathLightTheme,
  },
  energy: {
    dark: EnergyDarkTheme,
    light: EnergyLightTheme,
  },
  knowledge: {
    dark: KnowledgeDarkTheme,
    light: KnowledgeLightTheme,
  },
};

export const AppThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<TThemesMode>("light");
  const [themeName, setThemeName] = useState<TThemesName>("blood");

  const setTheme = useCallback((newTheme: TThemesName) => {
    setThemeName(newTheme);
  }, []);

  const toggleMode = useCallback(() => {
    setThemeMode((oldMode) => {
      return oldMode === "dark" ? "light" : "dark";
    });
  }, []);

  const theme = useMemo(() => {
    return themes[themeName][themeMode];
  }, [themeName, themeMode]);

  return (
    <ThemeContext.Provider
      value={{ themeMode, themeName, toggleMode, setTheme }}
    >
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
