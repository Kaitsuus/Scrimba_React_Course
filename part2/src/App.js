
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'


const cards = data.map(item =>{
  return(
    <Card
    key={item.id}
    {...item}
  />
  )
})
function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
