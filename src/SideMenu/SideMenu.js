import React from 'react';
import './sidemenu.scss'

const SideMenu = ({currentDoc, setCurrentDoc, documents, setDocuments, layout, setLayout}) => {

    const doc = {
        id: `${Math.floor(Math.random() * 1000)}`,
        name: `newdocument`,
        value: '',
        createdAt: new Date().toLocaleTimeString(),
        lastEdited: new Date().toLocaleDateString()
    }

    
    function addNewDocument() {
        setDocuments([doc, ...documents])
        setCurrentDoc(doc.id)
    }

    function handleCurrentDoc(id) {
        setCurrentDoc(id)
    }

    return (
        <div className='sidemenu'>
            <div className='sidemenu_header'>
                <h2>MY DOCUMENTS</h2>
                <button className='add_document' onClick={addNewDocument}>Create New</button>
            </div>
            <div className='documents'>
                <ul>
                    {documents.map(document => {
                        return (
                            <li key={document.id} className={`document ${currentDoc === document.id ? 'active' : ''}`} onClick={() => handleCurrentDoc(document.id)}>
                                <p className='doc_name'>{document.name}.md</p>
                                <p className='doc_edit'>Last edited: {document.lastEdited}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;
