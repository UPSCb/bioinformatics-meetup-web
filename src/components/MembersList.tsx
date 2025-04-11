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
  return (
    <div>
      <h2>Members list</h2>
      <ul>
        {members.map((value, index) => (
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
