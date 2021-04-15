import React from "react";
import { connect } from "react-redux";

const App = ({ buttonClickEvent, boredActivity, loading }) => (
  <div>
    <h1>Search Page</h1>
    {loading.toString()}
    {loading && <p>SEARCHING....</p>}
    <h2>
      <input />
      <button onClick={buttonClickEvent}>Search</button>{" "}
    </h2>

    <h3>Activity Name</h3>
    <p>{boredActivity.name}</p>
    <h3>Type</h3>
    <p>{boredActivity.type}</p>
  </div>
);

const mapState = (store) => ({
  loading: store.counter.loading,
  boredActivity: store.counter.activity
});

const mapDispatch = (store) => ({
  buttonClickEvent: store.counter.asyncIncrement
});

export default connect(mapState, mapDispatch)(App);
