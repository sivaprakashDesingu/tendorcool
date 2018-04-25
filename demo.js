console.log("connected");
var oracledb = require('oracledb');
oracledb.getConnection(
  {
    user          : "hot_office",
    password      : "w1sd0m",
    connectString : "192.168.1.12:1521:domdev"
  },
  function(err, connection)
  {
    if (err) { console.error("unable to connect"); return; }
    else{console.log("connected");}
    /*connection.execute(
      "SELECT department_id, department_name "
    + "FROM departments "
    + "WHERE department_id < 70 "
    + "ORDER BY department_id",
      function(err, result)
      {
        if (err) { console.error(err); return; }
        console.log(result.rows);
      });*/
  });