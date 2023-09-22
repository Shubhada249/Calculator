
import React,{useState, createContext} from 'react';
import './ChildApp-style.css';
import './App.css';
import  ChildApp  from './ChildApp.js'; // Import myFunction from the other file


/*class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }
  ParentFun = () => {
    this.setState({ val: this.state.val + 1 });
  };
  render() {
    return (
      <div className ="classApp">
        <h1>Number: {this.state.val}</h1>
        <ChildApp arg={this.ParentFun}/>
      </div>
    );
  }
}
This refers to current object and state is like storage for that data
*/
export const Numbers = createContext();
function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  

  const ParentFun1=()=>
  {
    setVal1(val1+1);
  }
  const ParentFun2=()=>
  {
    setVal2(val2+1);
  }
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className ="classApp">  
      <button className="back" onClick={goBack}>&#8249;</button>
      <div className="num">  
        <h2>{val1}</h2>  
        <h2>{val2}</h2>  
      </div>  
      <Numbers.Provider value={{val1,val2}}>
      <ChildApp arg1={ParentFun1} arg2={ParentFun2}/>  
      </Numbers.Provider> 
      
    </div>
  );
}

export default App;

