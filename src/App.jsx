import { useState } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import Result from "./components/Result";

const INITIAL_USER_FORM = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

const App = () => {
  const [userForm, setUserForm] = useState(INITIAL_USER_FORM);

  const isValid = userForm.duration >= 1;
  const handleFormChange = (keyUserInput, newInput) => {
    setUserForm((prevInput) => ({
      ...prevInput,
      [keyUserInput]: parseFloat(newInput),
    }));
  };

  return (
    <>
      <Header />
      <UserForm onChange={handleFormChange} userForm={userForm} />
      {isValid ? (
        <Result userForm={userForm} />
      ) : (
        <p className="center">please enter a duration greater than zero.</p>
      )}
    </>
  );
};

export default App;
