import './App.css';
import Items from './components/Items';


const items = [
  {
      item: 'Beer',
      brand: 'Budwiser',
      units: '12pk',
      quantity: 2,
      isPurchased: false
    },
    {
      item: 'Soda',
      brand: 'Pepsi',
      units: '2lt',
      quantity: 7,
      isPurchased: false
    },
    {
      item: 'Cookie',
      brand: 'Oreo',
      units: '12pk',
      quantity: 4,
      isPurchased: false
    }
]

function App() {
  return (
    <div className="App">
      <Items items={this.items} />
    </div>
  );
}

export default App;
