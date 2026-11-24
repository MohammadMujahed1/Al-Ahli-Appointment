const app = require('./app');
const { port } = require('./config/env');

app.listen(port, () => {
  console.log(`Al-Ahli appointment API listening on http://localhost:${port}/api/v1`);
});
