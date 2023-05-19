const Languageoption = (props) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <select onChange={props.onChange}>
        {/* <option>Select Language</option> */}
        <option value="en">English</option>
        <option value="ur">Urdu</option>
        <option value="ko">Korean</option>
        <option value="chi">Chinese</option>
      </select>
    </div>
  );
};
export default Languageoption;
