---
layout: post
title: Emoji picker in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Emoji picker in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Emoji picker
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Emoji picker in ##Platform_Name## Rich text editor control

A Rich Text Editor is a tool that allows users to easily add emojis or emoticons to their text. Typically, it is a small window or panel that displays a variety of emojis, arranged in different categories, such as smileys, animals, food, and so on. Users can select the desired emoji by clicking on it or by typing its name in a search bar.

## Enabling the toolbar option and custom emojis.

You can add the `EmojiPicker` tool to the toolbar of the Rich Text Editor by utilizing the `toolbarSettings` [items](../api/rich-text-editor/toolbarSettings/#items) property.

The [emojiPickerSettings](../api/rich-text-editor/emojiPickerSettings/) property allows for easy customization of emojis in the Rich Text Editor.

```ts

let defaultRTE: RichTextEditor = new RichTextEditor({
    emojiPickerSettings: {
        iconsSet: [{name: 'Smilies & People', code: '1F600', iconCss: 'e-emoji', 
        icons: [{ code: '1F600', desc: 'Grinning face' },
        { code: '1F603', desc: 'Grinning face with big eyes' },
        { code: '1F604', desc: 'Grinning face with smiling eyes' },
        { code: '1F606', desc: 'Grinning squinting face' },
        { code: '1F605', desc: 'Grinning face with sweat' },
        { code: '1F602', desc: 'Face with tears of joy' },
        { code: '1F923', desc: 'Rolling on the floor laughing' },
        { code: '1F60A', desc: 'Smiling face with smiling eyes' }]
        }, {
        name: 'Animals & Nature', code: '1F435', iconCss: 'e-animals',
        icons: [{ code: '1F436', desc: 'Dog face' },
        { code: '1F431', desc: 'Cat face' },
        { code: '1F42D', desc: 'Mouse face' },
        { code: '1F439', desc: 'Hamster face' },
        { code: '1F430', desc: 'Rabbit face' },
        { code: '1F98A', desc: 'Fox face' }]
        }, {
        name: 'Food & Drink', code: '1F347', iconCss: 'e-food-and-drinks',
         icons: [{ code: '1F34E', desc: 'Red apple' },
        { code: '1F34C', desc: 'Banana' },
        { code: '1F347', desc: 'Grapes' },
        { code: '1F353', desc: 'Strawberry' },
        { code: '1F35E', desc: 'Bread' },
        { code: '1F950', desc: 'Croissant' },
        { code: '1F955', desc: 'Carrot' },
        { code: '1F354', desc: 'Hamburger' }]
        }, {
        name: 'Activities', code: '1F383', iconCss: 'e-activities',
        icons: [{ code: '26BD', desc: 'Soccer ball' },
        { code: '1F3C0', desc: 'Basketball' },
        { code: '1F3C8', desc: 'American football' },
        { code: '26BE', desc: 'Baseball' },
        { code: '1F3BE', desc: 'Tennis' },
        { code: '1F3D0', desc: 'Volleyball' },
        { code: '1F3C9', desc: 'Rugby football' }]
        }, {
        name: 'Travel & Places', code: '1F30D', iconCss: 'e-travel-and-places',
        icons: [{ code: '2708', desc: 'Airplane' },
        { code: '1F697', desc: 'Automobile' },
        { code: '1F695', desc: 'Taxi' },
        { code: '1F6B2', desc: 'Bicycle' },
        { code: '1F68C', desc: 'Bus' }]
        }, {
        name: 'Objects', code: '1F507', iconCss: 'e-objects', icons: [{ code: '1F4A1', desc: 'Light bulb' },
        { code: '1F526', desc: 'Flashlight' },
        { code: '1F4BB', desc: 'Laptop computer' },
        { code: '1F5A5', desc: 'Desktop computer' },
        { code: '1F5A8', desc: 'Printer' },
        { code: '1F4F7', desc: 'Camera' },
        { code: '1F4F8', desc: 'Camera with flash' },
        { code: '1F4FD', desc: 'Film projector' }]
        }, {
        name: 'Symbols', code: '1F3E7', iconCss: 'e-symbols', icons: [{ code: '274C', desc: 'Cross mark' },
        { code: '2714', desc: 'Check mark' },
        { code: '26A0', desc: 'Warning sign' },
        { code: '1F6AB', desc: 'Prohibited' },
        { code: '2139', desc: 'Information' },
        { code: '267B', desc: 'Recycling symbol' },
        { code: '1F6AD', desc: 'No smoking' }]
        }]
    }
});
defaultRTE.appendTo('#defaultRTE');

```

In addition to using the `iconCSS` property as the first priority for defining the style of the emoji icon in the heading, you also have the option to provide custom code for the icon itself. If the `iconCSS` property is not needed, custom `code` can be used to style the heading of the toolbar in the emoji picker.

In the emoji picker popup, there are multiple emojis available. If you want to find a particular emoji, you can filter them by typing the name of the emoji in the input box.

The following code example shows how to add the Emoji picker tool in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/emoji-picker-cs1" %}

> Rich Text Editor features are segregated into individual feature-wise modules. To use emoji picker, inject the Emoji picker module using the `RichTextEditor.Inject(EmojiPicker)`.


## Using the shortcut key to open the emoji picker

In the Rich Text Editor, you can enable the instant display of the emoji picker by pressing the colon (:) key when typing a word prefix in an editor. This functionality allows you to easily access the emoji picker by simply typing a word and using a colon.

If you open the emoji picker popup by typing a word prefix or starting a word followed by a colon (":"), you don't need to worry about filtering the particular emoji without using a text box. You can simply filter the emoji by typing a colon after the name of the emoji, and it will filter the emojis accordingly.

![JavaScript Rich Text Editor Emoji picker shortcut](./images/javaScript-richtexteditor-emoji-picker-shorcut.png)

## Navigating and selecting emojis using the keyboard

The emoji picker popup offers keyboard navigation options, allowing you to move the emoji focus from one emoji to another. The following keys are used for navigation:

`Arrow keys`: Use the arrow keys (up, down, left, right) to move the emoji focus in the corresponding direction.

`Enter`: Press Enter key to select the currently focused emoji.

`Escape`: Press Escape to close the emoji picker popup without selecting an emoji.


## Opening the emoji picker in a custom position

If you call the `showEmojiPicker()` method without specifying the `x` and `y` parameters, the emoji picker popup will open at the corresponding cursor position in the editor. This default behavior ensures that the emoji picker appears conveniently and automatically adjusts its position based on the cursor's location.

To open the `showEmojiPicker(x, y)` method and display the emoji picker at different positions, you can provide values for both the `x` and `y` parameters. By specifying the `x` value, you can determine the left position, and by specifying the `y` value, you can determine the top position. This allows you to have precise control over where the emoji picker appears on the screen.