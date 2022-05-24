import React from 'react';
import './editor.scss';
import Markdown from './Markdown/Markdown';
import Preview from './Preview/Preview';


const Editor = ({currentDoc, documents, setDocuments}) => {

    function handleChanges(e) {
        setDocuments(() => {
            const newDocs = [...documents]
            Object.defineProperties(newDocs.filter(document => document.id === currentDoc)[0], {
                "value" : {value: e.target.value}
            })
            return newDocs
        })

    }

    let content = documents.filter(document => document.id === currentDoc)[0]['value']

    return (
        <div className='editor_main'>
           <Markdown content={content} handleChanges={handleChanges}/>
           <Preview documents={documents} currentDoc={currentDoc}/>
        </div>
    );
}

export default Editor;
