import pkg from "pg";
const {Pool} = pkg;

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'sg_user_data',
    password : 'vishnuyt@81',
    port : 5432
});

export default pool;