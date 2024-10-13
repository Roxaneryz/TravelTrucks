import { useDispatch, useSelector } from "react-redux"
import css from "./Filter.module.css"
import sliceFilter, { setFilter, setLocation, setType } from "../../redux/filters/slice"
import Checkbox from "../customComponents/Checkbox/Checkbox";
import{selectFilterProps, selectLocation, selectType} from "../../redux/filters/selectors"



const Filter = () => {
  const filterProps = useSelector(selectFilterProps);
  const type = useSelector(selectType);
  const loaction = useSelector(selectLocation);
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
      value: !filterProps[title],
    };
    // const typeObj = {
    //   name: title,
    //   value: !type[title],
    // };
    // const location = {
    //   name: title,
    //   value: location[title],
    // };

    dispatch(setFilter(object));
    // if (filterType === "filter") {
    //   dispatch(setFilter(object));
    // } else if (filterType === "type") {
    //   dispatch(setType(typeObj));
    // } else if (filterType === "location") {
    //   dispatch(setLocation(location));
    // }
  };

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
              isActive={filterProps.Kitchen}
              handleClick={() => handleChange("Kitchen")}
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
              isActive={filterProps.Bathroom}
              handleClick={() => handleChange("Bathroom")}
            />
          </li>
          <li className={css.filterItem}>
            <Checkbox
              title="Gas"
              isActive={filterProps.Gas}
              handleClick={() => handleChange("Gas")}
            />
          </li>
          <li className={css.filterItem}>
            <Checkbox
              title="Radio"
              isActive={filterProps.Radio}
              handleClick={() => handleChange("Radio")}
            />
          </li>
          <li className={css.filterItem}>
            <Checkbox
              title="Microwave"
              isActive={filterProps.Microwave}
              handleClick={() => handleChange("Microwave")}
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
              handleClick={() => handleChange("Van")}
            />
            </li>
          
            <li className={css.filterItem}>
            <Checkbox
              title="Fully Integrated"
              isActive={type.FullyIntegrated}
              handleClick={() => handleChange("Fully Integrated")}
            />
          </li>
         
           <li className={css.filterItem}>
            <Checkbox
              title="Alcove"
              isActive={type.Alcove}
              handleClick={() => handleChange("Alcove")}
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
}
//   <a href="/new-route" target="_blank" rel="noopener noreferrer">
 //   Open new route in new tab
 // </a>

export default Filter