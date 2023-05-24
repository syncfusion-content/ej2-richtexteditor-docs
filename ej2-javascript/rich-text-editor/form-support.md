---
layout: post
title: Form support in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Form support in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Form support 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Form support in ##Platform_Name## Rich text editor control

The following sample demonstrates how to get the Rich Text Editor value in button click.

## Render the Rich Text Editor

Render the Rich Text Editor in form.

```ts

<form id="myForm" class="form-vertical">
<div class="form-group">
<textarea id="defaultRTE" name="defaultRTE" required maxlength="100" minlength="20" data-msg-containerid="dateError">      </textarea>
<div id="dateError" style="padding-top: 10px"></div>
</div>
<div style="text-align: center">
<button id="validateSubmit" class="samplebtn e-control e-btn" type="submit" data-ripple="true">Submit</button>
<button id="resetbtn" class="samplebtn e-control e-btn" type="reset" data-ripple="true">Reset</button>
</div>
</form>

```

## Obtain the value

Upon submitting the form, the `getValue` method will be triggered. Through the `FormData` class, get the Rich Text Editor value.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/form-sample-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/form-sample-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/form-sample-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/form-sample-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/form-sample-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/form-sample-cs1" %}
{% endif %}

## See Also

* [How to integrate the third party library](./third-party-integration/)
* [How to validate the value](./validation/)