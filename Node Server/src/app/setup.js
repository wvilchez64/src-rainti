const sqlUser = "postgres";
const sqlPassword = "Mariana03";
const sqlHost = "localhost";
const sqlPort = "5432";
const sqlDatabase = "postgres";

module.exports = {
  node: {
    "port": "3000"
  },
  sql : {
    pool: { 
      "user": sqlUser,
      "password": sqlPassword,
      "host": sqlHost,
      "port": sqlPort,
      "database": sqlDatabase
    },
    url: {
      "stringConn":"postgres://"
                    .concat(
                        sqlUser,
                        ":",
                        sqlPassword,
                        "@",
                        sqlHost,
                        ":",
                        sqlPort,
                        "/",
                        sqlDatabase
                    )
    }
  },
  origin: { 
    "urls":"http://localhost:3000, https://wvilchez64.github.io"
  },
  paths: { 
    "rootLevel":rootLevel,
    "scr":rootLevel + "/src/",
    "config":srcConfig,
    "app":srcApp,
    "public":srcApp + "public/",
    "routes":srcApp + "routes/",
    "infra":srcApp + "infra/",
    "controllers":srcApp + "controllers/"
  }
}