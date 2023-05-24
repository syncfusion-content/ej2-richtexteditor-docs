/**
 * Rich Text Editor Paste Cleanup Sample
 */

var defaultRTE = new ej.richtexteditor.RichTextEditor({
    value: ` <p>Rich Text Editor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.</p>
        <p><b>Paste Cleanup properties:</b></p>
        <ul>
            <li>
                <p>prompt - specifies whether to enable the prompt when pasting in Rich Text Editor.</p>
            </li>
            <li>
                <p>plainText - specifies whether to paste as plain text or not in Rich Text Editor.</p>
            </li>
            <li>
                <p>keepFormat- specifies whether to keep or remove the format when pasting in Rich Text Editor.</p>
            </li>
            <li>
                <p>deniedTags - specifies the tags to restrict when pasting in Rich Text Editor.</p>
            </li>
            <li>
                <p>deniedAttributes - specifies the attributes to restrict when pasting in Rich Text Editor.</p>
            </li>
            <li>
                <p>allowedStyleProperties - specifies the allowed style properties when pasting in Rich Text Editor.</p>
            </li>
        </ul>`,
    toolbarSettings: {
        type: 'Expand'
    },
    pasteCleanupSettings: {
        prompt: true,
        plainText: false,
        keepFormat: false,
        deniedTags: ['a'],
        deniedAttrs: ['class', 'title', 'id'],
        allowedStyleProps: ['color', 'margin', 'font-size']
    }
    });
defaultRTE.appendTo('#defaultRTE');

