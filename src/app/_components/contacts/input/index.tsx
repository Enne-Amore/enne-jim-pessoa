interface InputInterface {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  isInput?: boolean;
  isMessage?: boolean;
}

export default function Input(props: InputInterface) {
  return (
    <div className={`flex flex-col gap-2 xl:w-[400px]`}>
      <label htmlFor={props.id} className={`font-semibold text-xl text-shadow-2xs xl:text-2xl`}>
        {props.label}
      </label>

      {props.isInput && (
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          className={`min-w-[260px] text-base text-dark-purple text-shadow-2xs bg-white-200 px-6 py-3 rounded-4xl border-2 border-light-purple focus:outline-dark-purple xl:text-xl`}
        />
      )}

      {props.isMessage && (
        <textarea
          id={props.id}
          cols={25}
          rows={8}
          placeholder={props.placeholder}
          className={`min-w-[260px] resize-none text-base text-dark-purple text-shadow-2xs bg-white-200 px-6 py-4 rounded-3xl border-2 border-light-purple focus:outline-dark-purple xl:text-xl xl:h-[183px]`}
        ></textarea>
      )}
    </div>
  );
}
