import React from "react";
import {motion } from "framer-motion";
import './header.scss';
import Doc from '../../assets/Header/icons8-document.svg';




function Header({layout, setLayout, currentDoc, documents, setDocuments}) {
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

    return (

        <header>
            <div className="hero">
                <motion.button className="toggle_side" onClick={handleClick} whileTap={{scale: 1.2, duration: 3}}>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
                </motion.button>
                <motion.div animate={{scale: [0.9, 1.1, 1]}}className="logo">
                    <p>MARKDOWN</p>
                </motion.div>
                <div className="current_doc">
                    <img alt='' src={Doc}/>
                    <div className="edit__name">
                        <p>CURRENT DOCUMENT</p>
                        <input className="edit__name_input"  type='text' value={currDoc.name} autoComplete="on" onChange={handleNameChange}/>
                    </div>
                </div>
            </div>
            <div className="operations">
                <button className="operations__delete"><svg fill="#fa314a" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg></button>
                <button className="operations__save" onClick={handleSaveClick}>SAVE CHANGES</button>
            </div>
        </header>
    );
}

export default Header;

