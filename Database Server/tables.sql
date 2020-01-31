--
-- PostgreSQL database cluster dump
--

-- Started on 2020-01-30 23:57:44

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md53ebe949e955df8150d3973e70138c148';






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

-- Started on 2020-01-30 23:57:46

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2020-01-30 23:58:03

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

-- Started on 2020-01-30 23:58:04

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 7 (class 2615 OID 16393)
-- Name: pgagent; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA pgagent;


ALTER SCHEMA pgagent OWNER TO postgres;

--
-- TOC entry 3087 (class 0 OID 0)
-- Dependencies: 7
-- Name: SCHEMA pgagent; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA pgagent IS 'pgAgent system tables';


--
-- TOC entry 1 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 3088 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 204 (class 1259 OID 16394)
-- Name: accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts (
    id integer NOT NULL,
    groupsid integer NOT NULL,
    userid integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL,
    status integer NOT NULL
);


ALTER TABLE public.accounts OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16398)
-- Name: accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_id_seq OWNER TO postgres;

--
-- TOC entry 3089 (class 0 OID 0)
-- Dependencies: 205
-- Name: accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;


--
-- TOC entry 206 (class 1259 OID 16400)
-- Name: contact_relationship; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact_relationship (
    id integer NOT NULL,
    identity integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL,
    status integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.contact_relationship OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16404)
-- Name: contact_relationship_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contact_relationship_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contact_relationship_id_seq OWNER TO postgres;

--
-- TOC entry 3090 (class 0 OID 0)
-- Dependencies: 207
-- Name: contact_relationship_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contact_relationship_id_seq OWNED BY public.contact_relationship.id;


--
-- TOC entry 208 (class 1259 OID 16406)
-- Name: contract_relationship; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contract_relationship (
    id integer NOT NULL,
    identity integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.contract_relationship OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16410)
-- Name: contract_relationship_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contract_relationship_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contract_relationship_id_seq OWNER TO postgres;

--
-- TOC entry 3091 (class 0 OID 0)
-- Dependencies: 209
-- Name: contract_relationship_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contract_relationship_id_seq OWNED BY public.contract_relationship.id;


--
-- TOC entry 210 (class 1259 OID 16412)
-- Name: data_code; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.data_code (
    id integer NOT NULL,
    description character varying NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL,
    datagroupcodeid integer
);


ALTER TABLE public.data_code OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16419)
-- Name: data_code_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_code_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.data_code_id_seq OWNER TO postgres;

--
-- TOC entry 3092 (class 0 OID 0)
-- Dependencies: 211
-- Name: data_code_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.data_code_id_seq OWNED BY public.data_code.id;


--
-- TOC entry 212 (class 1259 OID 16421)
-- Name: data_contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.data_contact (
    id integer NOT NULL,
    description character varying,
    idcontact integer NOT NULL,
    datacodeid integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.data_contact OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16428)
-- Name: data_contact_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.data_contact_id_seq OWNER TO postgres;

--
-- TOC entry 3093 (class 0 OID 0)
-- Dependencies: 213
-- Name: data_contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.data_contact_id_seq OWNED BY public.data_contact.id;


--
-- TOC entry 214 (class 1259 OID 16430)
-- Name: data_contract; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.data_contract (
    id integer NOT NULL,
    description character varying NOT NULL,
    idcontract integer NOT NULL,
    datacodeid integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.data_contract OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16437)
-- Name: data_contract_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_contract_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.data_contract_id_seq OWNER TO postgres;

--
-- TOC entry 3094 (class 0 OID 0)
-- Dependencies: 215
-- Name: data_contract_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.data_contract_id_seq OWNED BY public.data_contract.id;


--
-- TOC entry 216 (class 1259 OID 16439)
-- Name: data_creditor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.data_creditor (
    id integer NOT NULL,
    description character varying NOT NULL,
    identity integer NOT NULL,
    datacodeid integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.data_creditor OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16446)
-- Name: data_creditor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_creditor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.data_creditor_id_seq OWNER TO postgres;

--
-- TOC entry 3095 (class 0 OID 0)
-- Dependencies: 217
-- Name: data_creditor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.data_creditor_id_seq OWNED BY public.data_creditor.id;


--
-- TOC entry 218 (class 1259 OID 16448)
-- Name: data_detran; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.data_detran (
    id integer NOT NULL,
    description character varying,
    identity integer NOT NULL,
    datacodeid integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.data_detran OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16455)
