import ProjectColors from "./projectColors";
import ProjectExplanation from "./projectExplanation";
import ProjectTypography from "./projectTypography";

export default function ProjectStyleGuide() {
  return (
    <section
      id={`style-guide-cnbpb`}
      className={`px-8 space-y-20 xl:space-y-100px`}
    >
      <ProjectExplanation />

      <ProjectColors />

      <ProjectTypography />
    </section>
  );
}
