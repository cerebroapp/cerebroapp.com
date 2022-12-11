import GitHubButton from "react-github-btn";
import Highlight from "./Highlight";

const Section = () => (
  <>
    <style jsx>
      {`
        p {
          margin-bottom: 10px;
        }
      `}
    </style>

    <Highlight title="Search everything" img="/images/search.png">
      <p>
        Search everything in few clicks. On your machine or in the Internet.
      </p>
      <p>
        Interact with everything: open file in default program or reveal in
        finder, copy contact details to clipboard, see google suggestions.
      </p>
    </Highlight>

    <Highlight title="See everything" img="/images/previews.png">
      <p>
        Maps, translations, files. Now you don&rsquo;t have to open another
        application to see what you need.
      </p>
      <p>Everything is in one place.</p>
    </Highlight>

    <Highlight title="Do everything" img="/images/plugins.png">
      <p>
        Using included plugin manager you always can find and use what you want.
      </p>
      <p>
        There is no plugin that you are looking for? Use simple, but powerful{" "}
        <a
          href="https://github.com/KELiON/cerebro/blob/master/docs/plugins.md"
          data-track="plugins-api"
        >
          API
        </a>{" "}
        to build your own plugins and share them with community.
      </p>
    </Highlight>

    <Highlight title="Open source" img="/images/open-source.png">
      <p>Cerebro is free and open-source.</p>
      <p>
        <a
          href="https://github.com/cerebroapp"
          data-track="opensource-link"
        >
          Be a part of community
        </a>
        : contribute your <br />
        improvements, suggestions and fixes.
      </p>
      <GitHubButton
        href="https://github.com/cerebroapp/cerebro"
        data-icon="octicon-star"
        aria-label="Star Cerebro on GitHub"
        data-show-count="true"
        title="Star Cerebro on GitHub"
      >
        Star
      </GitHubButton>
    </Highlight>
  </>
);

export default Section;
