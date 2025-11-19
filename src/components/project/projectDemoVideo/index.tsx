export default function ProjectDemoVideo() {
  return (
    <section
      id={`demo-video-cnbpb`}
      className={`flex flex-col justify-center items-center gap-8 mb-4 xl:gap-10 xl:mb-auto`}
    >
      <h2
        className={`w-[260px] font-geometos-rounded text-28px text-center text-shadow-2xs bg-gradient-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text xl:w-full xl:text-32px`}
      >
        Demonstração de Uso
      </h2>

      <div
        className={`relative w-[320px] h-[169px] bg-[url(/assets/laptop-mockup.png)] bg-no-repeat bg-cover filter drop-shadow xl:w-[800px] xl:h-[422px]`}
      >
        <video
          width={`240`}
          height={`127`}
          controls
          autoPlay
          muted
          playsInline
          loop
          preload="none"
          className={`absolute top-[10px] left-[40px] xl:top-[21px] xl:left-[100px] xl:w-[600px] xl:h-auto`}
        >
          <source src={`/assets/cnbpb-video.mp4`} type="video/mp4" />
          
          Seu navegador não suporta esse vídeo.
        </video>
      </div>
    </section>
  );
}
