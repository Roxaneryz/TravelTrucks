import { useDispatch } from "react-redux"
import css from "./Filter.module.css"
import SliceFilter from "../../redux/filters/slice"




const Filter = () => {

  const dispatch = useDispatch();

  const handlerFilterReset = (e) => {
    const { name, value, checked, type } = e.target;

    const filterValue = type === "checkbox" ? checked : value;

    dispatch( SliceFilter({ name, value:filterValue }) );
  };

  return (
    <div>
      <p>Location</p>
      <select name="location" onchange={handlerFilterReset}>
        <option value="location">{kiev}</option>
</select>
      <p>Filters</p>
      <div>
        <h3>Vehicle equipment</h3>
        <ul>
          <li></li>
        </ul>
</div>
    </div>
  )
}

export default Filter