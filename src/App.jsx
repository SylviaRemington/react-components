import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import FounderListItem from './components/FounderListItem/FounderListItem.jsx';


// Putting this in before App Component
const founders = [
  {
    name: 'Elizabeth Holmes',
    title: 'CEO',
    credential: 'MBA from SuperLegit University',
    id: 1,
  },
  {
    name: 'Sam Bankman-Fried',
    title: 'CFO',
    credential: 'CPA from TotallyReal State',
    id: 2,
  },
  {
    name: 'Matt Damon',
    title: 'CMO',
    credential: 'Was in that movie you saw',
    id: 3,
  },
];


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
        {/* Us of the map array method */}
        {founders.map((founder) => (
          <FounderListItem
            key={founder.id}
            name={founder.name}
            title={founder.title}
          />
        ))}

      </ul>
    </>
  );
};

export default App;
