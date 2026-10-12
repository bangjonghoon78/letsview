import Link from "next/link";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const menus = [
  {
    title: "회사소개",
    subMenus: [
      { name: "인사말", path: "/greeting" },
      { name: "회사연혁", path: "/history" },
      { name: "오시는 길", path: "/location" },
    ],
  },
  {
    title: "제품소개",
    subMenus: [
      { name: "블랙박스", path: "/products/dashcam" },
      { name: "액세서리", path: "/products/accessories" },
      { name: "제품 비교", path: "/products/compare" },
    ],
  },
  {
    title: "NEWS",
    subMenus: [
      { name: "공지사항", path: "/news/notice" },
      { name: "보도자료", path: "/news/press" },
      { name: "이벤트", path: "/news/event" },
    ],
  },
  {
    title: "고객지원",
    subMenus: [
      { name: "FAQ", path: "/faq" },
      { name: "다운로드", path: "/support/download" },
      { name: "A/S 안내", path: "/support/service" },
    ],
  },
  {
    title: "SHOP",
    subMenus: [{ name: "공식 쇼핑몰", path: "/shop" }],
  },
];

export default function Header() {
  return (
    <header className="group relative z-50 bg-[#202428] text-white">
      <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-8">
        {/* 로고 */}
        <Link href="/" className="text-2xl font-bold">
          IROAD
        </Link>

        {/* 네비게이션 */}
        <nav className={`${notoSansKR.className} flex h-full text-[18px]`}>
          {menus.map((menu) => (
            <div
              key={menu.title}
              className="relative flex h-full w-[120px] items-center justify-center"
            >
              {/* 상단 메뉴 */}
              <Link
                href={menu.subMenus[0].path}
                className="text-[16px] text-gray-300 hover:text-white"
              >
                {menu.title}
              </Link>

              {/* 서브메뉴 */}
              <ul className="invisible absolute top-full left-0 z-20 w-full space-y-4 pt-6 text-center opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {menu.subMenus.map((sub) => (
                  <li key={sub.path}>
                    <Link
                      href={sub.path}
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* 전체 서브메뉴 배경 */}
      <div className="invisible absolute top-full left-0 -z-10 h-[200px] w-full bg-white opacity-0 shadow-md transition-all duration-300 group-hover:visible group-hover:opacity-100" />
    </header>
  );
}
