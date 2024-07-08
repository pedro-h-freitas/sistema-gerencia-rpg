import { AppThemeProvider } from "@/app/shared/contexts";

export const metadata = {
  title: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body style={{ margin: "0px", padding: "0px" }}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
