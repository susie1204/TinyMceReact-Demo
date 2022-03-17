import React, { useRef, useState } from "react";
import {Editor, IAllProps } from "@tinymce/tinymce-react";

const TinyEditorComponent:React.FC<IAllProps> = ()=>{
    const [value, setValue] = useState('<p>The quick brown fox jumps over the lazy dog</p>');
    const [text, setText] = useState('');

    const editorRef = useRef(null);
    const initProps={
        height: 500,
        plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        // plugins: [
        //   'advlist autolink lists link image charmap print preview anchor',
        //   'searchreplace visualblocks code fullscreen',
        //   'insertdatetime media table paste code help wordcount'
        // ],
        menubar: 'file edit view insert format tools table help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }

    const onInit =(evt: any, editor: any) => {
       setText(editor.getContent({format: 'text'}));
    }

    const onEditorChange = (newValue: any, editor:any) => {
        setValue(newValue);
        setText(editor.getContent({format: 'text'}));
        console.log('editor Value:',newValue);
      }

    return(
        <React.Fragment>
            <Editor 
               onInit={onInit}
               initialValue="<p>This is the initial content of the editor.</p>"
               init={initProps}
               onEditorChange={onEditorChange}/>
        </React.Fragment>
    )

}

export default TinyEditorComponent