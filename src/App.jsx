import Conditional_Rendering1 from './components/Conditional_Rendering1';
import Conditional_Rendering_Logical from './components/Conditional_Rendering_Logical';
import Conditional_Rendering_Sw from './components/Conditional_Rendering_Sw';
import Conditional_Rendering_Ternary from './components/Conditional_Rendering_Ternary';
import ImmediatelyI_Invoked from "./components/ImmediatelyI_Invoked";
import Loop_inside from "./components/Loop_inside";
const App = () => {
  return (
    <div className="d-flex">
      <div className="col-4 g-4">
        <h3>ImmediatelyI_Invoked</h3>
        <ImmediatelyI_Invoked/>
      </div>
      <div className="col-4 g-4">
        <h3>Loop_inside</h3>
        <Loop_inside/>
      </div>
      <div className="col-4 g-4">
        <h3>Conditional Rendering with Function</h3>
        <Conditional_Rendering1/>
      </div>
      <div className="col-4 g-4">
        <h3>Conditional Rendering with Switch</h3>
        <Conditional_Rendering_Sw/>
      </div>
      <div className="col-4 g-4">
        <h3>Conditional Rendering with Ternary</h3>
        <Conditional_Rendering_Ternary/>
      </div>
      <div className="col-4 g-4">
        <h3>Conditional Rendering with Logical &&</h3>
        <Conditional_Rendering_Logical/>
      </div>
        
      
    </div>
  );
};

export default App;