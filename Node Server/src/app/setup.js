module.exports = {
  sqlInit: { 
    "sqlServer": "localhost",
    "sqlPort": "5432",
    "sqlDatabase": "postgres",
    "sqlUser": "postgres",
    "sqlPassword": "Mariana03"
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


 
