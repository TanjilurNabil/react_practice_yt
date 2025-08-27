const logeedStatusBtn = (status) => {
    if (status == true) {
        return <button>Log Out</button>
    }
    else {
        return <button>Login</button>
    }
}

const Conditional_Rendering1 = () => {
    return (
        <div>
            { logeedStatusBtn(true) }
        </div>
    );
};

export default Conditional_Rendering1;