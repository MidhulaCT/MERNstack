import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

con.connect((err) => {
  if (err) {
    console.error(" DB Connection Failed:", err);
    process.exit(1); // stop server if DB connection fails
  }
  console.log(' DB Connected');
});

export default con;
