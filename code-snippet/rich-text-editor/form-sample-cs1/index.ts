


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, Count, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { FormValidator } from '@syncfusion/ej2-inputs';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, Count, QuickToolbar);

let defaultRTE: RichTextEditor = new RichTextEditor({ showCharCount: true, maxLength: 100, placeholder: 'Type something' });
defaultRTE.appendTo('#defaultRTE');

let formObject = new FormValidator('#form-element');

document.getElementById('validateSubmit').onclick = function (){
  getValue();
}

function getValue(){
  let form = document.getElementById('form-element');
  let formData = new FormData(form);
  let rteValue = formData.get('defaultRTE');
  alert(rteValue);//Store the value to the data base.
}



