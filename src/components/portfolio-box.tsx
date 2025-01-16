import Image from "next/image";
import { GithubIcon, TvMinimalPlay } from "lucide-react";

interface PortfolioBoxProp {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

function PortfolioBox(props: PortfolioBoxProp) {
  const { image, title, urlDemo, urlGithub } = props.data;

  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl ">{title}</h3>
      <Image
        src={image}
        alt="box-image"
        width={200}
        height={200}
        className="w-full md:w-[200px] rounded-2xl h-auto"
      />
      <div className="flex gap-5 mt-5 justify-center">
        <a
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 flex"
        >
          <GithubIcon />
          <span className="">Github</span>
        </a>
        <a
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 flex"
        >
          <TvMinimalPlay />
          <span className="ml-[3px]">Demo</span>
        </a>
      </div>
    </div>
  );
}

export default PortfolioBox;