-- Name: data_detran_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_detran_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.data_detran_id_seq OWNER TO postgres;

--
-- TOC entry 3096 (class 0 OID 0)
-- Dependencies: 219
-- Name: data_detran_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.data_detran_id_seq OWNED BY public.data_detran.id;


--
-- TOC entry 244 (class 1259 OID 16933)
-- Name: data_group_code_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_group_code_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.data_group_code_id OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 16935)
-- Name: data_group_code; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.data_group_code (
    id integer DEFAULT nextval('public.data_group_code_id'::regclass) NOT NULL,
    description character varying NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.data_group_code OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 16903)
-- Name: data_group_code_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_group_code_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.data_group_code_id_seq OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16457)
-- Name: entities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entities (
    id integer NOT NULL,
    description character varying NOT NULL,
    status boolean DEFAULT false NOT NULL,
    datacodeid integer NOT NULL,
    entitytypeid integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.entities OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16465)
-- Name: entities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.entities_id_seq OWNER TO postgres;

--
-- TOC entry 3097 (class 0 OID 0)
-- Dependencies: 221
-- Name: entities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entities_id_seq OWNED BY public.entities.id;


--
-- TOC entry 222 (class 1259 OID 16467)
-- Name: entities_relationship; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entities_relationship (
    id integer NOT NULL,
    firstentity integer NOT NULL,
    secondentity integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.entities_relationship OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16471)
-- Name: entities_relationship_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entities_relationship_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.entities_relationship_id_seq OWNER TO postgres;

--
-- TOC entry 3098 (class 0 OID 0)
-- Dependencies: 223
-- Name: entities_relationship_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entities_relationship_id_seq OWNED BY public.entities_relationship.id;


--
-- TOC entry 224 (class 1259 OID 16473)
-- Name: entity_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entity_type (
    id integer NOT NULL,
    description character varying NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.entity_type OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 16883)
-- Name: entity_type_features; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entity_type_features (
    id integer NOT NULL,
    entitytypeid integer NOT NULL,
    featuresid integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL,
    status integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.entity_type_features OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16881)
-- Name: entity_type_features_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entity_type_features_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.entity_type_features_id_seq OWNER TO postgres;

--
-- TOC entry 3099 (class 0 OID 0)
-- Dependencies: 241
-- Name: entity_type_features_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entity_type_features_id_seq OWNED BY public.entity_type_features.id;


--
-- TOC entry 225 (class 1259 OID 16480)
-- Name: entity_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entity_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.entity_type_id_seq OWNER TO postgres;

--
-- TOC entry 3100 (class 0 OID 0)
-- Dependencies: 225
-- Name: entity_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entity_type_id_seq OWNED BY public.entity_type.id;


--
-- TOC entry 236 (class 1259 OID 16704)
-- Name: features; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.features (
    id integer NOT NULL,
    description character varying(100) NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL,
    status integer NOT NULL,
    component character varying NOT NULL
);


ALTER TABLE public.features OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 16702)
-- Name: features_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.features_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.features_id_seq OWNER TO postgres;

--
-- TOC entry 3101 (class 0 OID 0)
-- Dependencies: 235
-- Name: features_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.features_id_seq OWNED BY public.features.id;


--
-- TOC entry 240 (class 1259 OID 16792)
-- Name: groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.groups (
    id integer NOT NULL,
    description character varying NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL,
    status integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.groups OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 16719)
-- Name: groups_features; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.groups_features (
    id integer NOT NULL,
    groupsid integer NOT NULL,
    featuresid integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL,
    status integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.groups_features OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16482)
-- Name: groups_relationship; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.groups_relationship (
    id integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL,
    entityid integer NOT NULL,
    status integer NOT NULL,
    groupsid integer NOT NULL
);


ALTER TABLE public.groups_relationship OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16790)
-- Name: plan_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.plan_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.plan_id_seq OWNER TO postgres;

--
-- TOC entry 3102 (class 0 OID 0)
-- Dependencies: 239
-- Name: plan_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.plan_id_seq OWNED BY public.groups.id;


--
-- TOC entry 237 (class 1259 OID 16717)
-- Name: role_features_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.role_features_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_features_id_seq OWNER TO postgres;

--
-- TOC entry 3103 (class 0 OID 0)
-- Dependencies: 237
-- Name: role_features_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.role_features_id_seq OWNED BY public.groups_features.id;


--
-- TOC entry 227 (class 1259 OID 16489)
-- Name: role_plans_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.role_plans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_plans_id_seq OWNER TO postgres;

