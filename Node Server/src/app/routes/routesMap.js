module.exports = {
  project: { 
/**** authenticated ****/       
    "authenticated": "/api/*",
/**** states ****/     
    "statesSelectId": "/api/statesSelectId/:id",
    "statesSelectDescp": "/api/statesSelectDescp/:description",
    "statesSelectAll":"/api/statesSelectAll",    
/**** data_code ****/     
    "data_codeInsert": "/api/data_codeInsert",
    "data_codeSelectId": "/api/data_codeSelectId/:id",
    "data_codeSelectDescp": "/api/data_codeSelectDescp/:description",
    "data_codeUpdate": "/api/data_codeUpdate",
    "data_codeSelectAll":"/api/data_codeSelectAll",
/**** entity_type ****/  
    "entity_typeInsert": "/api/entity_typeInsert",
    "entity_typeSelectId": "/api/entity_typeSelectId/:id",
    "entity_typeSelectDescp": "/api/entity_typeSelectDescp/:description",
    "entity_typeUpdate": "/api/entity_typeUpdate",
    "entity_typeSelectAll":"/api/entity_typeSelectAll", 
/**** entities ****/  
    "entitiesInsert": "/api/entitiesInsert",
    "entitiesSelectId": "/api/entitiesSelectId/:id",
    "entitiesSelectDescp": "/api/entitiesSelectDescp/:description",
    "entitiesUpdate": "/api/entitiesUpdate",
    "entitiesSelectAll":"/api/entitiesSelectAll",     
/**** data_detran ****/  
    "data_detranInsert": "/api/data_detranInsert",
    "data_detranSelectId": "/api/data_detranSelectId/:id",
    "data_detranSelectDescp": "/api/data_detranSelectDescp/:description",
    "data_detranUpdate": "/api/data_detranUpdate",
    "data_detranSelectAll":"/api/data_detranSelectAll",      
/**** data_creditor ****/  
    "data_creditorInsert": "/api/data_creditorInsert",
    "data_creditorSelectId": "/api/data_creditorSelectId/:id",
    "data_creditorSelectDescp": "/api/data_creditorSelectDescp/:description",
    "data_creditorUpdate": "/api/data_creditorUpdate",
    "data_creditorSelectAll":"/api/data_creditorSelectAll",
/**** data_contract ****/  
    "data_contractInsert": "/api/data_contractInsert",
    "data_contractSelectId": "/api/data_contractSelectId/:id",
    "data_contractSelectDescp": "/api/data_contractSelectDescp/:description",
    "data_contractUpdate": "/api/data_contractUpdate",
    "data_contractSelectAll":"/api/data_contractSelectAll",   
/**** data_contact ****/  
    "data_contactInsert": "/api/data_contactInsert",
    "data_contactSelectId": "/api/data_contactSelectId/:id",
    "data_contactSelectDescp": "/api/data_contactSelectDescp/:description",
    "data_contactUpdate": "/api/data_contactUpdate",
    "data_contactSelectAll":"/api/data_contactSelectAll",       
/**** users ****/  
    "usersoutInsert": "/api/usersoutInsert",
    "usersoutSelectId": "/api/usersoutSelectId/:id",
    "usersoutSelectEmail": "/api/usersoutSelectEmail/:email",
    "usersoutSelectAll":"/api/usersoutSelectAll",            
    "usersoutDelete": "/api/usersoutDelete",      
/**** users ****/  
    "usersInsert": "/api/usersInsert",
    "usersSelectId": "/api/usersSelectId/:id",
    "usersSelectFullname": "/api/usersSelectFullname/:firstname/:lastname",
    "usersSelectUsername": "/api/usersSelectUsername/:username",
    "usersSelectEmail": "/api/usersSelectEmail/:email",
    "usersUpdate": "/api/usersUpdate",
    "usersSelectAll":"/api/usersSelectAll"              
  },
  base: { 
    "login":"/login",
    "logout":"/logout"
  }
}

 
