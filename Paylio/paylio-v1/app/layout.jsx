import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Paylio React Nextjs Template" />
        <title>
          Paylio - Money Transfer and Online Payments React Next JS Template
        </title>
      </head>
      <body>{children}</body>
    </html>
  );
}
