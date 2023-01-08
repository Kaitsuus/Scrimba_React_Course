import Header from './components/Header';
import Card from './components/Card';
import Data from './Data'
import './App.css';

const cards = Data.map(item =>{
  return(
    <Card
    key={item.id}
    {...item}
    />
  )
})

function App() {
  return (
    <div className="App">
        <Header />
        <section className='cards'>
          {cards}
        </section>
    </div>
  );
}

export default App;
