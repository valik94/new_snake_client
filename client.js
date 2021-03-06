const net = require('net');
const setupInput = require('./input');
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: IP,
      port: PORT
      //host: "165.227.47.243",
      //port: 50541
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on("data", (data) => {
      console.log("Server says", data);
    })
    //update connect function to handle incoming data and console log for player
    conn.on("connect", function(){
      console.log("Successfully connected to game server");
    })

    conn.on("connect", () => {
      // code that does something when the connection is first established
      conn.write("Name: VAL");
    });

    return conn;
  };



  module.exports = {connect}
  

