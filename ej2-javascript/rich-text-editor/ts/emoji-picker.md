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

To customize the emojis in the Rich Text Editor, you can utilize the following list of options available in the [`emojiPickerSettings`]

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

In addition to using the `iconCSS` property to define the style for the emoji icon in the heading of the icon, you also have the option to provide custom code for the icon itself.

If you prefer to use a specific icon, you can include the corresponding HTML or CSS code within the emoji picker heading. This allows you to display a custom icon or choose from a library of icons to represent the emoji picker.

By combining the flexibility of the `iconCSS` property with the ability to provide custom code for the icon, you can achieve a highly customized and visually appealing emoji picker heading in the Rich Text Editor.

> Rich Text Editor features are segregated into individual feature-wise modules. To use emoji picker, inject the Emoji picker module using the `RichTextEditor.Inject(Audio)`.


## Using the shortcut key to open the emoji picker

In the Rich Text Editor, when you type a word prefix or start typing a word in the editor, followed by a colon (":"), the emoji picker popup will open. This functionality allows you to easily access the emoji picker by simply typing a word and using a colon.

![JavaScript Rich Text Editor Emoji picker shortcut](./images/javaScript-richtexteditor-emoji-picker-shorcut.png)

## Filtering emojis with the search box

In the emoji picker popup, there are multiple emojis available. If you want to find a particular emoji, you can filter them by typing the name of the emoji in the input box.

If you open the emoji picker popup by typing a word prefix or starting a word followed by a colon (":"), you don't need to worry about filtering the particular emoji without using a text box. You can simply filter the emoji by typing a colon after the name of the emoji, and it will filter the emojis accordingly.

![JavaScript Rich Text Editor Emoji picker shortcut](./images/javaScript-richtexteditor-emoji-picker-filter.png)

## Navigating and selecting emojis using the keyboard

In the emoji picker popup, you have the option to move the emoji focus from one emoji to another using the keyboard. The following keys are used for navigation:

| Keyboard Actions | Description |
|----------------|---------|
| `Down`| Moves the focus to the emoji below in the list. |
| `Up` | Moves the focus to the emoji above in the list. |
| `Left` | Moves the focus to the emoji on the left side. |
| `Right` | Moves the focus to the emoji on the right side. |
| `Enter`| To insert the selected emoji into the content. |
| `Escape` | To close the emoji picker popup without selecting an emoji |


## Opening the emoji picker in a custom position

If you call the `showEmojiPicker()` method without specifying the `x` and `y` parameters, the emoji picker popup will open at the corresponding cursor position in the editor. This default behavior ensures that the emoji picker appears conveniently and automatically adjusts its position based on the cursor's location.

To open the `showEmojiPicker(x, y)` method and display the emoji picker at different positions, you can provide values for both the `x` and `y` parameters. By specifying the `x` value, you can determine the left position, and by specifying the `y` value, you can determine the top position. This allows you to have precise control over where the emoji picker appears on the screen.