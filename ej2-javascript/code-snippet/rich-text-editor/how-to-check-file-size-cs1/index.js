var defaultRTE = new rich_text_editor_1.RichTextEditor({
        height: 400,
        toolbarSettings: {
            items: ['Undo', 'Redo', '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'SubScript', 'SuperScript', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
                'Indent', 'Outdent', '|', 'Image', '|', 'SourceCode',
                '|', 'ClearFormat', 'Print']
        },
        insertImageSettings: {
            saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
            path: "../Images/"
        },
        imageUploading: onImageUploading
    });
    defaultRTE.appendTo("#defaultRTE");

    function onImageUploading(args) {
        console.log("file is uploading");
        var sizeInBytes = args.fileData.size;
        var imgSize = 500000;
        if (imgSize < sizeInBytes) {
            args.cancel = true;
        }
    }

