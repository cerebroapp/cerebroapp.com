import Link from "next/link";

const menu = [
  [
    {
      name: "Download",
      href: "#download",
      title: "Download latest version of Cerebro app",
    },
    {
      name: "Releases",
      href: "https://github.com/cerebroapp/cerebro/releases",
      title: "Cerebro App Releases",
    },
    {
      name: "Contact Us",
      href: "mailto:mailto:hello@cerebroapp.com",
      title: "Contact Us",
    },
  ],
  [
    {
      name: "Github",
      href: "https://github.com/cerebroapp/cerebro",
      title: "Github",
    },
    {
      name: "Plugins",
      href: "https://npms.io/search?q=keywords%3Acerebro-plugin",
      title: "Plugins",
    },
  ],
  [
    {
      name: "Twitter",
      href: "https://twitter.com/cerebro_app",
      title: "Twitter",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/cerebroapp",
      title: "Facebook",
    },
    {
      name: "VK (russian)",
      href: "https://vk.com/cerebroapp",
      title: "VK (russian)",
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
        {/* add md:justify-between when newsletter section is activated */}
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

        <Section title="Resources">
          <ul aria-labelledby="Resources">
            {menu[1].map((link) => (
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
            {menu[2].map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <a title={link.title}>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* <Section title="Newsletter">
          <form
            action="//cerebroapp.us14.list-manage.com/subscribe/post?u=dacd677a0b1d22bf238583ffd&id=815093fc81"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate
          >
            <input
              type="email"
              className="p-2 border-0 rounded-md"
              placeholder="Enter your email..."
            />
            <button className="ml-2 inline-block whitespace-nowrap bg-[#453278] rounded-md p-2 active:scale-95">
              Submit
            </button>
            <div className="text-sm mt-2">
              Subscribe for new updates and tips
            </div>
          </form>
        </Section> */}
      </div>
    </footer>
  );
};

export default FooterSection;