--
-- TOC entry 3104 (class 0 OID 0)
-- Dependencies: 227
-- Name: role_plans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.role_plans_id_seq OWNED BY public.groups_relationship.id;


--
-- TOC entry 234 (class 1259 OID 16685)
-- Name: src_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.src_log (
    id integer NOT NULL,
    userid integer NOT NULL,
    tablename character varying NOT NULL,
    description character varying NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.src_log OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16683)
-- Name: src_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.src_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.src_log_id_seq OWNER TO postgres;

--
-- TOC entry 3105 (class 0 OID 0)
-- Dependencies: 233
-- Name: src_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.src_log_id_seq OWNED BY public.src_log.id;


--
-- TOC entry 228 (class 1259 OID 16491)
-- Name: states; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.states (
    id integer NOT NULL,
    description character varying NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.states OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16498)
-- Name: states_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.states_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.states_id_seq OWNER TO postgres;

--
-- TOC entry 3106 (class 0 OID 0)
-- Dependencies: 229
-- Name: states_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.states_id_seq OWNED BY public.states.id;


--
-- TOC entry 230 (class 1259 OID 16500)
-- Name: states_relationship; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.states_relationship (
    idstate integer NOT NULL,
    identity integer NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.states_relationship OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16504)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying NOT NULL,
    lastname character varying NOT NULL,
    email character varying NOT NULL,
    username character varying NOT NULL,
    passwordmd5 character varying NOT NULL,
    creationdate timestamp with time zone DEFAULT now() NOT NULL,
    resetcode character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 16511)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3107 (class 0 OID 0)
-- Dependencies: 232
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 2824 (class 2604 OID 16513)
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);


--
-- TOC entry 2826 (class 2604 OID 16514)
-- Name: contact_relationship id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_relationship ALTER COLUMN id SET DEFAULT nextval('public.contact_relationship_id_seq'::regclass);


--
-- TOC entry 2829 (class 2604 OID 16515)
-- Name: contract_relationship id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contract_relationship ALTER COLUMN id SET DEFAULT nextval('public.contract_relationship_id_seq'::regclass);


--
-- TOC entry 2831 (class 2604 OID 16516)
-- Name: data_code id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_code ALTER COLUMN id SET DEFAULT nextval('public.data_code_id_seq'::regclass);


--
-- TOC entry 2833 (class 2604 OID 16517)
-- Name: data_contact id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_contact ALTER COLUMN id SET DEFAULT nextval('public.data_contact_id_seq'::regclass);


--
-- TOC entry 2835 (class 2604 OID 16518)
-- Name: data_contract id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_contract ALTER COLUMN id SET DEFAULT nextval('public.data_contract_id_seq'::regclass);


--
-- TOC entry 2837 (class 2604 OID 16519)
-- Name: data_creditor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_creditor ALTER COLUMN id SET DEFAULT nextval('public.data_creditor_id_seq'::regclass);


--
-- TOC entry 2839 (class 2604 OID 16520)
-- Name: data_detran id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_detran ALTER COLUMN id SET DEFAULT nextval('public.data_detran_id_seq'::regclass);


--
-- TOC entry 2842 (class 2604 OID 16521)
-- Name: entities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entities ALTER COLUMN id SET DEFAULT nextval('public.entities_id_seq'::regclass);


--
-- TOC entry 2844 (class 2604 OID 16522)
-- Name: entities_relationship id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entities_relationship ALTER COLUMN id SET DEFAULT nextval('public.entities_relationship_id_seq'::regclass);


--
-- TOC entry 2846 (class 2604 OID 16523)
-- Name: entity_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entity_type ALTER COLUMN id SET DEFAULT nextval('public.entity_type_id_seq'::regclass);


--
-- TOC entry 2864 (class 2604 OID 16886)
-- Name: entity_type_features id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entity_type_features ALTER COLUMN id SET DEFAULT nextval('public.entity_type_features_id_seq'::regclass);


--
-- TOC entry 2856 (class 2604 OID 16707)
-- Name: features id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.features ALTER COLUMN id SET DEFAULT nextval('public.features_id_seq'::regclass);


--
-- TOC entry 2861 (class 2604 OID 16795)
-- Name: groups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups ALTER COLUMN id SET DEFAULT nextval('public.plan_id_seq'::regclass);


--
-- TOC entry 2858 (class 2604 OID 16722)
-- Name: groups_features id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups_features ALTER COLUMN id SET DEFAULT nextval('public.role_features_id_seq'::regclass);


