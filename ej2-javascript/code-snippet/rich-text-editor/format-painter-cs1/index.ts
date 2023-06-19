import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, FormatPainter } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, FormatPainter);

let formatPainterRTE: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['FormatPainter', 'SourceCode']
    },
});

formatPainterRTE.appendTo('#formatPainterRTE');
