import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-100 py-10 flex gap-5 px-5">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
