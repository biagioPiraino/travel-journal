import './App.css';
import Header from "../shared/components/layout/Header"
import JournalEntry from "../components/entry/JournalEntry"
import data from "../components/data/TravelData"

function App() {

  const travelData = data.map(
    x => 
    <div>
      <JournalEntry item={x}/>
    </div>
  )

  return (
    <div className="App">
      <Header />
      {travelData}
    </div>
  );
}

export default App;
