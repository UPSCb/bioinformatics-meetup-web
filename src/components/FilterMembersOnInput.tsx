import { useState } from "react";
import membersJson from "../assets/members.json";

interface Member {
  id: number;
  firstName: string;
  lastName: string;
  initials: string;
  description: string;
  interests: string[];
}

const members: Member[] = membersJson;

const MembersList = () => {
  const [inputText, setInputText] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
          console.log(inputText);
        }}
      />
      <h2>Members list</h2>
      <ul>
        {members
          .filter((value) => value.interests.some((interest) => interest.toLowerCase().includes(inputText.toLowerCase())))
          .map((value, index) => (
            <li key={index}>
              <h3>
                {value.firstName} {value.lastName}
              </h3>
              <h4>{value.description}</h4>
              <ul>
                {value.interests.map((value2, index2) => (
                  <li key={index2}>
                    <h5>{value2}</h5>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MembersList;
