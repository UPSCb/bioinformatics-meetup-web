import "./App.css";
import MembersList from "./components/MembersList";
import PresentationsList from "./components/PresentationsList";

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
          <MembersList />
        </div>
      </main>
      <footer>Here is my foot</footer>
    </>
  );
};

export default App;
