import './App.css';
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
import Com from './components/com'
import Com1 from './components/com1'
import Com2 from './components/com2'



function App() {
  return (
    <div>
      <BrowserRouter basename={'/'}>

        <Route path="/" exact render={() => <Com></Com>} />
        <Route path="/r1/" render={() => <Com1></Com1>} />
        <Route path="/r2/" render={() => <Com2></Com2>} />


        <a href="https://reacttestsite1.netlify.app/" style={{ color: "white" }}><div className="go-to-sub-site">go to main site</div></a>

        <div className="links-conatiner">
          <Link style={{ color: "white" }} to="/"><span className="links">Subsite Route /</span></Link>
          <Link style={{ color: "white" }} to="/r1"><span className="links">Subsite Route /r1</span></Link>
          <Link style={{ color: "white" }} to="/r2"><span className="links">Subsite Route /r2</span></Link>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