--
-- TOC entry 2848 (class 2604 OID 16524)
-- Name: groups_relationship id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups_relationship ALTER COLUMN id SET DEFAULT nextval('public.role_plans_id_seq'::regclass);


--
-- TOC entry 2854 (class 2604 OID 16688)
-- Name: src_log id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.src_log ALTER COLUMN id SET DEFAULT nextval('public.src_log_id_seq'::regclass);


--
-- TOC entry 2850 (class 2604 OID 16525)
-- Name: states id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states ALTER COLUMN id SET DEFAULT nextval('public.states_id_seq'::regclass);


--
-- TOC entry 2853 (class 2604 OID 16526)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 2870 (class 2606 OID 16528)
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- TOC entry 2873 (class 2606 OID 16530)
-- Name: contact_relationship contact_relationship_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_relationship
    ADD CONSTRAINT contact_relationship_pkey PRIMARY KEY (id);


--
-- TOC entry 2875 (class 2606 OID 16532)
-- Name: contract_relationship contract_relationship_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contract_relationship
    ADD CONSTRAINT contract_relationship_pkey PRIMARY KEY (id);


--
-- TOC entry 2878 (class 2606 OID 16536)
-- Name: data_code data_code_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_code
    ADD CONSTRAINT data_code_pkey PRIMARY KEY (id);


--
-- TOC entry 2880 (class 2606 OID 16540)
-- Name: data_contact data_contact_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_contact
    ADD CONSTRAINT data_contact_pkey PRIMARY KEY (id);


--
-- TOC entry 2882 (class 2606 OID 16542)
-- Name: data_contract data_contract_description_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_contract
    ADD CONSTRAINT data_contract_description_key UNIQUE (description);


--
-- TOC entry 2884 (class 2606 OID 16544)
-- Name: data_contract data_contract_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_contract
    ADD CONSTRAINT data_contract_pkey PRIMARY KEY (id);


--
-- TOC entry 2886 (class 2606 OID 16548)
-- Name: data_creditor data_creditor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_creditor
    ADD CONSTRAINT data_creditor_pkey PRIMARY KEY (id);


--
-- TOC entry 2888 (class 2606 OID 16550)
-- Name: data_detran data_detran_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_detran
    ADD CONSTRAINT data_detran_pkey PRIMARY KEY (id);


--
-- TOC entry 2927 (class 2606 OID 16946)
-- Name: data_group_code data_group_code_description_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_group_code
    ADD CONSTRAINT data_group_code_description_key UNIQUE (description);


--
-- TOC entry 2929 (class 2606 OID 16944)
-- Name: data_group_code data_group_code_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_group_code
    ADD CONSTRAINT data_group_code_pkey PRIMARY KEY (id);


--
-- TOC entry 2890 (class 2606 OID 16554)
-- Name: entities entities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_pkey PRIMARY KEY (id);


--
-- TOC entry 2892 (class 2606 OID 16556)
-- Name: entities_relationship entities_relationship_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entities_relationship
    ADD CONSTRAINT entities_relationship_pkey PRIMARY KEY (id);


--
-- TOC entry 2894 (class 2606 OID 16558)
-- Name: entity_type entity_type_description_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entity_type
    ADD CONSTRAINT entity_type_description_key UNIQUE (description);


--
-- TOC entry 2925 (class 2606 OID 16889)
-- Name: entity_type_features entity_type_features_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entity_type_features
    ADD CONSTRAINT entity_type_features_pkey PRIMARY KEY (id);


--
-- TOC entry 2896 (class 2606 OID 16560)
-- Name: entity_type entity_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entity_type
    ADD CONSTRAINT entity_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2914 (class 2606 OID 16753)
-- Name: features features_component_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_component_key UNIQUE (component);


--
-- TOC entry 2916 (class 2606 OID 16712)
-- Name: features features_description_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_description_key UNIQUE (description);


--
-- TOC entry 2918 (class 2606 OID 16710)
-- Name: features features_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (id);


--
-- TOC entry 2921 (class 2606 OID 16725)
-- Name: groups_features groups_features_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups_features
    ADD CONSTRAINT groups_features_pkey PRIMARY KEY (id);


--
-- TOC entry 2923 (class 2606 OID 16801)
-- Name: groups groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id);


--
-- TOC entry 2898 (class 2606 OID 16562)
-- Name: groups_relationship groups_relationship_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups_relationship
    ADD CONSTRAINT groups_relationship_pkey PRIMARY KEY (id);


