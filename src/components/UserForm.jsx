const UserForm = ({ onChange, userForm }) => {
  return (
    <div id="user-input">
      <section className="input-group">
        <div>
          <label htmlFor="input-initial-investment">initial Investment</label>
          <input
            id="input-initial-investment"
            required
            type="number"
            value={userForm.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="input-annual-investment">initial Investment</label>
          <input
            id="input-annual-investment"
            required
            type="number"
            value={userForm.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </div>
      </section>
      <section className="input-group">
        <div>
          <label htmlFor="input-expected-return">initial Investment</label>
          <input
            id="input-expected-return"
            required
            type="number"
            value={userForm.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-duration">initial Investment</label>
          <input
            id="input-duration"
            required
            type="number"
            value={userForm.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </div>
      </section>
    </div>
  );
};

export default UserForm;
