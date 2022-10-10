import { useNavigate } from "react-router-dom";

const Sorting = ({ setSort, sort, ord, setOrd }) => {
  let navigate = useNavigate();

  function handleChange(event) {
    event.preventDefault();
    setSort(event.target.value);
    navigate(`/?sortby=${event.target.value}`, { replace: true });
  }

  function handleOrder(event) {
    event.preventDefault();
    setOrd(event.target.value);
    navigate(`/?order=${event.target.value}`, { replace: true });
  }
  return (
    <div>
      <select className="sortby" value={sort} onChange={handleChange}>
        <option value="author">Author</option>
        <option value="created_at">Date</option>
        <option value="title">Title</option>
        {/* <option>comment_count</option> */}
        <option value="votes">Votes</option>
      </select>
      <select className="order" value={ord} onChange={handleOrder}>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </div>
  );
};

export default Sorting;