--
-- TOC entry 2912 (class 2606 OID 16694)
-- Name: src_log src_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.src_log
    ADD CONSTRAINT src_log_pkey PRIMARY KEY (id);


--
-- TOC entry 2900 (class 2606 OID 16566)
-- Name: states states_description_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states
    ADD CONSTRAINT states_description_key UNIQUE (description);


--
-- TOC entry 2902 (class 2606 OID 16568)
-- Name: states states_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states
    ADD CONSTRAINT states_pkey PRIMARY KEY (id);


--
-- TOC entry 2904 (class 2606 OID 16570)
-- Name: states_relationship states_relationship_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states_relationship
    ADD CONSTRAINT states_relationship_pkey PRIMARY KEY (idstate, identity);


--
-- TOC entry 2906 (class 2606 OID 16572)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 2908 (class 2606 OID 16574)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2910 (class 2606 OID 16576)
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- TOC entry 2876 (class 1259 OID 16952)
-- Name: data_code_description_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX data_code_description_idx ON public.data_code USING btree (description);


--
-- TOC entry 2871 (class 1259 OID 16872)
-- Name: fki_accounts_planid_fkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_accounts_planid_fkey ON public.accounts USING btree (groupsid);


--
-- TOC entry 2919 (class 1259 OID 16878)
-- Name: fki_group_features_groupsid_fkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_group_features_groupsid_fkey ON public.groups_features USING btree (groupsid);


--
-- TOC entry 2931 (class 2606 OID 16867)
-- Name: accounts accounts_groupsid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_groupsid_fkey FOREIGN KEY (groupsid) REFERENCES public.groups(id) ON DELETE RESTRICT;


--
-- TOC entry 2930 (class 2606 OID 16587)
-- Name: accounts accounts_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id) ON DELETE RESTRICT;


--
-- TOC entry 2932 (class 2606 OID 16592)
-- Name: contact_relationship contact_relationship_identity_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_relationship
    ADD CONSTRAINT contact_relationship_identity_fkey FOREIGN KEY (identity) REFERENCES public.entities(id) ON DELETE RESTRICT;


--
-- TOC entry 2933 (class 2606 OID 16597)
-- Name: contract_relationship contract_relationship_identity_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contract_relationship
    ADD CONSTRAINT contract_relationship_identity_fkey FOREIGN KEY (identity) REFERENCES public.entities(id) ON DELETE RESTRICT;


--
-- TOC entry 2934 (class 2606 OID 16947)
-- Name: data_code data_code_datagroupcodeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_code
    ADD CONSTRAINT data_code_datagroupcodeid_fkey FOREIGN KEY (datagroupcodeid) REFERENCES public.data_group_code(id) ON DELETE RESTRICT;


--
-- TOC entry 2935 (class 2606 OID 16602)
-- Name: data_contact data_contact_datacodeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_contact
    ADD CONSTRAINT data_contact_datacodeid_fkey FOREIGN KEY (datacodeid) REFERENCES public.data_code(id) ON DELETE RESTRICT;


--
-- TOC entry 2936 (class 2606 OID 16607)
-- Name: data_contact data_contact_idcontact_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_contact
    ADD CONSTRAINT data_contact_idcontact_fkey FOREIGN KEY (idcontact) REFERENCES public.contact_relationship(id) ON DELETE RESTRICT;


--
-- TOC entry 2937 (class 2606 OID 16612)
-- Name: data_contract data_contract_datacodeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_contract
    ADD CONSTRAINT data_contract_datacodeid_fkey FOREIGN KEY (datacodeid) REFERENCES public.data_code(id) ON DELETE RESTRICT;


--
-- TOC entry 2938 (class 2606 OID 16617)
-- Name: data_contract data_contract_idcontract_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_contract
    ADD CONSTRAINT data_contract_idcontract_fkey FOREIGN KEY (idcontract) REFERENCES public.contract_relationship(id) ON DELETE RESTRICT;


--
-- TOC entry 2939 (class 2606 OID 16622)
-- Name: data_creditor data_creditor_datacodeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_creditor
    ADD CONSTRAINT data_creditor_datacodeid_fkey FOREIGN KEY (datacodeid) REFERENCES public.data_code(id) ON DELETE RESTRICT;


--
-- TOC entry 2940 (class 2606 OID 16627)
-- Name: data_creditor data_creditor_identity_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_creditor
    ADD CONSTRAINT data_creditor_identity_fkey FOREIGN KEY (identity) REFERENCES public.entities(id) ON DELETE RESTRICT;


