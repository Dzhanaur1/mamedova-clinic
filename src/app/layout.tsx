import { Metadata } from "next";
import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import "./globals.css";
import { Cormorant_Unicase } from "next/font/google";

const inter = Cormorant_Unicase({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Пластический хирург Мамаева Наида Дагировна ",
  description:
    "Пластический хирург в Дагестане с большим стажем. Закажите консультацию. Выполняет таки виды работ как: Блефаропластика |  Хейлопластика  | Лифтинг линг | Маммопластика | Абдоминопластика | Липоскульптура",
  keywords: [
    "Мамаева Наида Дагировна",
    "Пластический хирур",
    "Пластический хирург в Дагестане",
    "Липоскульптура",
    "Маммопластика",
    "Хейлопластика ",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <meta name="yandex-verification" content="79268e3d0a192adf" />
      <meta
        name="google-site-verification"
        content="QsMZXChaqLP9nyJy3SzS9qapRxa2XwjgxxLnmMkdrcI"
      />
      <body
        className={`${inter.className} scroll-smooth overflow-x-hidden bg-white h-full`}
      >
        <div className="flex flex-col h-full">
          <Header />
          <main className="flex-[1_0_auto]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
