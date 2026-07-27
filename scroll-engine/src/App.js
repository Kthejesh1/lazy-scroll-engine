import logo from './logo.svg';
import './App.css';
import InfiniteScroll from './components/scroll/scroll';
import DynamicGrid from './components/grid/dynamicGrid';
import FlipComponent from './components/flipCard';
import DragNDrop from './components/dragndrop';
import Sidebar from './components/sidebar';
import { data } from './components/sidebar/mock';
import DotAnimation from './components/dotanim';

import AddDotOnClick from './components/cursor';
import DotHighlight from './components/cursor/cursorHighlight';
import OTP from './components/otp';
import CursorWrite from './components/cursor/write';

function App() {
  return (
    <div className="App">
      {/* <CursorWrite /> */}
      <OTP />
      {/* <DotHighlight /> */}
      {/* <AddDotOnClick /> */}
      {/* <InfiniteScroll /> */}
      {/* <DynamicGrid size={3} /> */}
      {/* <FlipComponent /> */}
      {/* <DragNDrop /> */}
      {/* <Sidebar data={data}/> */}
      {/* <DotAnimation /> */}
    </div>
  );
}

export default App;


// Todos
// 2) useCopyToClipboard hook
// 3) Text to Audio
// 4) Write with cursor game
// 5) Build an autocomplete
// 6) Google calender clone
// 7) Audio recorder