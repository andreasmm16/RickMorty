export default function TextBox(props) {
  return (
    <div className="mb-3 row">
      <label htmlFor={props.id} className="col-sm-2 col-form-label">
        {props.labelName}
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          name={props.id}
          id={props.id}
          value={props.valueUX}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
//el value permite que ya se le asgine un valor al input
