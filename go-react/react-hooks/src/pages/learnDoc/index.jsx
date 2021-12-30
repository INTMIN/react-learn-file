import React, { Component } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";

// import { Spin } from "antd";

class List extends Component {
  state = {
    markdown: null
  };
  componentDidMount() {
    this.getLoad();
  }

  getLoad = () => {
    fetch("../hooks初步理解.md")
      .then(resp => resp.text())
      .then(markdown => {
        console.log(
          "🤙🤙🤙👍👍👍👍👍 ~ file: index.jsx ~ line 20 ~ List ~ markdown",
          markdown
        );
        this.setState({ markdown });
      });
  };

  render() {
    const { markdown } = this.state;
    console.log(
      "🤙🤙🤙👍👍👍👍👍 ~ file: index.jsx ~ line 30 ~ List ~ render ~ markdown",
      markdown
    );
    return (
      <div style={{textAlign: "left", padding: '20px 10% 20px 10%'}}>
        {markdown ? (
          <ReactMarkdown
            // rehypePlugins={[rehypeHighlight]}
            remarkPlugins={[remarkGfm]}
            escapeHtml={false}
            children={markdown}
          />
        ) : null}

        {/* {markdown}
        </ReactMarkdown> */}
      </div>
    );
  }
}

export default List;
