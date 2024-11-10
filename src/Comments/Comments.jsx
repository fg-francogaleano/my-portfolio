import React from "react";

function Comments({ text }) {
  return <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />;
}

export default Comments;
