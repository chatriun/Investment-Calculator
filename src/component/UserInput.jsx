const UserInput = ({ onChange, userInput }) => {
  return (
    <div id="user-input">
      <section className="input-group">
        <p>
          <label htmlFor="input-initial-investment">initial Investment</label>
          <input
            id="input-initial-investment"
            required
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="input-annual-investment">initial Investment</label>
          <input
            id="input-annual-investment"
            required
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </section>
      <section className="input-group">
        <p>
          <label htmlFor="input-expected-return">initial Investment</label>
          <input
            id="input-expected-return"
            required
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="input-duration">initial Investment</label>
          <input
            id="input-duration"
            required
            type="number"
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </section>
    </div>
  );
};

export default UserInput;
