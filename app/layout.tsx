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
      <body style={{ fontFamily: "Roboto", margin: "0px", padding: "0px" }}>
        {children}
      </body>
    </html>
  );
}
