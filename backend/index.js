const http = require("http");
const express = require("express");
const status = require("http-status");
const sequelize = require("./src/database/database");
const app = express();
const routes = require("./src/routes/routes");
const cors = require('cors');

app.use(cors());
    
app.use(express.json());

app.use("/sistema", routes);

sequelize.sync({ force: false }).then(() => {
    const port = 3003;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
});

