import Link from "next/link";

const liStyle = "list-none inline-block leading-8 my-0 mx-1";

const NavBar = () => {
  return (
    <nav className="after:block after:clear-both">
      <div className="py-0 pr-5">
        <ul className="my-[30px] mr-8 float-right">
          <li className={liStyle}>
            <Link href="https://github.com/cerebroapp/cerebro/releases">
              Changelog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
