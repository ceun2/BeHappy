import './App.css';
import './components/Header';
import Diary from './components/Diary';
import Header from './components/Header';
import History from './components/History';
import Calendar from './components/Calendar';

function App() {
  return (
    <div>
      <Header></Header>
      <div id="main">
        <div id="left">
          <Calendar></Calendar>
          <History></History>
        </div>
        <Diary></Diary>
      </div>
    </div>
  );
}

export default App;
