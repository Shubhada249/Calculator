
import React,{useState} from 'react';
import Add from './Add';
import Subtract from './Subtract';
import Multiply from './Multiply';
import Divide from './Divide';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';

 function ChildApp(props) {
  //Without Routes
  // // State to track which component to render
  // const [activeComponent, setActiveComponent] = useState();

  // // Function to change the active component
  // const navigateTo = (component) => {
  //   setActiveComponent(component);
  // };

  // // Render the active component based on state
  // const renderComponent = () => {
  //   // const n1=props.num1;
  //   // const n2=props.num2;
  //   if (activeComponent === 'Add') {
  //     return <Add/>;//return <Add num1={n1} num2={n2} />;
  //   } else if (activeComponent === 'Subtract') {
  //     return <Subtract/>;//return <Subtract num1={n1} num2={n2}/>;
  //   } else if (activeComponent === 'Multiply') {
  //     return <Multiply/>;//return <Multiply num1={n1} num2={n2}/>;
  //   } else if (activeComponent === 'Divide') {
  //     return <Divide/>;//return <Divide num1={n1} num2={n2}/>;
  //   }
  // };
  
  return <div className="custom-style">
    <div className="button-increment">
      <button onClick={props.arg1}>Increment</button>
      <button onClick={props.arg2}>Increment</button>
    </div>
    {/* <div className="nav"> //without using route
      <button onClick={() => navigateTo('Add')}>Add</button>
      <button onClick={() => navigateTo('Subtract')}>Subtract</button>
      <button onClick={() => navigateTo('Multiply')}>Multiply</button>
      <button onClick={() => navigateTo('Divide')}>Divide</button>     
    </div>   
    <div className="rendered-component">
         Render the active component 
        {renderComponent()}
    </div>*/}
    
    <Router>
      <div>
        <div className="nav">        
          <button><Link to="/add" className='li'>Add</Link></button>
          <button><Link to="/subtract" className='li'>Subtract</Link></button>
          <button><Link to="/multiply" className='li'>Multiply</Link></button>
          <button><Link to="/divide" className='li'>Divide</Link></button>     
        </div> 

        <div className="rendered-component">
          <Routes>          
            <Route path="/add" element={<Add />} />
            <Route path="/subtract" element={<Subtract />} />
            <Route path="/multiply" element={<Multiply />} />
            <Route path="/divide" element={<Divide />} />
          </Routes>
        </div>
      </div>
    </Router>
  </div>;
}
export default ChildApp;



  