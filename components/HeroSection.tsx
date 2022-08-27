import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section className="text-center">
      <Link href="/">
        <Image src="/images/icon.png" height={120} width={120} />
      </Link>
      <SearchBar />
    </section>
  );
};

export default HeroSection;
