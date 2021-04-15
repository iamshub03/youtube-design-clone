import './App.css';
import Navbar from './components/topnavbar/Navbar'
import TagsList from './components/tagsection/TagsList'
import Cards from './components/cards/Cards'


function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <TagsList />
      <hr />
      <Cards />
    </div>
  );
}

export default App;
