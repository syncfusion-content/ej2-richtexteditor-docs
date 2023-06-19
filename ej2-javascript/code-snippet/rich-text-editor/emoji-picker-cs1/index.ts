import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, EmojiPicker } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, EmojiPicker);

let emojiPickerRTE: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['EmojiPicker']
    },
});

emojiPickerRTE.appendTo('#emojipickerRTE');