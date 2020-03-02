import React from "react";
import "./styles.css";

export default function Posts() {
  return (
    <article className="box-article box">
      <header>
        <h2>E-Commerce GrahpQl</h2>
      </header>
      <div className="content">
        <span>
          Scelerisque enim mi curae erat ultricies lobortis donec velit in per
          cum consectetur purus a enim platea vestibulum lacinia et elit ante
          scelerisque vestibulum. At urna condimentum sed vulputate a duis in
          senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a
          parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a
          natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu
          litora scelerisque eros suspendisse.
        </span>
      </div>
      <footer>
        <a href="#" className="button alt">
          Github
        </a>
        <a href="#" className="button alt">
          {" "}
          Demo
        </a>
      </footer>
    </article>
  );
}
