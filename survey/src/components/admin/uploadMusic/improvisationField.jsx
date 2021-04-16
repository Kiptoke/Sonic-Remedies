const ImprovisationField = ({ setBoxTicked }) => {
  return (
    <div className="improvisation-field">
      <label>Improvisation over 50%?</label>
      <div className="improvisation-option">
        <label for="improv-yes">Yes</label>
        <input
          type="radio"
          id="improv-yes"
          name="improvisation"
          value={true}
          onInput={() => setBoxTicked(true)}
        />
      </div>
      <div className="improvisation-option">
        <label for="improv-no">No</label>
        <input
          type="radio"
          id="improv-no"
          name="improvisation"
          value={false}
          onInput={() => setBoxTicked(true)}
        />
      </div>
    </div>
  );
};

export default ImprovisationField;
