export default function Footer() {
  return (
    <footer className="min-h-[155px] bg-[#22272b] px-7 py-6 text-[11px] leading-6 text-[#8e959c]">
      <div className="mx-auto max-w-[1440px]">
        <div>
          <p>주식회사 아이로드 모빌리티 (아이로드 본사)</p>
          <p className="font-semibold text-gray-300">고객센터 : 1644-3450</p>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <div className="text-[10px]">
            <p>
              사업자번호 : 106-86-53546 / 대표자 : 정동준 / 팩스 : 02-6281-8730
            </p>
            <p>서울특별시 송파구 법원로11길 25</p>
          </div>

          <p className="text-[10px]">
            Copyright © IROAD MOBILITY Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
