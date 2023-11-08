import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

/**서버 컴포넌트 이기 때문에 이곳에서 전역 state를 사용할 수 없다.*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
