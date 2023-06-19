import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, FormatPainter } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, FormatPainter);

let formatPainterRTE: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['FormatPainter', 'SourceCode']
    },
    formatPainterSettings: {
        allowedFormats: 'p; h1; h2; h3; div; ul; ol; li; span; strong; em; code;',
        deniedFormats: 'h3(e-rte-block-blue-text){background-color,padding}[title]; li{color}; span(e-inline-text-highlight)[title]; strong{color}(e-rte-strong-bg);',
    }
});

formatPainterRTE.appendTo('#formatPainterRTE');
