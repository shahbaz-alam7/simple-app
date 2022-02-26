import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="error container">
        <h1>Error</h1>
        <p>Sorry, this page doesn't exist.</p>
        <NavLink to="/">Go to Home</NavLink>
      </div>
    </>
  );
};

export default Error;
