require("dotenv").config();

const Server = require("./models/server");

try {
    const server = new Server();
    server.listen();
} catch(error) {
    console.log(error);
}


