---
layout: post
title: Table in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Table in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Table 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Table in ##Platform_Name## Rich text editor control

Rich Text Editor allows to insert table of content in edit panel and provide options to add, edit, and remove the table as well as perform other table related action. For inserting the table to the Rich Text Editor, the following list of options have been provided in the [`tableSettings`](../api/rich-text-editor/tableSettings/#tablesettings)

| Options | Description | Default Value |
|----------------|---------|-----------------------------|
| minWidth | Sets the default minWidth of the table. | 0 |
| maxWidth | Sets the default maxWidth of the table. | null |
| resize | Enable resize feature in table.| true |
| styles | This is an array of key value pair, on each pair, key should be name of styling and value is class name. this list will be shown on quick toolbar options to change the styles of table on designing like dashed, double bordered. | [TableStyleItems](../api/rich-text-editor/tableSettings/#styles) |
| width | Sets the default width of the table. | 100% |

> Rich Text Editor features are segregated into individual feature-wise modules. To use table tool,inject image module using the `RichTextEditor.Inject(Table)`.

## Insert table

Using the `table` toolbar option, select a number of rows and columns to be inserted over the table grid and insert table into Rich Text Editor content using the mouse.

Tables can also be inserted through the `Insert Table` option in the pop-up where the number of rows and columns can be provided manually,and this is the default way in devices.

In the following sample, the table has been injected from table module.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs19" %}
{% endif %}

## Quick Toolbar

Quick toolbar is opened by clicking the table. It has different sets of commands to be performed on the table which increases the feasibility to edit the table easily.

> To use quick toolbar, inject the quick toolbar module using the `RichTextEditor.Inject(QuickToolbar)`.

## Table Header

`Table Header` command is available with quick toolbar option through which the header row can be added or removed from the inserted table. The following image illustrates the table header.

![RTE table header](./images/table_header.png)

## Insert Rows

`Rows` can be inserted above or below the required table cell through the quick toolbar. Also, focused row can be deleted. The following screenshot shows the available options of the row item.

![RTE table row](./images/table_rows.png)

## Insert Columns

`Columns` can be inserted to the left or right side of the required table cell through the quick toolbar. Also, the focused column can be deleted. The following screenshot shows the available options of the column item.

![RTE table column](./images/table_column.png)

## Set Color

The background color can be set for each table cell through the `background color` command available with quick toolbar.

![RTE table background color](./images/table_bg_color.png)

## Delete Table

Using the delete item in the quick toolbar, users can delete the entire table.

## Vertical Align

Text inside the table can be aligned to top, middle, or bottom using the [tableCellVerticalAlign](../api/rich-text-editor/quickToolbarSettings/#table) tool of the quick toolbar.

![RTE table vertical alignment](./images/table_vertical.png)

## Horizontal Align

Text inside the table can be aligned left, right, or center using the [tableCellHorizontalAlign](../api/rich-text-editor/quickToolbarSettings/#table) tool of the quick toolbar.

![RTE table horizontal alignment](./images/table_horizontal.png)

## Table Styles

Table styles provided for class name should be appended to a table element. It helps to design the
table in specific CSS styles when inserting in the editor.

By Default, provides Dashed border and Alternate rows.

**Dashed border**: Applies the dashed border to the table.

**Alternate border**: Applies the alternative background to the table.

![RTE table styles](./images/table_style.png)

## Table Properties

Sets the default width of the table when it is inserted in the Rich Text Editor using the width of [tableSettings](../api/rich-text-editor/tableSettings/#tablesettings).

Using the quick toolbar, users can change the width, cell padding, and cell spacing in the selected table using the properties option.

![RTE table settings](./images/table_properties.png)

## Table cell merge and split

The Rich Text Editor allows users to change the appearance of the tables by splitting or merging the table cells.

`TableCell` item should be configured in the Table [quickToolbarSettings](../api/rich-text-editor/quickToolbarSettings/#table) Property to show the merge/split icons while selecting the table cells

### Table cell merge

The table cell merge feature allows you to merge two or more row and column cells into a single cell with its contents.

The following image explains the table merge action.

![RTE table cell merge](./images/table_merge.png)

### Table cell split

The table cell split feature allows you to a selected cell can be split both horizontally and vertically.

The following image explains the table split action.

![RTE table cell split](./images/table_split.png)

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs20" %}
{% endif %}
