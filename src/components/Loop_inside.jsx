const Loop_inside = () => {
    const city = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barishal", "Sylhet", "Rangpur", "Mymensingh"];
    return (
        <div>
            <ul>
{
                city.map((item, i) => {
                    return <li key={i.toString()}>{ item}</li>
                })
            }
            </ul>
        </div>
    );
};
export default Loop_inside;