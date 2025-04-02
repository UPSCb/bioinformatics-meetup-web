import styles from "./PresentationsList.module.css";
import presentationsJson from "../assets/presentations.json";

interface Presentation {
  id: number;
  title: string;
  presenter: string;
  date: string;
  time: string;
  location: string;
  description: string;
  slidesUrl: string;
  tags: string[];
}

const presentations: Presentation[] = presentationsJson;

const PresentationsList = () => {
  return (
    <div className={styles.presentationsContainer}>
      <ul>
        {presentations.map((value, index) => (
          <li key={index}>
            <h2>{value.title}</h2>
            <h4>{value.presenter}</h4>
            <span>
              {value.date} {value.time}
            </span>
            <a href={`#presentation-${value.id}`}>See more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PresentationsList;
