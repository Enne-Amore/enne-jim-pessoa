import ProjectExplanation from "./projectExplanation";
import ProjectFunctions from "./projectFunctions";

export default function ProjectTechnologies() {
  return (
    <section
      id={`technologies-cnbpb`}
      className={`px-8 space-y-20 xl:space-y-100px`}
    >
      <ProjectExplanation />

      <ProjectFunctions />
    </section>
  )
}
