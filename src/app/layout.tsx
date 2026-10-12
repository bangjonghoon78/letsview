import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LETSVIEW | 블랙박스 전문기업",
  description:
    "LETSVIEW는 차량용 블랙박스 전문기업으로, 고화질 블랙박스, 3채널 블랙박스, 스마트 차량 영상 솔루션을 제공합니다.",
  keywords: [
    "LETSVIEW",
    "렛츠뷰",
    "블랙박스",
    "차량용 블랙박스",
    "3채널 블랙박스",
    "QHD 블랙박스",
    "ADAS",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
