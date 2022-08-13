import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';


render(
<Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//  function q(){
//   const [count, setCount] = useState(0);
//    return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         {count}
//       </button>
//     </div>
//   );
//  }

// //api de react
// function JsxComponent() {
//   return (
//     <div>
//       Hola HTML
//       <input />
//       <pre key="">{new Date().toLocaleTimeString()}</pre>
//     </div>
//   );
// }

// //Es una arrow function
// const TimerRender = () => {
//   //aquí el api de html
//   document.getElementById("root").innerHTML = `
//      <div>
//      Hola HTML
//      <input/>
//      <pre>${new Date().toLocaleTimeString()}</pre>
//      </div>
//      `;

//   //aquí hacemos lo mismo solo que con el api de React con el componente
//   render(<JsxComponent />, document.getElementById("react-root"));
// };

// setInterval(TimerRender, 1000);
