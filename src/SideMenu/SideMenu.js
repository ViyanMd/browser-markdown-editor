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

    const docList = documents.map(document => (
            <li  className={`document ${currentDoc === document.id ? 'active' : ''}`} key={document.id} onClick={() => handleCurrentDoc(document.id)}>
                <p className='doc_name'>{document.name}.md</p>
                <p className='doc_edit'>Last edited: {document.lastEdited}</p>
            </li>
        ))

    return (
        <aside className={`sidemenu ${layout.sideMenu ? 'active' : ''}`}>
            <div className='sidemenu_header'>
                <h2>MY DOCUMENTS</h2>
                <button className='add_document' onClick={addNewDocument}>Create New</button>
            </div>
            <div className='documents'>
                <ul>
                    {docList}
                </ul>
            </div>
        </aside>
    );
}

export default SideMenu;
