import styles from "./PresentationsList.module.css";
import presentationsJson from "../assets/presentations.json";

interface Presentation {
  id: number;
  title: string;
  presenter: string;
  date: string;
  time: string;
  dateTime: string;
  location: string;
  description: string;
  slidesUrl: string;
  tags: string[];
}

const presentations: Presentation[] = presentationsJson;

const PresentationsList = () => {
  const date = new Date().toUTCString();

  return (
    <div className={styles.presentationsContainer}>
      <h1>Future presentations</h1>
      <ul>
        {presentations
          .filter((value) => value.dateTime >= date)
          .map((value, index) => (
            <li key={index}>
              <h2>{value.title}</h2>
              <h4>{value.presenter}</h4>
              <span>{value.dateTime}</span>
              <a href={`#presentation-${value.id}`}>See more</a>
            </li>
          ))}
      </ul>
      <h1>{"Past presentations"}</h1>
      <ul>
        {presentations
          .filter((value) => value.dateTime < date)
          .map((value, index) => (
            <li key={index}>
              <h2>{value.title}</h2>
              <h4>{value.presenter}</h4>
              <span>{value.dateTime}</span>
              <a href={`#presentation-${value.id}`}>See more</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PresentationsList;
