import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import FounderListItem from './components/FounderListItem/FounderListItem.jsx';
// ! stopped at "Passing Data with Props" - start here

const App = () => {
  return (
    <>
      {/* One way to add Navbar below */}
      {/* <Navbar></Navbar> */}
      {/* Second way to add Navbar below with self-closing tag - especially if no child elements.
      If child element, then the convention of <Navbar></Navbar> is better. */}
      <Navbar />
      <main>
        <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>
      </main>
      <h2>Our Founders</h2>
      <ul>
        <FounderListItem/>
        <li>
          <h3>Sam Bankman-Fried: CFO</h3>
          <p>CPA from TotallyReal State</p>
        </li>
        <li>
          <h3>Matt Damon: CMO</h3>
          <p>Was in that Movie You saw</p>
        </li>
      </ul>
    </>
  );
};

export default App;


// Splitting Nav Section Into A Component
