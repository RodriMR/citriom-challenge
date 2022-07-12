const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { loadProperties } = require("./src/routes/models");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await loadProperties();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
