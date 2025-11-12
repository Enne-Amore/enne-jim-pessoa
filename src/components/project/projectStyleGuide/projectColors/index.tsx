export default function ProjectColors() {
  return (
    <article className={`space-y-16 xl:space-y-20`}>
      <h3
        className={`font-geometos-rounded text-2xl text-center text-shadow-2xs bg-gradient-to-r from-[#713CA6]/0 via-[#713CA6] to-[#713CA6]/0 pt-6 pb-5 xl:text-28px`}
      >
        Cores
      </h3>

      <ul className={`flex flex-col items-center gap-12 m-auto xl:w-[834px] xl:flex-row xl:justify-between`}>
        <li className={`max-w-[360px] w-full bg-[#FFFEF6]/30 border border-[#040008] rounded-4xl px-8 py-9 space-y-5 shadow xl:w-[380px]`}>
          <h4 className={`font-geometos-rounded text-xl text-center text-shadow-2xs bg-gradient-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text xl:text-2xl`}>
            Principais
          </h4>

          <ul className={`flex flex-col justify-center gap-5`}>
            <li className={`bg-[#713CA6] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#FFFFFD] text-base xl:text-xl text-shadow-2xs`}>#713CA6</span>
              
              <span className={`text-[#FFFFFD] text-xs xl:text-base text-shadow-2xs`}>Roxa escura</span>
            </li>

            <li className={`bg-[#6A4EA6] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#FFFFFD] text-base xl:text-xl text-shadow-2xs`}>#6A4EA6</span>
              
              <span className={`text-[#FFFFFD] text-xs xl:text-base text-shadow-2xs`}>Roxa clara</span>
            </li>

            <li className={`bg-[#F2E530] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#242325] text-base xl:text-xl text-shadow-2xs`}>#F2E530</span>
              
              <span className={`text-[#242325] text-xs xl:text-base text-shadow-2xs`}>Amarela escura</span>
            </li>

            <li className={`bg-[#ECE35A] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#242325] text-base xl:text-xl text-shadow-2xs`}>#ECE35A</span>
              
              <span className={`text-[#242325] text-xs xl:text-base text-shadow-2xs`}>Amarela clara</span>
            </li>

            <li className={`bg-[#F2C029] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#242325] text-base xl:text-xl text-shadow-2xs`}>#F2C029</span>
              
              <span className={`text-[#242325] text-xs xl:text-base text-shadow-2xs`}>Laranja</span>
            </li>
          </ul>
        </li>

        <li className={`max-w-[360px] w-full bg-[#FFFEF6]/30 border border-[#040008] rounded-4xl px-8 py-9 space-y-5 shadow xl:w-[380px]`}>
          <h4 className={`font-geometos-rounded text-xl text-center text-shadow-2xs bg-gradient-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text xl:text-2xl`}>
            Neutras
          </h4>

          <ul className={`flex flex-col justify-center gap-5`}>
            <li className={`bg-[#040008] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#FFFFFD] text-base xl:text-xl text-shadow-2xs`}>#040008</span>
              
              <span className={`text-[#FFFFFD] text-xs xl:text-base text-shadow-2xs`}>Preta</span>
            </li>

            <li className={`bg-[#242325] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#FFFFFD] text-base xl:text-xl text-shadow-2xs`}>#242325</span>
              
              <span className={`text-[#FFFFFD] text-xs xl:text-base text-shadow-2xs`}>Cinza 1</span>
            </li>

            <li className={`bg-[#211E23] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#FFFFFD] text-base xl:text-xl text-shadow-2xs`}>#211E23</span>
              
              <span className={`text-[#FFFFFD] text-xs xl:text-base text-shadow-2xs`}>Cinza 2</span>
            </li>

            <li className={`bg-[#FFFFFD] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#242325] text-base xl:text-xl text-shadow-2xs`}>#FFFFFD</span>
              
              <span className={`text-[#242325] text-xs xl:text-base text-shadow-2xs`}>Branca</span>
            </li>

            <li className={`bg-[#FFFEF6] flex justify-between items-center px-8 py-4 shadow rounded-4xl`}>
              <span className={`text-[#242325] text-base xl:text-xl text-shadow-2xs`}>#FFFEF6</span>
              
              <span className={`text-[#242325] text-xs xl:text-base text-shadow-2xs`}>Branca amarelada</span>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  )
}