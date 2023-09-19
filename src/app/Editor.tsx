"use client";

import grapesjs, { Editor } from "grapesjs";
import GjsEditor from "@grapesjs/react";

import "grapesjs/dist/css/grapes.min.css";

export default () => {
  const onEditor = (editor: Editor) => {
    console.log("Editor loaded", { editor });
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      options={{
        height: "100vh",
        storageManager: false,
      }}
      onEditor={onEditor}
    />
  );
};
