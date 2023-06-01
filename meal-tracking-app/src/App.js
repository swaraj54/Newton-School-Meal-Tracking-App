import logo from './logo.svg';
import './App.css';
import Meals from './components/Meals';
import Counter from './components/Counter';
import { MealProvider } from './context/mealContext';

function App() {
  return (
    <MealProvider>
      <div className="App">
        Meals :
        <Meals />
        <Counter />
      </div>
    </MealProvider>
  );
}

export default App;
