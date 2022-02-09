import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Bob" } lastName={ "Karn" } age={ 42 } hairColor={ "Blond" } />
      <PersonCard firstName={ "Steve" } lastName={ "Plank" } age={ 38 } hairColor={ "Brown" } />
      <PersonCard firstName={ "Jane" } lastName={ "Doe" } age={ 23 } hairColor={ "Black" } />
      <PersonCard firstName={ "Liv" } lastName={ "Moore" } age={ 32 } hairColor={ "Blond" } />
    </div>
  );
}

export default App;
