import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Budget App</h1>
      <h2>Budget: 1200</h2>
      <div className="links">
        <Link to="/">Expense List</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f20d0d',
          borderRadius: '8px' 
        }}>New Expense</Link>
      </div>
    </nav>
  )
}
 
export default Navbar;