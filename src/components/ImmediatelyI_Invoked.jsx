import { useState } from 'react';

const ImmediatelyI_Invoked = () => {
    const [marks, setMarks] = useState("");
    return (
        <div>
            <input
        type="number"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      {(() => {
        const numMarks = Number(marks);
        if (numMarks >= 80 && numMarks <= 100) {
          return <h1>A+</h1>;
        } else if (numMarks >= 70 && numMarks < 80) {
          return <h1>A</h1>;
        } else if (numMarks >= 60 && numMarks < 70) {
          return <h1>A-</h1>;
        } else if (numMarks >= 50 && numMarks < 60) {
          return <h1>B</h1>;
        } else if (numMarks >= 40 && numMarks < 50) {
          return <h1>C</h1>;
        } else if (numMarks >= 33 && numMarks < 40) {
          return <h1>D</h1>;
        } else if (marks !== "") {
          return <h1>F</h1>;
        } else {
          return null;
        }
      })()}
        </div>
    );
};

export default ImmediatelyI_Invoked;