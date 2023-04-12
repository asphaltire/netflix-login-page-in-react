import './App.css';
import {Logo,Body,Background} from './components';


function App() {
  return (
    <div className="main">
      <Background/>
      <Logo/>
      <Body/>
      <p>Footer</p>
    </div>
  );
}
      
export default App;