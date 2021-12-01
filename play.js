const {connect} = require("./client")


let connection;

const setupInput = function (conn) {
  connection = conn;
  // setup interface to handle user input from stdin
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
  
    stdin.on("data", handleUserInput);
    const handleUserInput =  (key) => {
      if (key === '\u0003'){  //'\u0003' = CTRL+C
        process.exit();
      }
      if (key === '\u0077') {
        connection.write('Move: up');
      }
    };
  
    return stdin;
  };