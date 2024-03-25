/*

<div id='parent'>
  <div id ="child">
    <h1> I amd using h1 tag</h1>
      <h1> I amd using h1 tag</h1>

  </div>
  <div id ="child2">
    <h1> I amd using h1 tag</h1>
  </div>
</div>

When you need nested tags then tou need [] 

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    [
      React.createElement("h1", {}, "I am using h1 tag"),
      React.createElement("h1", {}, "I am using h1 tag"),
    ],
  ]),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "I am using h1  child2 tag")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root3"));
root.render(parent);

const heading = React.createElement("h1", {}, "Hello world form react ! ");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
