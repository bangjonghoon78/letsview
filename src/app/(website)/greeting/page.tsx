import Image from "next/image";
import SubVisual from "@/app/components/SubVisual";

export default function GreetingPage() {
  return (
    <>
      <SubVisual type="company" />

      <main className="w-full bg-white">
        {/* 페이지 제목 */}
        <div className="py-12 text-center">
          <h1 className="text-[32px] font-semibold text-gray-900">CEO인사말</h1>
          <div className="mx-auto mt-5 h-[2px] w-[30px] bg-orange-500" />
        </div>

        {/* 대표 인사말 */}
        <section className="bg-[#f5f5f5]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-2">
            {/* 텍스트 */}
            <div className="flex flex-col justify-center px-8 py-12 md:px-12">
              <h2 className="text-[28px] leading-[1.4] font-medium text-[#e75a54]">
                동부건설을
                <br />
                방문해주신 여러분, 반갑습니다.
              </h2>

              <div className="my-6 h-[2px] w-[45px] bg-[#e75a54]" />

              <p className="text-[16px] leading-[1.7] text-gray-800">
                동부건설 전 임직원은
                <br />
                주인의식과 공정의 감성 리더십을 바탕으로
                <br />
                소통 · 감성 · 화합의 가치를 실천하여
                <br />
                Sustainable Top 10 Builder가 되기 위한
                <br />
                힘찬 도약을 시작합니다.
              </p>
            </div>

            {/* 대표 사진 */}
            <div className="relative h-[350px] md:h-[380px]">
              <Image
                src="/images/ceo.jpg"
                alt="대표이사"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* 상세 인사말 */}
        <section className="mx-auto max-w-[1200px] px-8 py-14">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* 왼쪽 */}
            <div className="space-y-7 text-[15px] leading-[1.9] text-gray-600">
              <p>
                저희 동부건설은 1969년 창사 이래 토목, 건축, 주택, 플랜트 등
                건설 전 분야에 걸쳐 다양한 사업을 영위해 왔습니다.
              </p>

              <p>
                한강에서 가장 아름다운 다리로 손꼽히는 청담대교, 아시아 최대
                규모의 국립중앙박물관, 대한민국 최고의 아파트 브랜드인 센트레빌,
                친환경 폐기물 처리시설인 동부권 광역 자원회수시설 등 그
                이름만으로도 대한민국을 대표할 실적을 쌓아왔습니다.
              </p>

              <p>
                이처럼 동부건설은 고객의 편의와 행복을 위해 끊임없이 도전하고
                창조해온 기업입니다.
              </p>
            </div>

            {/* 오른쪽 */}
            <div className="space-y-7 text-[15px] leading-[1.9] text-gray-600">
              <p>
                이제 동부건설 전 임직원은 주인의식과 공정의 감성 리더십을
                바탕으로 소통 · 감성 · 화합의 가치를 실천하여 Sustainable Top 10
                Builder가 되기 위한 힘찬 도약을 시작합니다.
              </p>

              <p>
                앞으로도 우리 동부건설은 대한민국을 대표하는 건설 명가로서
                고객에게는 감동을, 주주에게는 이익과 만족을 드리는 동시에,
                사회적 기업으로서의 책임을 다하는 모두가 선망하는 품격 있는
                회사, 지속성장하는 동부건설을 만들어 나아가겠습니다.
              </p>

              <p>감사합니다.</p>

              {/* 대표이사 서명 */}
              <div className="flex items-center justify-end gap-4 pt-5">
                <span className="text-[18px] font-medium text-gray-900">
                  대표이사 이 중 길
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
