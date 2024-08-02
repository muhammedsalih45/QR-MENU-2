const db = require('mysql2');

const connection = db.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Promaster1234.',
  database: 'qrmenuapp',
});

(async () => {
  try {
    await connection.connect();
    console.log('Database connected');
  } catch (err) {
    console.log(err);
  }
})();

module.exports = connection;
