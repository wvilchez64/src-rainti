-- Arquivo com os scripts em pgsql para criação das tabelas do sistema

-- Tabela para cadastrar os tipos de Registro do sistema  (CPF, CNPJ, Nome, Tel, Logradouro...)
CREATE TABLE data_code(
	id SERIAL PRIMARY KEY,
	description VARCHAR UNIQUE NOT NULL,
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela para cadastro dos tipos de entidades (DETRAN, CREDORA, GESTORA, REGISTRADORA...)
CREATE TABLE entity_type(
	id SERIAL PRIMARY KEY,
	description VARCHAR UNIQUE NOT NULL,
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela para cadastrar os CPFs e CNPJs das entidades 
CREATE TABLE entities(
	id SERIAL PRIMARY KEY,
	description VARCHAR UNIQUE NOT NULL,
	status BOOLEAN NOT NULL DEFAULT FALSE,
	dataCodeId INT4 NOT NULL REFERENCES data_code(id) ON DELETE RESTRICT, 
	entityTypeId INT4 NOT NULL REFERENCES entity_type(id) ON DELETE RESTRICT, 	
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para relacionar as entidades entre si, no caso a Gestora que apresenta várias Credoras, ou algum representante de uma Credora na qual será associado um CPF a um CNPJ
CREATE TABLE entities_relationship(
	id SERIAL PRIMARY KEY,
	firstEntity INT4 NOT NULL REFERENCES entities(id) ON DELETE RESTRICT, 
	secondEntity INT4 NOT NULL REFERENCES entities(id) ON DELETE RESTRICT, 
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para cadastrar os dados de cada Detran
CREATE TABLE data_detran(
	id SERIAL PRIMARY KEY,
	description VARCHAR UNIQUE NOT NULL,
	idEntity INT4 NOT NULL REFERENCES entities(id) ON DELETE RESTRICT, 
	dataCodeId INT4 NOT NULL REFERENCES data_code(id) ON DELETE RESTRICT, 
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para cadastrar os dados de cada Credora ou Gestora
CREATE TABLE data_creditor(
	id SERIAL PRIMARY KEY,
	description VARCHAR UNIQUE NOT NULL,
	idEntity INT4 NOT NULL REFERENCES entities(id) ON DELETE RESTRICT, 
	dataCodeId INT4 NOT NULL REFERENCES data_code(id) ON DELETE RESTRICT, 
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para associar os Registros de Contrato às Entidades
CREATE TABLE contract_relationship(
	id SERIAL PRIMARY KEY,
	idEntity INT4 NOT NULL REFERENCES entities(id) ON DELETE RESTRICT, 
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para cadastrar os dados de cada Registro de Contrato
CREATE TABLE data_contract(
	id SERIAL PRIMARY KEY,
	description VARCHAR UNIQUE NOT NULL,
	idContract INT4 NOT NULL REFERENCES contract_relationship(id) ON DELETE RESTRICT, 
	dataCodeId INT4 NOT NULL REFERENCES data_code(id) ON DELETE RESTRICT, 
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para relacionar os contatos às entidades
CREATE TABLE contact_relationship(
	id SERIAL PRIMARY KEY,
	idEntity INT4 NOT NULL REFERENCES entities(id) ON DELETE RESTRICT, 
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para cadastrar os dados de cada um dos Contatos
CREATE TABLE data_contact(
	id SERIAL PRIMARY KEY,
	description VARCHAR UNIQUE NOT NULL,
	idContact INT4 NOT NULL REFERENCES contact_relationship(id) ON DELETE RESTRICT, 
	dataCodeId INT4 NOT NULL REFERENCES data_code(id) ON DELETE RESTRICT, 
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para cadastrar os Estados
CREATE TABLE states(
	id SERIAL PRIMARY KEY,
	description VARCHAR UNIQUE NOT NULL,
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para relacionar os Estados às entidades
CREATE TABLE states_relationship(
	idState INT4 NOT NULL REFERENCES states(id) ON DELETE RESTRICT,
	idEntity INT4 NOT NULL REFERENCES entities(id) ON DELETE RESTRICT, 
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY (idState, idEntity)
);

-- Tabela criada para cadastrar os usuários do sistema
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	firstName VARCHAR NOT NULL,
	lastName VARCHAR NOT NULL,
	email VARCHAR NOT NULL,
	userName VARCHAR UNIQUE NOT NULL,
	passwordMd5 VARCHAR NOT NULL,
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()	
);

-- Tabela criada para criar os níveis de acesso ao sistema
CREATE TABLE rolePlans(
	id SERIAL PRIMARY KEY,
	planName VARCHAR,
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()		
);

-- Tabela criada para associar o usuário a uma nível de acesso em uma determinada entidade, por exemplo ele é "Registrador de Contrato" na Credora 1 e ele é "Visualizador" na Credora 2
CREATE TABLE accounts(
	id SERIAL PRIMARY KEY,
	rolePlanId INT4 NOT NULL REFERENCES rolePlans(id) ON DELETE RESTRICT,
	userId INT4 NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
	entityId INT4 NOT NULL REFERENCES entities(id) ON DELETE RESTRICT,
	creationDate TIMESTAMPTZ NOT NULL DEFAULT NOW()		
);

