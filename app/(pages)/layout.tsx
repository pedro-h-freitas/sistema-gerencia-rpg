import "@fontsource/roboto";

import { AppThemeProvider, DrawerProvider } from "@/app/shared/contexts";
import { Sidebar } from "@/app/shared/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <Sidebar>{children}</Sidebar>
      </DrawerProvider>
    </AppThemeProvider>
  );
}
