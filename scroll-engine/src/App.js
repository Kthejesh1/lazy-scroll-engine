import logo from './logo.svg';
import './App.css';
import InfiniteScroll from './components/scroll/scroll';
import DynamicGrid from './components/grid/dynamicGrid';
import FlipComponent from './components/flipCard';
import DragNDrop from './components/dragndrop';

function App() {
  return (
    <div className="App">
      {/* <InfiniteScroll /> */}
      {/* <DynamicGrid size={5} /> */}
      {/* <FlipComponent /> */}
      <DragNDrop />
    </div>
  );
}

export default App;
