"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname } from "next/navigation";

interface IListItemLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
  onClick: (() => void) | undefined;
}

export const ListItemLink: FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const pathname = usePathname();

  return (
    <Link href={to} style={{ all: "unset" }}>
      <ListItemButton selected={pathname === to} onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </Link>
  );
};
