import book from './book-vector.png';
import double_rules from "./double_rules";
import './App.css';
import {useState} from "react";

function App() {

    // let [rule, setRule] = useState(rules[Math.floor((Math.random() * rules.length))]);
    let [doubleRule, setDoubleRule] = useState(double_rules[Math.floor((Math.random() * double_rules.length))]);

  return (
      <div  className="App">
          <header className="App-header">
              <img src={book} className="App-logo" alt="book image"/>
          </header>
          <div className="App-info_block">
              <div className="info-block_grammar-rule">
                  {/*{rule}*/}
                  <h3>{doubleRule[0]}</h3>
                  <p>{doubleRule[1]}</p>
              </div>
              <div className="info-block_button">
                  {/*<button className="button" onClick={() => setRule(*/}
                  {/*    rule = rules[Math.floor((Math.random() * rules.length))])}>Get a rule</button>*/}
                  <button className="button" onClick={() => setDoubleRule(
                      doubleRule = double_rules[Math.floor((Math.random() * doubleRule.length))])}>Get a rule</button>
              </div>
          </div>
          <footer className="App-footer">
            <p className="footer-info">Polin Belousova. 2022</p>
          </footer>
      </div>
      )
}

export default App;
