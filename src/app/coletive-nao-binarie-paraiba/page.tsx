import { ProjectsType } from "@/types/projectsType";
import { projects } from "@/data/projects";
import ProjectHeader from "@/components/projectHeader";
import ProjectAccesses from "@/components/projectAccesses";

export default function ColetiveNaoBinarieParaiba() {
  const data: ProjectsType = projects.find((project) => project.id === "1")!;

  return (
    <div className={`font-open-sans`}>
      <ProjectHeader
        headerStyle={data.header.headerStyle}
        positions={data.header.positions}
        positionStyle={data.header.positionStyle}
        img={data.header.img}
        alt={data.header.alt}
        imgStyle={data.header.imgStyle}
        caption={data.header.caption}
        captionStyle={data.header.captionStyle}
        downStyle={data.header.downStyle}
      />

      <main
        id="main"
        className={`bg-[#FFFFFD] flex flex-col items-center gap-20 py-20 xl:gap-28 xl:py-28`}
      >
        <ProjectAccesses
          img={data.accesses.img}
          alt={data.accesses.alt}
          urlSite={data.accesses.urlSite}
          ariaLabelSite={data.accesses.ariaLabelSite}
          urlFigma={data.accesses.urlFigma}
          ariaLabelFigma={data.accesses.ariaLabelFigma}
          urlGitHub={data.accesses.urlGitHub}
          ariaLabelGitHub={data.accesses.ariaLabelGitHub}
          urlMainStyle={data.accesses.urlMainStyle}
          urlSecondaryStyle={data.accesses.urlSecondaryStyle}
        />
      </main>
    </div>
  );
}
