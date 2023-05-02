// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ClassicEditor from "./ckeditor5-37.1.0-customBuild-ghannam/build_/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const configuration = {
  language: {
    ui: "en",
    content: "ar",
  },
  toolbar: [],
};

const Editor = ({ value }: any) => {
  return (
    <CKEditor
      //   @ts-ignore
      editor={ClassicEditor}
      data={value}
      config={configuration}
      disabled={true}
    />
  );
};

export default Editor;
