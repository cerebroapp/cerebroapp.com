import styles from "./Highlight.module.css";

type HighlightProps = {
  title: string;
  img: string;
  children: JSX.Element | JSX.Element[];
};

const Highlight = ({ children, title, img }: HighlightProps) => {
  return (
    <section className={styles.highlight}>
      <img src={img} className="mr-4 -ml-8 max-w-md" />

      <div className="max-w-lg">
        <h2 className="pb-2 text-2xl my-2">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Highlight;
