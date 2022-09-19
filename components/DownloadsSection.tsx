import { Links } from "../services/getReleasesLinks";
import DownloadButton from "./DownloadButton";

const DownloadsSection = ({ links }: { links: Links }) => {
  const { dmg, deb, exe } = links;
  return (
    <section
      className="text-center space-x-2 space-y-3 my-14 mx-auto"
      id="download"
    >
      {exe && (
        <DownloadButton
          link={exe}
          title="Download for Windows"
          img="/images/icons/win.svg"
          extension="exe"
        />
      )}
      {dmg && (
        <DownloadButton
          link={dmg}
          title="Download for Mac"
          img="/images/icons/mac.svg"
          extension="dmg"
        />
      )}
      {deb && (
        <DownloadButton
          link={deb}
          title="Download for Linux"
          img="/images/icons/linux.svg"
          extension="AppImage"
        />
      )}
    </section>
  );
};

export default DownloadsSection;
