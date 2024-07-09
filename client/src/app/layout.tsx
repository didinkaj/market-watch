import "./styles/globals.css";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";

export const metadata = {
    title: "Service Health ",
    description: "Page for Service Health and statusts ",
    icons: [{ rel: "icon", url: "https://jdk.co.ke/wp-content/favicon/apple-icon-114x114.png" }],
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
        <body>
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  );
}
