"use client";

import { ReactNode, useEffect } from "react";

import {
  Logout,
  Home,
  People,
  MenuBook,
  ContactPage,
  AccountCircle,
} from "@mui/icons-material";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useDrawerContext } from "@/app/shared/contexts";
import { ListItemLink } from "@/app/shared/components";
import { ThemeChangeButtons } from "./ThemeChangeButtons";

export function Sidebar({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions } =
    useDrawerContext();

  useEffect(
    () =>
      setDrawerOptions([
        {
          icon: <Home />,
          path: "/",
          label: "Página Inicial",
        },
        {
          icon: <MenuBook />,
          path: "/campaings",
          label: "Campanhas",
        },
        {
          icon: <ContactPage />,
          path: "/character-sheet",
          label: "Fichas",
        },
        {
          icon: <People />,
          path: "/friends",
          label: "Amigos",
        },
      ]),
    []
  );

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
            alignContent="center"
          >
            <ListItemLink
              icon={<AccountCircle />}
              to="/profile"
              label="Perfil"
              onClick={smDown ? toggleDrawerOpen : undefined}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(({ path, icon, label }) => (
                <ListItemLink
                  key={path}
                  icon={icon}
                  to={path}
                  label={label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

          <Box>
            <Divider />

            <List component="nav">
              <ThemeChangeButtons />

              {/* <ListItemButton onClick={logout}> */}
              <ListItemButton>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}
