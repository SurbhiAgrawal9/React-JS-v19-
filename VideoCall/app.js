
// npm i agora-react-uikit


import React from 'react';
import AgoraUIKit from 'agora-react-uikit';
// import  {useParams} from 'react-router-dom';



const agoraProps = {
  
  styleProps: {
      UIKitContainer: {
          width: '100vw',
          height: '100vh',
          position: 'relative',
          maxHeight: '100vh'
      },
      localBtnContainer: {
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: '0',
          maxWidth: '67.5rem',
      },
      BtnTemplateStyles: {
          backgroundColor: '#111827',
          width: '3.125rem',
          height: '3.125rem',
            border: 'none'
        },
        maxViewContainer: {
            maxWidth: '67.5rem',
        },
    },
};

function App() {
  const {id} = useParams()
  const config = {
    appId : "9a43fb8f93424761b9a9cb43ac3aed5b" ,
    token : "007eJxTYLDVbZnt4i78fsWCNfZfApM5lzxXijr5q/n9Yy1fdoZfWZMVGCwTTYzTkizSLI1NjEzMzQyTLBMtk5NMjBOTjRNTU0yTjrA1pDcEMjI8bHViYIRCEJ+FoSS1uISBAQBHYR+4",
    channel : "test",
    role : "host",
    uid : "abc123"
  }

  return (
    <div>

      <Router>
<nav>
        <Link to="/about">Home</Link> | <Link to="/save">Save</Link>
      </nav>
        <Routes>

        <Route path="/home"  element={<Home />} />
        <Route path="/home/about"  element={<About />} />
        
        </Routes>
      </Router>
      </div>
    <div style={
      {
        height: "100vh",
        display: "flex"
    
      }
    }>

    <div
            style={{
              position: "absolute",
              top: "4px",
              left: "4px",
              zIndex: 10,
              
            }}
          >
          </div>
     <AgoraUIKit  rtcProps={config} styleProps={agoraProps}/>

  
    </div>
  )
}

export default App
