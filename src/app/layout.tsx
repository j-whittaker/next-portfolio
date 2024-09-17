import "../styles/globals.css";
import { Roboto, RobotoMono } from "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${Roboto.variable} ${RobotoMono.variable}`} lang="en">
      <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jacob Whittaker - Software Engineering Portfolio</title>
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
