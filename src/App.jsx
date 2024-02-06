import { useState } from "react";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Result from "./component/Result";

const HEADER_TABLE_LIST = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

const INITIAL_USER_INPUT = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

const App = () => {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);

  const isValid = userInput.duration >= 1;
  const handleInputChange = (keyUserInput, newInput) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [keyUserInput]: +newInput,
    }));
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleInputChange} userInput={userInput} />
      {!isValid && (
        <p className="center">please enter a duration greater than zero.</p>
      )}
      {isValid && <Result userInput={userInput} />}
    </>
  );
};

export default App;
