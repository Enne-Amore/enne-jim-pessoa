import { FaDesktop, FaMobileScreen } from "react-icons/fa6";

export default function ProjectTypography() {
  return (
    <article className={`space-y-16 xl:space-y-70px`}>
      <h3
        className={`font-geometos-rounded text-[#FFFEF6] text-2xl text-center text-shadow-2xs bg-gradient-to-r from-[#713CA6]/0 via-[#713CA6] to-[#713CA6]/0 pt-6 pb-5 xl:text-28px`}
      >
        Tipografia
      </h3>

      <div className={`flex flex-col justify-center items-center gap-12`}>
        <ul
          className={`max-w-[360px] w-full space-y-8 px-2.5 xl:max-w-full xl:w-[710px] sm:px-0`}
        >
          <li
            className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col gap-5 p-8 rounded-4xl shadow xl:flex-row xl:justify-between xl:items-center xl:py-5 xl:px-9`}
          >
            <h4
              className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
            >
              Geometos Rounded
            </h4>

            <span className={`text-xs text-end text-shadow-2xs xl:text-base`}>
              Títulos / Frases especiais
            </span>
          </li>

          <li
            className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col gap-5 p-8 rounded-4xl shadow xl:flex-row xl:justify-between xl:items-center xl:py-5 xl:px-9`}
          >
            <h4
              className={`font-bold font-open-dyslexic text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
            >
              Open Dyslexic
            </h4>

            <span className={`text-xs text-end text-shadow-2xs xl:text-base`}>
              Parágrafos / Legendas
            </span>
          </li>

          <li
            className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col gap-5 p-8 rounded-4xl shadow xl:flex-row xl:justify-between xl:items-center xl:py-5 xl:px-9`}
          >
            <h4
              className={`font-bold text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
            >
              Open Sans
            </h4>

            <span className={`text-xs text-end text-shadow-2xs xl:text-base`}>
              Opções / Links / Instruções
            </span>
          </li>
        </ul>

        <ul
          className={`flex flex-col gap-12 m-auto px-2.5 xl:w-[710px] xl:flex-row xl:justify-between sm:px-0`}
        >
          <li
            className={`max-w-[360px] w-full bg-[#FFFEF6]/30 flex flex-col items-center gap-1 border border-[#040008] rounded-4xl p-10 space-y-5 shadow xl:max-w-full xl:w-[290px]`}
          >
            <h4 className={`flex items-center gap-1.5`}>
              <FaDesktop
                className={`w-[26px] h-[26px] text-[#713CA6] text-shadow-2xs xl:w-[30px] xl:h-[30px]`}
              />

              <span
                className={`font-geometos-rounded text-xl text-shadow-2xs bg-gradient-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text translate-y-0.5 xl:text-2xl xl:translate-y-0`}
              >
                Desktop
              </span>
            </h4>

            <ul className={`w-[180px] space-y-5 xl:w-[210px]`}>
              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  H2
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  32px / Auto
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Bold
                </span>
              </li>

              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  H3
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  28px / Auto
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Bold
                </span>
              </li>

              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  P / A
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  24px / 40px
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Regular / Bold
                </span>
              </li>

              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  Caption / A
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  20px / Auto
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Regular / Bold
                </span>
              </li>

              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  Span
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  18px / Auto
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Regular
                </span>
              </li>
            </ul>
          </li>

          <li
            className={`max-w-[360px] w-full bg-[#FFFEF6]/30 flex flex-col items-center gap-1 border border-[#040008] rounded-4xl p-10 space-y-5 shadow xl:max-w-full xl:w-[290px]`}
          >
            <h4 className={`flex items-center gap-1.5`}>
              <FaMobileScreen
                className={`w-[20px] h-[25px] text-[#713CA6] text-shadow-2xs xl:w-[23px] xl:h-[28px]`}
              />

              <span
                className={`font-geometos-rounded text-xl text-shadow-2xs bg-gradient-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text translate-y-0.5 xl:text-2xl xl:translate-y-0`}
              >
                Mobile
              </span>
            </h4>

            <ul className={`w-[180px] space-y-5 xl:w-[210px]`}>
              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  H2
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  28px / Auto
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Bold
                </span>
              </li>

              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  H3
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  24px / Auto
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Bold
                </span>
              </li>

              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  P / A
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  20px / 35px
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Regular / Bold
                </span>
              </li>

              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  Caption / A
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  16px / Auto
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Regular / Bold
                </span>
              </li>

              <li
                className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
              >
                <h5
                  className={`font-geometos-rounded text-[#6A4EA6] text-base text-shadow-2xs xl:text-xl`}
                >
                  Span
                </h5>

                <span className={`text-xs text-shadow-2xs xl:text-base`}>
                  16px / Auto
                </span>

                <span
                  className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                >
                  Regular
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
  );
}
