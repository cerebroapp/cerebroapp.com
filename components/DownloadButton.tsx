import Image from "next/image";
import { Link } from "../services/getReleasesLinks";

type ButtonProps = {
  link: Link;
  title: string;
  img: string;
  extension: string;
};

const DownloadButton = ({ link, title, img, extension }: ButtonProps) => {
  return (
    <a
      href={link[0]}
      download={`Cerebro.${extension}`}
      className="appearance-none cursor-pointer inline-block whitespace-nowrap py-3 px-8 mr-4 border-none bg-[#453278] rounded-md text-lg text-white active:scale-95"
      title={title}
    >
      <Image src={img} width={15} height={15} alt={title + " image"} /> {title}
      <span className="text-xs"> ({link[1]})</span>
    </a>
  );
};

export default DownloadButton;
