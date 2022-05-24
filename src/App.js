import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './Main/Header/Header';
import Editor from './Main/Editor/Editor'
import SideMenu from './SideMenu/SideMenu';
import data from './assets/data.json';



function App() {
  const [layout, setLayout] = useState({sideMenu: false});
  const [documents, setDocuments] = useState(localStorage.getItem('docs') ? JSON.parse(localStorage.getItem('docs')) : data)
  const [currentDoc, setCurrentDoc] = useState(localStorage.getItem('currenDoc') ? JSON.parse(localStorage('currentDoc')) : documents[0].id)
  const [local, setLocal] = useState(false)


  useEffect(() => {
		localStorage.setItem('currentDoc', currentDoc)
	}, [currentDoc])

  return (
    <main >
      <aside className={`storage__menu ${layout.sideMenu ? 'active' : ''}`}>
        <SideMenu 
          layout={layout} 
          setLayout={setLayout}
          setCurrentDoc={setCurrentDoc}
          currentDoc={currentDoc}
          documents={documents}
          setDocuments={setDocuments}
        />
      </aside>
      <div className={`editor ${layout.sideMenu ? "sidebar_active" : ""}`} >
        <Header 
          currentDoc={currentDoc}
          documents={documents}
          setDocuments={setDocuments}
          setLocal={setLocal}
          local={local}
          layout={layout} 
          setLayout={setLayout} />
        <Editor 
          setCurrentDoc={setCurrentDoc}
          currentDoc={currentDoc}
          documents={documents}
          setDocuments={setDocuments}
        />
      </div>
    </main>

  )
}

export default App;
