import ProjectHeader, {
  ProjectHeaderInterface,
} from "@/components/projectHeader";

export default function ColetiveNaoBinarieParaiba() {
  const data: ProjectHeaderInterface = {
    headerStyle: "bg-[#030007]",
    positions: ["UI/UX Design", "Front-end"],
    positionStyle: "bg-[#6A4EA6]/80",
    img: "/assets/cnbpb-project-header.png",
    alt: "Coletive Não-Binárie da Paraíba",
    imgStyle: "xl:w-[522px]",
    caption: "Construção de uma landing page intuitiva para divulgar a organização",
    captionStyle: "font-title-cnbpb xl:text-32px xl:w-[780px]",
    downStyle: "text-[#F2E530] hover:text-[#F2C029]",
  };

  return (
    <>
      <ProjectHeader
        headerStyle={data.headerStyle}
        positions={data.positions}
        positionStyle={data.positionStyle}
        img={data.img}
        alt={data.alt}
        imgStyle={data.imgStyle}
        caption={data.caption}
        captionStyle={data.captionStyle}
        downStyle={data.downStyle}
      />
    </>
  );
}
