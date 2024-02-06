import { calculateInvestmentResults, formatter } from "../util/investment.js";

const HEADER_TABLE_LIST = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

const Result = ({ userInput }) => {
  const userResultTableHeader = HEADER_TABLE_LIST.map((list) => (
    <th key={list}>{list}</th>
  ));

  const userInputGroup = calculateInvestmentResults(userInput);

  const initialInvestment =
    userInputGroup[0].valueEndOfYear -
    userInputGroup[0].interest -
    userInputGroup[0].annualInvestment;

  const userResultTableBody = userInputGroup.map((yearData) => {
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
  });

  return (
    <table id="result">
      <thead>
        <tr>{userResultTableHeader}</tr>
      </thead>
      <tbody>{userResultTableBody}</tbody>
    </table>
  );
};

export default Result;
