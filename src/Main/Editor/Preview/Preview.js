import React from 'react';
import './preview.scss'
import ReactMarkdown from 'react-markdown';

const Preview = ({documents, currentDoc}) => {
    const preview = documents.filter(document => document.id === currentDoc)
    return (
        <div className='preview'>
            <div className='preview__header'>
                <h1>Preview</h1>
                </div>
            <div className='preview__result'>
                <ReactMarkdown children={preview[0].value} className='preview' />
            </div>
        </div>
    );
}

export default Preview;
