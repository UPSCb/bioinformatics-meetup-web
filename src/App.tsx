// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import PresentationsList from "./components/PresentationsList";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

const navItems = ["About", "Schedule", "Members", "Talks"];

const App = () => {
  return (
    <>
      <nav>
        <span>UPSC Bioinformatics Meetup</span>
        {navItems.map((value, index) => (
          <a href={`#${value}`} key={index}>
            {value}
          </a>
        ))}
      </nav>
      <main>
        <div id="About">
          <h2>About</h2>
          <p>Here we write something about the meetup</p>
        </div>
        <div id="About">
          <h2>About</h2>
          <p>Here we write something about the meetup</p>
        </div>

        <div id="Schedule">
          <h2>Schedule</h2>
          <PresentationsList />
        </div>

        <div id="Members">
          <h2>Members</h2>
          Component for the list of members
        </div>
      </main>
      <footer>Here is my foot</footer>
    </>
  );
};

export default App;
