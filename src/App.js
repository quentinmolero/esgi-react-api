import { useEffect, useState } from 'react';
import Error404 from './components/error/Error404';
import Home from './components/Home';
import JokesMainView from './components/jokes/JokesMainView';
import TeleportMainView from './components/teleport/TeleportMainView';

function App() {
  const [currentPage, setCurrentPage] = useState();
  
  useEffect(() => {
    const evaluateLocation = () => {
      if (window.location.pathname === '/') {
        setCurrentPage(<Home />);
      } else if (window.location.pathname === '/teleport') {
        setCurrentPage(<TeleportMainView />);
      } else if (window.location.pathname === '/jokes') {
        setCurrentPage(<JokesMainView />);
      } else {
        setCurrentPage(<Error404 />);
      }
    }

    evaluateLocation();
  }, [window.location.pathname]);

  return (
    <div className="App">
      {currentPage}
    </div>
  );
}

export default App;
