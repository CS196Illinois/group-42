import { Link } from 'react-router-dom';

const ExpenseList = ({ blogs }) => {
  return (
    <div className="expense-list">
      {blogs.map(blog => (
        <div className="expense-preview" key={blogs.id} >
          <Link to={`/blogs/${blogs.id}`}>
            <h2>-${ blog.amount }</h2>
            <p>Description: { blog.reason }</p>
            <p>Category: { blog.category }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ExpenseList;