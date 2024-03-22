


import { RichTextEditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Image,  Link, HtmlEditor, QuickToolbar );

let defaultRTE: RichTextEditor = new RichTextEditor({
        toolbarSettings: {
        items: ['Image']},
        insertImageSettings: {
                saveUrl:"{localHost}/Home/SaveImage",
                path:"{localHost}/Uploads/"
        }
});
defaultRTE.appendTo('#defaultRTE');



