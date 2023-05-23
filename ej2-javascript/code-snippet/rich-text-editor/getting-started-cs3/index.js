// initialize Rich Text Editor component
var defaultRTE = new ej.richtexteditor.RichTextEditor({
    value: "***Overview***\n  The Rich Text Editor component is WYSIWYG (\"what you see is what you get\") editor used to create and edit the content and return valid HTML markup or markdown (MD) of the content. The editor provides a standard toolbar to format content using its commands. Modular library features to load the necessary functionality on demand. The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operation, HTML view, and more.\n\n  ***Key features***\n  - *Mode*: Provides IFRAME and DIV mode.\n  - *Module*: Modular library to load the necessary functionality on demand.\n  - *Toolbar*: Provide a fully customizable toolbar.\n  - *Editing*: HTML view to edit the source directly for developers.\n  - *Third-party Integration*: Supports to integrate third-party library.\n  - *Preview*: Preview the modified content before saving it.\n  - *Tools*: Handling images, hyperlinks, video, uploads and more.\n  - *Undo and Redo*: Undo/redo manager.\n  - *Lists*:Creates bulleted and numbered list.",
    editorMode: 'Markdown',
});
// render initialized Rich Text Editor
defaultRTE.appendTo('#defaultRTE');

