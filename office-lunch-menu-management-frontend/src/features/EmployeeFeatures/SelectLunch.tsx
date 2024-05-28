import axios from "axios";
import { useState } from "react";
import "../../styles/EmployeeStyles.css";
import { useUser } from "../../contexts/UserContext";

interface MenuOption {
  date: string;
  options: string[];
}

interface SelectLunchProps {
  menu: MenuOption | null;
}

const SelectLunch: React.FC<SelectLunchProps> = ({ menu }) => {
  const [choices, setChoices] = useState<string[]>([]);
  const { user } = useUser();

  const handleCheckboxChange = (option: string) => {
    if (choices.includes(option)) {
      setChoices(choices.filter((item) => item !== option));
    } else {
      setChoices([...choices, option]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (choices.length === 0) {
      alert("Please select at least one lunch option.");
      return;
    }
    const choiceData = {
      employeeName: user?.name,
      date: menu?.date,
      choices: choices.slice(),
    };
    axios.post("http://localhost:3000/api/choices", choiceData).then((res) => {
      if (res.status === 201) {
        alert(
          `Thank you, ${user?.name.trim()}! You have selected ${choices.join(
            ", "
          )} for lunch.`
        );
      }
    });
    setChoices([]);
  };

  return (
    <div className="select-lunch">
      <h2>Select Your Lunch</h2>
      {menu ? (
        <form className="today-menu-container" onSubmit={handleSubmit}>
          <div>
            <h3>{new Date(menu.date).toDateString()}</h3>
            <div className="emp-name-inputs">
              <label>Employee email: {user?.name}</label>
            </div>
            <ul>
              {menu.options.map((option) => (
                <li
                  className="today-menu-item"
                  key={option}
                  style={{ display: "flex" }}
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={choices.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <label>{option}</label>
                </li>
              ))}
            </ul>
          </div>
          <button className="select-lunch-btn" type="submit">
            Add Choice
          </button>
        </form>
      ) : (
        <p>No menu available for today.</p>
      )}
    </div>
  );
};

export default SelectLunch;
