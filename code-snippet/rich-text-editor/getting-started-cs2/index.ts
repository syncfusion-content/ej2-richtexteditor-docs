


import { RichTextEditor, Toolbar, Link, Image, HtmlEditor } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor);

// initialize RichTextEditor component
let defaultRTE: RichTextEditor = new RichTextEditor({
    value: `<p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul><li><p>Provides <b>IFRAME</b> and <b>DIV</b> modes</p></li>
    <li><p>Capable of handling markdown editing.</p></li>
    <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
    <li><p>Provides a fully customizable toolbar.</p></li>
    <li><p>Supports third-party library integration.</p></li>
    </ul>`
});
// render initialized Rich Text Editor
defaultRTE.appendTo('#defaultRTE');



