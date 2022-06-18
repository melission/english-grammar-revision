import book from './book-vector.png'
import rules from './rules.js'
import './App.css';
import {useState} from "react";

function App() {

    let [rule, setRule] = useState(rules[Math.floor((Math.random() * rules.length))]);

  return (
      <div  className="App">
          <header className="App-header">
              <img src={book} className="App-logo" alt="book image"/>
          </header>

          <div className="App-info_block">
              <div className="info-block_grammar-rule">
                  {rule}

              </div>
              <div className="info-block_button">
                  <button className="button" onClick={() => setRule(
                      rule = rules[Math.floor((Math.random() * rules.length))])}>Get a rule</button>
              </div>
          </div>
          <footer className="App-footer">
            <p className="footer-info">Polin Belousova. 2022</p>
          </footer>
      </div>
      )
}

export default App;
