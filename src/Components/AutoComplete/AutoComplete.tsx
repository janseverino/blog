import React, { ChangeEvent, useState } from "react";
import { Option } from "../../Types/types";
import "./style.css";

type AutoCompleteProps = {
  classes?: string;
  options?: Option[];
  placeholder: string;
  onChange: (value: string) => void;
};

const AutoComplete = ({
  classes,
  options = [],
  placeholder,
  onChange,
}: AutoCompleteProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchValue, setSerachValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setSerachValue(value);
    if (onChange && typeof onChange === "function") onChange(value);
  };

  const handleFocus = () => {
    setIsFocus(true);
    onChange("");
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
      setSerachValue("");
    }, 200);
  };

  return (
    <div className={`col-12 ${classes}`}>
      <div>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="form-control"
          type="search"
          aria-label={placeholder}
          value={searchValue}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value)
          }
        />
      </div>
      {isFocus && (
        <ul className="search-box">
          {options.length === 0 ? (
            <li>Not options</li>
          ) : (
            options.map((item) => (
              <li className="col-12" onClick={item.onClick} key={item.value}>
                <div className="row">
                  <div className="col-2">
                      {item.img && <img width={'100%'} src={item.img} alt={item.value} />} 
                  </div>
                  <div className="col-10">
                      {item.key}
                  </div>   
                </div>               
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
