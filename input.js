let connection;

//eventhandler manages the event that happens in this case its key binding 'w''a's''d' and ASCII for Ctrl+C
const handleUserInput =  (data) => { 
    if (data === '\u0003'){  //'\u0003' = CTRL+C
    process.exit();
  }
  if (data === 'w') { 
    connection.write('Move: up');
    console.log("up was pressed: ", data) 
  }
  if (data === 'a') {
    connection.write('Move: left');
    console.log("left was pressed: ", data)
  }
  if (data === 's') {
    connection.write('Move: down');
    console.log("down was pressed: ", data)
  }
  if (data === 'd') {
    connection.write('Move: right');
    console.log("right was pressed: ", data)
  }
};

const setupInput = function (conn) {
  connection = conn;
  // setup interface to handle user input from stdin
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();    
    
    //eventlistener awaits for the event to fire
    stdin.on("data", handleUserInput); //.on is the eventListener, data is the specific event listening for and handleUserInput is the invocation of the eventHandler, which ONLY gets invoked when event fires. 
    return stdin;
  };

  module.exports = {setupInput}