import ExpenseList from "./ExpenseList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: expenses } = useFetch('http://localhost:8000/expenses')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { expenses && <ExpenseList blogs={expenses} /> }
    </div>
  );
}
 
export default Home;