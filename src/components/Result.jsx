import { calculateInvestmentResults, formatter } from "../util/investment.js";

const HEADER_TABLE_LIST = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

const Result = ({ userForm }) => {
  const userInputGroup = calculateInvestmentResults(userForm);

  const initialInvestment =
    userInputGroup[0].valueEndOfYear -
    userInputGroup[0].interest -
    userInputGroup[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          {HEADER_TABLE_LIST.map((list) => (
            <th key={list}>{list}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {userInputGroup.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvestment = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
