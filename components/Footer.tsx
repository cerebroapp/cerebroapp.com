import Link from "next/link";

const menu = [
  [

    {
      name: "Organization",
      href: "https://github.com/cerebroapp",
      title: "Organization",
    },
    {
      name: "Project",
      href: "https://github.com/cerebroapp/cerebro",
      title: "Project",
    },
    {
      name: "Releases",
      href: "https://github.com/cerebroapp/cerebro/releases",
      title: "Cerebro App Releases",
    },  
  ],
  [
    {
      name: "Twitter",
      href: "https://twitter.com/cerebro_app",
      title: "Twitter",
    }, 
    {
      name: "Plugins",
      href: "https://npms.io/search?q=keywords%3Acerebro-plugin",
      title: "Plugins",
    },
  ],
];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <section>
      <h3 className="mt-4 font-medium leading-10" id={title}>
        {title}
      </h3>
      {children}
    </section>
  );
};

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white pb-12 mt-12">
      <div className="justify-around md:px-5 flex items-start max-w-5xl my-0 mx-auto flex-wrap">
        <Section title="Cerebro">
          <ul aria-labelledby="Cerebro">
            {menu[0].map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <a title={link.title}>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Links">
          <ul aria-labelledby="Links">
            {menu[1].map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <a title={link.title}>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </footer>
  );
};

export default FooterSection;
