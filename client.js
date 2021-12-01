const net = require('net');
const port = 14736;

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: "165.227.47.243",
      port: 50541
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    //update connect function to handle incoming data and console log for player
    conn.on("connect", (data) => {
        console.log(data)
      // code that does something when the connection is first established
    });
    
    return conn;
  };

console.log("Connecting ...");
connect();
  module.exports = {connect}
  

