import { useState } from "react";

const Conditional_Rendering_Ternary = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const handleDropdownChange = (event) => {
        setIsLoggedIn(event.target.value === 'true');
    }
    return (
        <div>
            <label htmlFor="login-status">Login Status:</label>
            <select id="login-status" onChange={handleDropdownChange}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            {isLoggedIn ? <button>Log Out</button>
           : <button>Log In</button>} 
        </div>
    );
};

export default Conditional_Rendering_Ternary;