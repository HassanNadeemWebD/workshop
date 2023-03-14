
// import './App.css';
import { useState } from "react";
import Card from "./components/Card";
import Navigation from "./components/Navbar";
import img1 from './components/logo192.png'

function App() {
  // const a = 13;

  // const b = 12;
  const [text, setText] = useState("");
  let showData = (val) => {

    // console.log(val);
    // console.log(val.target.value)
    setText(val.target.value);

  }


  return (

    <div className="App container">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
        <label className="form-check-label" for="flexCheckChecked">
         Dark Mode
        </label>
      </div>
{/* 
      <Navigation title="Aptech" /> */}
      <div className="form-outline">
        <label className="form-label mt-5" for="textAreaExample">Message</label>
        <textarea className="form-control" value={text} onChange={showData} id="text" col="8" rows="8"></textarea>
        <button className="btn btn-primary mt-2" type="submit"  >Submit</button>
        <h3>Word Count:{text.length} </h3>
        <p>{text.toUpperCase()}</p>
      </div>
      <div className="row">

        <Card cardTitle="ReactJS" cardImg={img1} />
        <Card cardTitle="AngularJS" cardImg="https://dwglogo.com/wp-content/uploads/2017/03/AngularJS_logo_004.svg" />
        <Card cardTitle="NextJS" cardImg="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png" />
        <Card cardTitle="VueJS" cardImg="https://img.icons8.com/color/512/vue-js.png" />
      </div>
    </div>
  );
}

export default App;
