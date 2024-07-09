"use client";

import { useState } from "react";

import {
  BatteryFull,
  DarkMode,
  ExpandLess,
  ExpandMore,
  ImagesearchRoller,
  LocalLibrary,
  RotateRight,
  WaterDrop,
  Wifi,
} from "@mui/icons-material";

import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { useAppThemeContext } from "../../contexts";

export function ThemeChangeButtons() {
  const [open, setOpen] = useState(true);

  const { themeMode, themeName, toggleMode, setTheme } = useAppThemeContext();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleOpen}>
        <ListItemIcon>
          <ImagesearchRoller />
        </ListItemIcon>
        <ListItemText primary="Alternar Tema" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon>
              <DarkMode />
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Dark Mode" />
            <Switch
              edge="end"
              onChange={toggleMode}
              checked={themeMode === "dark"}
              inputProps={{
                "aria-labelledby": "switch-list-label-wifi",
              }}
            />
          </ListItem>

          <ListItemButton sx={{ pl: 4 }} onClick={() => setTheme("knowledge")}>
            <ListItemIcon>
              <LocalLibrary />
            </ListItemIcon>
            <ListItemText primary="Conhecimento" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={() => setTheme("blood")}>
            <ListItemIcon>
              <WaterDrop />
            </ListItemIcon>
            <ListItemText primary="Sangue" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={() => setTheme("energy")}>
            <ListItemIcon>
              <BatteryFull />
            </ListItemIcon>
            <ListItemText primary="Energia" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={() => setTheme("death")}>
            <ListItemIcon>
              <RotateRight />
            </ListItemIcon>
            <ListItemText primary="Morte" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
