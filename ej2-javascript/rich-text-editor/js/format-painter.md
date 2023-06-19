---
layout: post
title: Format Painter in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Format Painter in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Format Painter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Format Painter in ##Platform_Name## Rich text editor

The format painter is a tool that allows you to copy all the formatting from a piece of text and apply it to another one. Format painter can be accessed via the toolbar or the keyboard shortcuts. The format painter can be used to copy the formatting of a single word or a whole paragraph. The following table list the options available to customize the format painter. The format painter can be customized using the [formatPainterSettings](../api/rich-text-editor/formatPainterSettings/) property.

| options           | Description                                                                             |
|-------------------|-----------------------------------------------------------------------------------------|
| allowedFormats    | Defines the tag name selectors for obtaining the formats from the elements.             |
| deniedFormats     | Defines selectors for the elements from which fetching formats is expressly prohibited. |

## Enabling the toolbar option for Format Painter in ##Platform_Name## Rich text editor

You can add the `FormatPainter` tool in the Rich Text Editor using the `toolbarSettings` [items](../api/rich-text-editor/toolbarSettings/#items) property.

By double clicking the format painter toolbar button, `sticky mode` will be enabled. In sticky mode, the format painter will be enabled until the user clicks the `Escape` key again.

The following code example shows how to add the format painter tool in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="index.jss" %}
(% include code-snippet/rich-text-editor/format-painter-cs1/index.js %)
(% endhighlight %)
{% highlight html tabtitle="index.html" %}
(% include code-snippet/rich-text-editor/format-painter-cs1/index.html %)
(% endhighlight %)
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/format-painter-cs1" %}

## Customization of copy and paste format in ##Platform_Name## Rich text editor

You can customize the format painter tool in the Rich Text Editor using the `formatPainterSettings` property.

With [allowedFormats](../api/rich-text-editor/formatPainterSettings/#allowedformats) property you can use the following selectors to allow the formats from the selected text. The following example shows how to allow the formats from the selected text such as `p; h1; h2; h3; div; ul; ol; li; span; strong; em; code;`.

With `deniedFormats` property you can use the following selectors to deny the formats from the selected text. The following table lists the selectors and its usage.

| Type | Description        | Selector                                                | Usage                                                                  |
|------|--------------------|---------------------------------------------------------|------------------------------------------------------------------------|
| ()   | Class Selector     | h3(e-rte-block-blue-text)                               | The H3 element with class e-rte-block-blue-text is not copied.         |
| []   | Attribute Selector | span\[title]                                            | The span element with the title attribute is not copied.               |
| {}   | Style Selector     | span{background-color, color}                           | The span element with background-color and color styles is not copied. |

Using the [deniedFormats](../api/rich-text-editor/formatPainterSettings/#deniedformats) property following styles are denied to copy from the selected text such as `h3(e-rte-block-blue-text){background-color,padding}[title]; li{color}; span(e-inline-text-highlight)[title]; strong{color}(e-rte-strong-bg)`.

{% tabs %}
{% highlight ts tabtitle="index.js" %}
(% include code-snippet/rich-text-editor/format-painter-cs2/index.js %)
(% endhighlight %)
{% highlight html tabtitle="index.html" %}
(% include code-snippet/rich-text-editor/format-painter-cs2/index.html %)
(% endhighlight %)
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/format-painter-cs2" %}
## Using the shortcut key to copy and paste the format

You can use the following shortcut keys to copy and paste the format in the Rich Text Editor.

| Actions               | Keyboard shortcuts                    | Description                                                     |
|-----------------------|---------------------------------------|-----------------------------------------------------------------|
| Copy the format       | <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + C | Copy the selection format or current range.                     |
| Pate the format       | <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + V | Paint the copied format.                                        |
| Escape                | <kbd>ESC</kbd>                        | Remove the previously copied format and disable the sticky mode.|

> The format painter retains the formatting after application making it possible to apply the same formatting multiple times by using the <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + V keyboard shortcut.

> You can refer to our [Execute Command Public Method](../api/rich-text-editor/executeCommand/#command) to know more about the commands that can be used to execute the format painter actions.
