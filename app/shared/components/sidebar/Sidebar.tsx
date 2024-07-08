"use client";

import { ReactNode, useEffect } from "react";

import {
  DarkMode,
  Logout,
  Home,
  People,
  MenuBook,
  ContactPage,
} from "@mui/icons-material";

import {
  Avatar,
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

import { useAppThemeContext, useDrawerContext } from "@/app/shared/contexts";
import { ListItemLink } from "@/app/shared/components";

export function Sidebar({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions } =
    useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

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
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80"
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
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <DarkMode></DarkMode>
                </ListItemIcon>
                <ListItemText primary="Alternar Ttema" />
              </ListItemButton>
              {/* <ListItemButton onClick={logout}> */}
              <ListItemButton>
                <ListItemIcon>
                  <Logout></Logout>
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
