import "./bootstrap";

// This configuration could be replaced with CDN
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import GifPlugin from "../gif-plugin/gif-plugin";

window.EditorJS = EditorJS;
window.EditorJSTools = {
    GifPlugin: GifPlugin,
    Header: Header,
};
