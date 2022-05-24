import React from 'react';
import './markdown.scss'

const Markdown = ({content, handleChanges}) => {

    return (
        <div className='markdown'>
            <div className='markdown__header'>
                <h1>Markdown</h1>
            </div>
            <textarea className='markdown__input' value={content} onChange={handleChanges}> 
            </textarea>
        </div>
        
    );
}

export default Markdown;
