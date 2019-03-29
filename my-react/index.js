class List extends React.Component {
  render() {
    return React.createElement(
      "ul",
      null,
      React.createElement("li", null, "1"),
      React.createElement("li", null, "2"),
      React.createElement("li", null, "3"),
      React.createElement("li", null, "4"),
    );
  }
}

ReactDOM.render(
  React.createElement("div", null, React.createElement(List)),
  document.getElementById("app")
);
