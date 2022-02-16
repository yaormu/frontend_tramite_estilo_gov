import React, {useState} from "react";
import "./Dropdown.css"

const Dropdown = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false)
  const options = ['React', 'Vue', 'Angular']

  return ( 
    <div className="dropdown">
      <div className="dropdwon-btn" onClick={(e) => setIsActive(!isActive)}>
        Choose One
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdwon-content">
          {options.map((option) => (
              <div 
                onClick={(e) => {
                  setSelected(option)
                  setIsActive(false)
              }}
              className="dropdown-item"
              >
              {option}
              </div>
            ))}
        </div>
      )}
    </div>
   );
}
 
export default Dropdown