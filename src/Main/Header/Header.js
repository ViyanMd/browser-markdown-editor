import React from "react";
import {motion } from "framer-motion";
import './header.scss';




function Header({layout, setLayout, currentDoc, documents, setDocuments,setCurrentDoc}) {
    let currDoc = documents.find(document => currentDoc === document.id)
    function handleClick() { 
        setLayout({
            ...layout,
            sideMenu: !layout.sideMenu
        })
    }

    function handleNameChange(e) {
        setDocuments(() => {
            let newDocs=[...documents]
            Object.defineProperties(newDocs.find(document => document.id === currentDoc), {'name': {value: e.target.value}})
            return newDocs
        })
    }

    function handleSaveClick() {
		localStorage.setItem('docs', JSON.stringify(documents))
		// setChangesSaved(true)
	}

    function handleDelete() {
        const newDocs = [...documents]
        newDocs.splice(newDocs.findIndex(document => document.id === currDoc),1)
        setCurrentDoc(newDocs[0].id)
        setDocuments(newDocs)
        localStorage.setItem('docs', JSON.stringify(newDocs))
    }

    return (

        <header>
            <div className="hero">
                <div className={`toggle_side ${layout.sideMenu ? 'open' : " "}`} onClick={handleClick}>
                    <span className='one'></span>
                    <span className='two'></span>
                    <span className='three'></span>
                    <span className='four'></span>
                </div>
                <div animate={{scale: [0.9, 1.1, 1]}}className="logo">
                    <p>MARKDOWN</p>
                </div>
                <div className="current_doc">
                    <div className="edit__name">
                        <p>CURRENT DOCUMENT</p>
                        <input className="edit__name_input"  type='text' value={currDoc.name} autoComplete="on" onChange={handleNameChange}/>
                    </div>
                </div>
            </div>
            <div className="operations">
                <button className="operations__delete" onClick={handleDelete}><svg fill="#fa314a" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg></button>
                <button className="operations__save" onClick={handleSaveClick}>SAVE</button>
            </div>
        </header>
    );
}

export default Header;