--
-- TOC entry 2941 (class 2606 OID 16632)
-- Name: data_detran data_detran_datacodeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_detran
    ADD CONSTRAINT data_detran_datacodeid_fkey FOREIGN KEY (datacodeid) REFERENCES public.data_code(id) ON DELETE RESTRICT;


--
-- TOC entry 2942 (class 2606 OID 16637)
-- Name: data_detran data_detran_identity_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_detran
    ADD CONSTRAINT data_detran_identity_fkey FOREIGN KEY (identity) REFERENCES public.entities(id) ON DELETE RESTRICT;


--
-- TOC entry 2943 (class 2606 OID 16642)
-- Name: entities entities_datacodeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_datacodeid_fkey FOREIGN KEY (datacodeid) REFERENCES public.data_code(id) ON DELETE RESTRICT;


--
-- TOC entry 2944 (class 2606 OID 16647)
-- Name: entities entities_entitytypeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_entitytypeid_fkey FOREIGN KEY (entitytypeid) REFERENCES public.entity_type(id) ON DELETE RESTRICT;


--
-- TOC entry 2945 (class 2606 OID 16652)
-- Name: entities_relationship entities_relationship_firstentity_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entities_relationship
    ADD CONSTRAINT entities_relationship_firstentity_fkey FOREIGN KEY (firstentity) REFERENCES public.entities(id) ON DELETE RESTRICT;


--
-- TOC entry 2946 (class 2606 OID 16657)
-- Name: entities_relationship entities_relationship_secondentity_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entities_relationship
    ADD CONSTRAINT entities_relationship_secondentity_fkey FOREIGN KEY (secondentity) REFERENCES public.entities(id) ON DELETE RESTRICT;


--
-- TOC entry 2954 (class 2606 OID 16890)
-- Name: entity_type_features entity_type_features_entitytypeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entity_type_features
    ADD CONSTRAINT entity_type_features_entitytypeid_fkey FOREIGN KEY (entitytypeid) REFERENCES public.entity_type(id) ON DELETE RESTRICT;


--
-- TOC entry 2955 (class 2606 OID 16895)
-- Name: entity_type_features entity_type_features_featuresid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entity_type_features
    ADD CONSTRAINT entity_type_features_featuresid_fkey FOREIGN KEY (featuresid) REFERENCES public.features(id) ON DELETE RESTRICT;


--
-- TOC entry 2952 (class 2606 OID 16731)
-- Name: groups_features groups_features_featuresid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups_features
    ADD CONSTRAINT groups_features_featuresid_fkey FOREIGN KEY (featuresid) REFERENCES public.features(id) ON DELETE RESTRICT;


--
-- TOC entry 2953 (class 2606 OID 16873)
-- Name: groups_features groups_features_groupsid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups_features
    ADD CONSTRAINT groups_features_groupsid_fkey FOREIGN KEY (groupsid) REFERENCES public.groups(id);


--
-- TOC entry 2948 (class 2606 OID 16678)
-- Name: groups_relationship groups_relationship_entityid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups_relationship
    ADD CONSTRAINT groups_relationship_entityid_fkey FOREIGN KEY (entityid) REFERENCES public.entities(id) ON DELETE RESTRICT;


--
-- TOC entry 2947 (class 2606 OID 16802)
-- Name: groups_relationship groups_relationship_groupsid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups_relationship
    ADD CONSTRAINT groups_relationship_groupsid_fkey FOREIGN KEY (groupsid) REFERENCES public.groups(id) ON DELETE RESTRICT;


--
-- TOC entry 2951 (class 2606 OID 16695)
-- Name: src_log src_log_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.src_log
    ADD CONSTRAINT src_log_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id) ON DELETE RESTRICT;


--
-- TOC entry 2949 (class 2606 OID 16662)
-- Name: states_relationship states_relationship_identity_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states_relationship
    ADD CONSTRAINT states_relationship_identity_fkey FOREIGN KEY (identity) REFERENCES public.entities(id) ON DELETE RESTRICT;


--
-- TOC entry 2950 (class 2606 OID 16667)
-- Name: states_relationship states_relationship_idstate_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states_relationship
    ADD CONSTRAINT states_relationship_idstate_fkey FOREIGN KEY (idstate) REFERENCES public.states(id) ON DELETE RESTRICT;


-- Completed on 2020-01-30 23:59:20

--
-- PostgreSQL database dump complete
--

-- Completed on 2020-01-30 23:59:20

--
-- PostgreSQL database cluster dump complete
--

