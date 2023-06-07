import './App.css';
import Button1 from './components/Button1';
import Toolbar from './components/Toolbar';
import Signup from './components/Signup';
import Counter from './components/Counter';
import ListaTareas from './components/ListaTareas';
import DiceGame from './components/DiceGame';
import Gallery from './components/Gallery';


function App() {

  return (
   <>
    <Button1/>
    <Toolbar
    onPlayMovie={()=> alert ('La película se va a reproducir')}
    onUploadImage={()=> alert ('La imagen se va a cargar')}
    />
<div className='container'>
<Signup/>
<Counter/>
<ListaTareas/>
<DiceGame/>
<Gallery/>
</div>
     </>  
  );

}

export default App;





