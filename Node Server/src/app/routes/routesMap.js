module.exports = {
  project: { 
/**** authenticated ****/       
    "authenticated": "/api/*",
/**** data_code ****/     
    "data_codeInsert": "/api/data_codeInsert",
    "data_codeSelectId": "/api/data_codeSelectId/:id",
    "data_codeSelectDescription": "/api/data_codeSelectDescription/:description",
    "data_codeUpdate": "/api/data_codeUpdate",
    "data_codeSelectAll":"/api/data_codeSelectAll",
/**** entity_type ****/  
    "entity_typeInsert": "/api/entity_typeInsert",
    "entity_typeSelectId": "/api/entity_typeSelectId/:id",
    "entity_typeSelectDescription": "/api/entity_typeSelectDescription/:description",
    "entity_typeUpdate": "/api/entity_typeUpdate",
    "entity_typeSelectAll":"/api/entity_typeSelectAll", 
/**** entities ****/  
    "entitiesInsert": "/api/entitiesInsert",
    "entitiesSelectId": "/api/entitiesSelectId/:id",
    "entitiesSelectDescription": "/api/entitiesSelectDescription/:description",
    "entitiesUpdate": "/api/entitiesUpdate",
    "entitiesSelectAll":"/api/entitiesSelectAll",     
/**** data_detran ****/  
    "data_detranInsert": "/api/data_detranInsert",
    "data_detranSelectId": "/api/data_detranSelectId/:id",
    "data_detranSelectDescription": "/api/data_detranSelectDescription/:description",
    "data_detranUpdate": "/api/data_detranUpdate",
    "data_detranSelectAll":"/api/data_detranSelectAll"       
  },
  base: { 
    "login":"/login",
    "logout":"/logout"
  }
}

 
