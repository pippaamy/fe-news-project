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
        <option>author</option>
        {/* <option>created_at</option> */}
        <option>title</option>
        {/* <option>comment_count</option> */}
        <option>votes</option>
      </select>
      <select className="order" value={ord} onChange={handleOrder}>
        <option>ASC</option>
        <option>DESC</option>
      </select>
    </div>
  );
};

export default Sorting;
