import { useDispatch, useSelector } from "react-redux"
import css from "./Filter.module.css"
import sliceFilter, { setFilter } from "../../redux/filters/slice"
import Checkbox from "../customComponents/Checkbox/Checkbox";
import{selectFilterProps} from "../../redux/filters/selectors"



const Filter = () => {
  const filterProps = useSelector(selectFilterProps);
  const dispatch = useDispatch();

  const handlerFilterReset = (e) => {
    const { name, value, checked, type } = e.target;

    const filterValue = type === "checkbox" ? checked : value;

    dispatch(sliceFilter({ name, value: filterValue }));
    
  };
  
    const handleSearchClick = () => {
      if (onSearch) {
        onSearch();
      }
    };

  const handleChange = (title) => {
    const object = {
      name: title,
      value:!filterProps[title]
    }
    dispatch(setFilter(object));
  }
  
  return (
    <div>
      <p>Location</p>
      <select name="location" onChange={handlerFilterReset}>
        <option value="location">{}</option>
      </select>
      <p>Filters</p>
      <div>
        <h3>Vehicle equipment</h3>
        <ul>
          <li>
            <Checkbox title="AC" isActive={filterProps.AC} handleClick={()=>handleChange("AC")}/>
          </li>
          <li>
            <p>Automatic</p>
            <label>
              <input
                type="checkbox"
                name="Automatic"
                onChange={handlerFilterReset}
              ></input>
            </label>
          </li>
          <li>
            <p>Kitchen</p>
            <label>
              <input
                type="checkbox"
                name="Kitchen"
                onChange={handlerFilterReset}
              ></input>
            </label>
          </li>
          <li>
            <p>Tv</p>
            <label>
              <input
                type="checkbox"
                name="TV"
                onChange={handlerFilterReset}
              ></input>
            </label>
          </li>
          <li>
            <p>Bahtroom</p>
            <label>
              <input
                type="checkbox"
                name="Bathroom"
                onChange={handlerFilterReset}
              ></input>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h3>Vehicle type</h3>
        <ul>
          <li>
            <p>Van</p>
            <label>
              <input
                type="checkbox"
                name="Van"
                onChange={handlerFilterReset}
              ></input>
            </label>
          </li>
          <li>
            <p>Fully Integrated</p>
            <label>
              <input
                type="checkbox"
                name="Fully Integrated"
                onChange={handlerFilterReset}
              ></input>
            </label>
          </li>
          <li>
            <p>Alcove</p>
            <label>
              <input
                type="checkbox"
                name="Alcove"
                onChange={handlerFilterReset}
              ></input>
            </label>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className={css.search}
        onClick={(handleSearchClick, handlerFilterReset)}
      >
        Search
      </button>
    </div>
  );
  }
//   <a href="/new-route" target="_blank" rel="noopener noreferrer">
 //   Open new route in new tab
 // </a>

export default Filter