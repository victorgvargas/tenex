import { token } from "./config/theme";
import { ConfigProvider, Layout } from "antd";
import "./globals.css";
import Header from "./widgets/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navMenu = ["Home", "How It Works", "For Tenants", "For Landlords", "Sign In"];
  const logo = "Tenex";

  return (
    <ConfigProvider theme={{ token }}>
      <html lang="en">
        <body
        >
          <Layout>
            <Header logo={logo} navMenu={navMenu} />
            {children}
          </Layout>
        </body>
      </html>
    </ConfigProvider>
  );
}
