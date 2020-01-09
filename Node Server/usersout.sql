-- Table: public.usersout

-- DROP TABLE public.usersout;

create sequence usersout_id_seq;

CREATE TABLE public.usersout
(
    id integer NOT NULL DEFAULT nextval('usersout_id_seq'::regclass),
    email character varying COLLATE pg_catalog."default" NOT NULL,
    creationdate timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT usersout_pkey PRIMARY KEY (id),
    CONSTRAINT usersout_email_key UNIQUE (email),
    CONSTRAINT usersout_email_fkey FOREIGN KEY (email)
        REFERENCES public.users (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE RESTRICT
)

TABLESPACE pg_default;

ALTER TABLE public.usersout
    OWNER to postgres;