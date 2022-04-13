
// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';



function App() {
  const [Mode, setMode] = useState('light')




  const toggleMode = () => {
    if (Mode === "light") {
      setMode('dark')
      // document.body.style.backgroundColor="grey"
      document.body.style.backgroundColor = "#042743"
      document.title = 'Text_Utils- Dark Mode'

    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.title = 'Text_Utils- White Mode'
    }
  }



  return (
    // below code is a JSX.
    <>
      
        <Navbar title="Text_Utils" aboutText="About Us" mode={Mode} toggleMode={toggleMode} />


        <div className="container my-3">
          
             
           
              <TextForm className='text-xs' Heading="Text Analyzer" Mode={Mode} />
           
        </div>
        {/* <About /> */}
    </>
  );
}

export default App;
