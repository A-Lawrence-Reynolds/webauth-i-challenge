const server = require("./api/server.js");

const PORT = process.env.PORT || 3020;
server.listen(PORT, () => console.log(`Server Running on port ${PORT}. `));
