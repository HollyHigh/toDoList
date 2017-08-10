var React = require('react');



var List = function(props){
  const items = props.items.map((item, index) =>
    (<li key={index}>
      {item}
    </li>)
  );

  return (<div>
    <ul>{items}</ul>
    <input type="text" value={props.inputValue} onChange={props.handleInputChange}/>
    <button onClick={props.handleOnClick}>Add a todo item</button>
  </div>);
}

module.exports = List;
