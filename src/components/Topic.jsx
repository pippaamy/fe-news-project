import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { useNavigate } from "react-router";

const Topic = ({ chosenTopic, setChosenTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);
  let navigate = useNavigate();

  async function handleChange(event) {
    event.preventDefault();
    await setChosenTopic(event.target.value);
    navigate(`/?topic=${event.target.value}`, { replace: true });
  }

  return (
    <div>
      <select className="dropdown" value={chosenTopic} onChange={handleChange}>
        {topics.map((topics) => {
          return (
            <option key={topics.slug} value={topics.slug}>
              {" "}
              {topics.slug}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Topic;
