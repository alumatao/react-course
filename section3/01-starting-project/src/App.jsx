import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <header>
        <h1>Hello World</h1>
      </header>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>  
    </>
  );
}

export default App;
