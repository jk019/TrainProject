import mysql from "mysql2/promise";

/**
 * @type {Promise<mysql.Connection> | null}
 */
let mysqlconn = null;

export function mysqlconnFn() {
    if (!mysqlconn) {
        // used for development with MAMP
        mysqlconn = mysql.createConnection({
            host: 'Mysql@localhost:3306',
            user: 'root',
            password: 'MySQL1234PW!#',
            database: 'traindata',
        });
        /* mysqlconn = mysql.createConnection({
          host: "162.241.218.208",
          user: "algyvwmy_state_reader",
          password: "SveltekitMySQL",
          database: "algyvwmy_states",
        }); */
    }

    return mysqlconn;
}