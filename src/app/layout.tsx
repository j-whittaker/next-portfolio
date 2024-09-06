import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'/>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet' type='text/css'/>
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
