


import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

// initialize Rich Text Editor component
let defaultRTE: RichTextEditor = new RichTextEditor({
    height: 340,
    iframeSettings: {
        enable: true,
        attributes: {
            readonly: 'readonly'
        },
        resources: {
            scripts: ['my-script.js'],
            styles: ['my-style.css']
        }
    }
});
// render initialized Rich Text Editor
defaultRTE.appendTo('#defaultRTE');



