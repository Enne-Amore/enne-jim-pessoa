import Form from "./form";
import SocialMedia from "./socialMedia";

export default function Contacts() {
  return (
    <section
      id="contatos"
      className={`bg-gradient-to-b from-dark-pink-100 to-dark-pink-200 px-7 py-9 mx-9 flex flex-col items-center gap-16 shadow rounded-4xl xl:w-[1078px] xl:gap-16 xl:py-16`}
    >
      <Form />

      <SocialMedia />
    </section>
  );
}
