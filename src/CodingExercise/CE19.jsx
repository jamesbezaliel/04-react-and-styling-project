// import React from "react";

// // don't change the Component name "App"
// export default function App() {
//   const [color, setColor] = React.useState("white");

//   function handleClickButton() {
//     setColor("red");
//   }

//   return (
//     <div>
//       <p style={{ color: color }}>Style me!</p>
//       <button onClick={handleClickButton}>Toggle style</button>
//     </div>
//   );
// }

// kunci jawaban
import React from "react";

// don't change the Component name "App"
export default function App() {
  const [highlighted, setHighlighted] = React.useState(false);

  function clickHandler() {
    setHighlighted((isHighlighted) => !isHighlighted);
  }

  return (
    <div>
      <p style={{ color: highlighted ? "red" : "white" }}>Style me!</p>
      <button onClick={clickHandler}>Toggle style</button>
    </div>
  );
}
