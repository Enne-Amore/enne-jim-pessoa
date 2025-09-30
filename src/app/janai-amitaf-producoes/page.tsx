import ProjectHeader, { ProjectHeaderInterface } from "@/components/projectHeader";

export default function JanaiAmitafProducoes() {
  const data: ProjectHeaderInterface = {
    headerStyle: "bg-gradient-to-br from-[#8C00FF] to-[#6C0CF2]",
    positions: ["UI/UX Design", "Front-end"],
    positionStyle: "text-[#232027] bg-[#F2B705]",
    img: "/assets/janai-amitaf-project-header.png",
    alt: "Janai Amitáf Produções",
    imgStyle: "w-[160px] xl:w-[181px]",
    caption: "Desenvolvimento de um portfólio web artístico com seus principais trabalhos",
    captionStyle: "xl:text-28px xl:w-[620px]",
    downStyle: "text-[#F2B705] hover:text-[#DB9406]",
  };

  return (
    <div className={`font-title-janai-amitaf`}>
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
    </div>
  )
}
