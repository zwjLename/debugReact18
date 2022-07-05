import { React, createRoot,ReactDOM } from "./whichReact";
import "./index.css";
// import SetStatePage from "./pages/SetStatePage";
import DiffPage from "./pages/DiffPage";
import jsx from "./pages/ExamplePage";
import SuspensePage from "./pages/SuspensePage";
// import NewHookApi from "./pages/NewHookApi";
import App from "./App";


// ReactDOM.render(<SetStatePage />, document.getElementById("root"));

// ReactDOM.render(<DiffPage />, document.getElementById("root"));

// createRoot(document.getElementById("root")).render(<App />);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <UseDeferredValuePage />
// );
function SetStatePage(props) {
    const [ count, setCount ] = React.useState(-1);
  
    React.useEffect(() => {
      setCount(0)
    });
  
    console.log("x", count); //sy-log
  
    return (
      <div>
        <h3>SetStatePage</h3>
      </div>
    );
  }
  
  const root = createRoot(document.getElementById("root"));
  
  root.render(<SetStatePage />);


console.log("React.......", React.version, root); //sy-log
