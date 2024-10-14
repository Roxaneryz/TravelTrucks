import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import sliceFilter, {
  setFilter,
  setLocation,
  setType,
} from "../../redux/filters/slice";
import Checkbox from "../customComponents/Checkbox/Checkbox";
import {
  selectFilterProps,
  selectLocation,
  selectType,
} from "../../redux/filters/selectors";

const Filter = () => {
  const filterProps = useSelector(selectFilterProps);
    const type = useSelector(selectType);
    const location = useSelector(selectLocation);

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

  const handleChange = (title, filterType="filter") => {
    
  

  
      if (filterType === "filter") {
        
          const object = {
            name: title,
            value: !filterProps[title],
          };
          
      dispatch(setFilter(object));
      } else if (filterType === "type") {
          
          const object = {
            name: title,
            value: !type[title],
          };
          
      dispatch(setType(object));
    } else if (filterType === "location") {
      dispatch(setLocation(type));
    }
  };

  return (
    <div>
      <p>Location</p>
     <input value={location} type="text"onChange={(e)=>handleChange(e.target.value, "location")} />
     
      <p>Filters</p>
      <div>
        <h3>Vehicle equipment</h3>
        <ul>
          <li className={css.filterItem}>
            <Checkbox
              title="AC"
              isActive={filterProps.AC}
              handleClick={() => handleChange("AC")}
            />
          </li>
          <li className={css.filterItem}>
            <Checkbox
              title="Automatic"
              isActive={filterProps.Automatic}
              handleClick={() => handleChange("Automatic")}
            />
          </li>
          <li className={css.filterItem}>
            <Checkbox
              title="Kitchen"
              isActive={filterProps.kitchen}
              handleClick={() => handleChange("kitchen")}
            />
          </li>

          <li className={css.filterItem}>
            <Checkbox
              title="Tv"
              isActive={filterProps.Tv}
              handleClick={() => handleChange("Tv")}
            />
          </li>
          <li className={css.filterItem}>
            <Checkbox
              title="Bathroom"
              isActive={filterProps.bathroom}
              handleClick={() => handleChange("bathroom")}
            />
          </li>
          <li className={css.filterItem}>
            <Checkbox
              title="Gas"
              isActive={filterProps.gas}
              handleClick={() => handleChange("gas")}
            />
          </li>
          <li className={css.filterItem}>
            <Checkbox
              title="Radio"
              isActive={filterProps.radio}
              handleClick={() => handleChange("radio")}
            />
          </li>
          <li className={css.filterItem}>
            <Checkbox
              title="Microwave"
              isActive={filterProps.microwave}
              handleClick={() => handleChange("microwave")}
            />
          </li>
        </ul>
      </div>
      <div>
        <h3>Vehicle type</h3>
        <ul>
          <li className={css.filterItem}>
            <Checkbox
              title="Van"
              isActive={type.Van}
              handleClick={() => handleChange("Van","type")}
            />
          </li>

          <li className={css.filterItem}>
            <Checkbox
              title="Fully Integrated"
              isActive={type.FullyIntegrated}
              handleClick={() => handleChange("FullyIntegrated", "type")}
            />
          </li>

          <li className={css.filterItem}>
            <Checkbox
              title="Alcove"
              isActive={type.Alcove}
              handleClick={() => handleChange("Alcove", "type")}
            />
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
};
//   <a href="/new-route" target="_blank" rel="noopener noreferrer">
//   Open new route in new tab
// </a>

export default Filter;
