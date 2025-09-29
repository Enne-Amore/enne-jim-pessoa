interface InputInterface {
  id: string;
  label: string;
  placeholder: string;
  register: Record<string, unknown>;
  errors: React.ReactNode;
  type?: string;
  isInput?: boolean;
  isMessage?: boolean;
}

export default function Input(props: InputInterface) {
  return (
    <div className={`w-[260px] flex flex-col gap-2 xl:w-[400px]`}>
      <label
        htmlFor={props.id}
        className={`font-semibold text-xl text-shadow-2xs xl:text-2xl`}
      >
        {props.label}
      </label>

      {props.isInput && (
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          {...props.register}
          className={`text-base text-dark-purple text-shadow-2xs bg-white-200 px-6 py-3 rounded-4xl border-2 border-light-purple focus:outline-dark-purple xl:text-xl`}
        />
      )}

      {props.isMessage && (
        <textarea
          id={props.id}
          cols={25}
          rows={8}
          placeholder={props.placeholder}
          {...props.register}
          className={`resize-none text-base text-dark-purple text-shadow-2xs bg-white-200 px-6 py-4 rounded-3xl border-2 border-light-purple focus:outline-dark-purple xl:text-xl xl:h-[183px]`}
        ></textarea>
      )}

      {props.errors && (
        <span className="w-max text-xs text-shadow-2xs bg-[#EB0000] border border-white-100 px-3 py-1 rounded-4xl shadow xl:text-base">
          {props.errors}
        </span>
      )}
    </div>
  );
}
