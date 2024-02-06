import { useState } from "react";

const HEADER_TABLE_LIST = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

const calculateInvestmentResults = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) => {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const App = () => {
  const [userInput, setUserInput] = useState({});

  const handleInputInitialInvestment = (event) => {
    const inputInitialInv = parseFloat(event.target.value);
    setUserInput((prevInput) => ({
      ...prevInput,
      initialInvestment: inputInitialInv,
    }));
  };
  const handleInputAnnualInvestment = (event) => {
    const inputAnnualInv = parseFloat(event.target.value);
    setUserInput((prevInput) => ({
      ...prevInput,
      annualInvestment: inputAnnualInv,
    }));
  };
  const handleInputExpectReturn = (event) => {
    const inputExpectReturn = parseFloat(event.target.value);
    setUserInput((prevInput) => ({
      ...prevInput,
      expectedReturn: inputExpectReturn,
    }));
  };
  const handleInputDuration = (event) => {
    const inputDuration = parseFloat(event.target.value);
    setUserInput((prevInput) => ({
      ...prevInput,
      duration: inputDuration,
    }));
  };

  const userResultTableHeader = HEADER_TABLE_LIST.map((list) => (
    <th key={list}>{list}</th>
  ));

  const userInputGroup = calculateInvestmentResults(userInput);

  const userResultTableBody = userInputGroup.map((yearData) => (
    <tr key={yearData.year}>
      <td>{yearData.year}</td>
      <td>{formatter.format(yearData.valueEndOfYear)}</td>
      <td>{formatter.format(yearData.interest)}</td>
      <td>{formatter.format(yearData.valueEndOfYear)}</td>
      <td>{formatter.format(yearData.annualInvestment)}</td>
    </tr>
  ));

  return (
    <main>
      <ol id="user-input">
        <li className="input-group">
          <div>
            <label htmlFor="input-initial-inv">initial Investment</label>
            <input
              id="input-initial-inv"
              type="number"
              min="0"
              onChange={handleInputInitialInvestment}
            />
          </div>
          <div>
            <label htmlFor="input-annual-inv">annual Investment</label>
            <input
              id="input-annual-inv"
              type="number"
              min="0"
              onChange={handleInputAnnualInvestment}
            />
          </div>
        </li>
        <li className="input-group">
          <div>
            <label htmlFor="input-expect-return">expected Return</label>
            <input
              id="input-expect-return"
              type="number"
              onChange={handleInputExpectReturn}
            />
          </div>
          <div>
            <label htmlFor="input-duration">duration</label>
            <input
              id="input-duration"
              type="number"
              min="0"
              onChange={handleInputDuration}
            />
          </div>
        </li>
      </ol>
      <table id="result">
        <thead>
          <tr>{userResultTableHeader}</tr>
        </thead>
        <tbody>{userResultTableBody}</tbody>
      </table>
    </main>
  );
};

export default App;
