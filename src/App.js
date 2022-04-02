
import './App.css';
import Nav from './component.js/Nav';
import TextForm from './component.js/TextForm';

function App() {
  return (
    <>
<Nav titel="MyNav" aboutUS="AboutUs"/>
<div className="container my-3">
<TextForm heading="Enter Your text"/>
</div>
    </>
  );
}

export default App;
