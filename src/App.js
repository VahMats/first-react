import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div>
      <div className = "header">
        <div className = "getcard">
          <p className = "credit">Get Credit Card Dept Help</p>
          <p className = "from">From America's top debt relief company</p>
          <div className = "choose">
            <p className = "yourch">Choose your debt amount</p>
            <p className = "cash">$25,000</p>
          <div>
            <input className = "money" type="range" name="volume" min="0" max="110"></input>
          </div>
            <div className = "cash2">
              <p>$1,000</p>
              <p>$100,000+</p>
            </div>
            <div className = "bott">Continue</div>
            <p className = "talk">or Talk to a Certified Debt consultant <span>800-910-0065</span></p>
          </div>
        </div>
      </div>
      <div className = "text">
          <p>Credit card debt relief</p>
          <p>Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum   has been</p>
          <p>-Andrea, from FDA</p>
        </div>
      <div className = "footer">
        <div className = "column">
          <div className = "circle"></div>
          <p>Over <span>650.000</span> clients enrelled</p>
        </div>
        <div className = "column">
          <div className = "circle"></div>
          <p>Free <span>no-risk</span> credit card debt relief consultation</p>
        </div>
        <div className = "column">
          <div className = "circle"></div>
          <p>Over <span>$10 billion</span> debt resolved since 2002</p>
        </div>
      </div>

    </div>
  );
}

export default App;
