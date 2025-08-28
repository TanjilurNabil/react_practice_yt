
const Conditional_Rendering_Logical = () => {
    const isLoggedIn = false; // Change this value to test different states
    return (
        <div>
            <h1>Login Status</h1>
            {isLoggedIn && <button>Log Out</button>}
        </div>
    );
};

export default Conditional_Rendering_Logical;