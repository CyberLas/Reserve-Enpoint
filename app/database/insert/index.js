import { db } from "..";

export const createDB = async () => {
  let hotel = await db
      .one(`SELECT * FROM public.hotel`, [])
      .then((res) => res)
      .catch((err) => "No Created"),
    client = await db
      .one(`SELECT * FROM public.client`, [])
      .then((res) => res)
      .catch((err) => "No Created");

  if (hotel === "No Created" && client === "No Created") {
    return await db
      .oneOrNone(
        `
			CREATE TABLE IF NOT EXISTS public.hotel(
				id uuid NOT NULL,
				place character varying(255) COLLATE pg_catalog."default",
				roomnumber integer,
				numberpeople integer,
				hotelstars integer,
				description character varying(1024) COLLATE pg_catalog."default",
				qualification integer,
				created timestamp without time zone NOT NULL DEFAULT now(),
				price numeric(10,2),
				CONSTRAINT hotel_pkey PRIMARY KEY (id)
			);
		
			CREATE TABLE IF NOT EXISTS public.facture(
				id uuid NOT NULL,
				paytype character varying(255) COLLATE pg_catalog."default",
				mount numeric(10,2),
				idclient uuid,
				idhotel uuid,
				coin character varying(255) COLLATE pg_catalog."default",
				daystay integer,
				status character varying(255) COLLATE pg_catalog."default",
				created timestamp without time zone NOT NULL DEFAULT now(),
				updated timestamp without time zone,
				pay boolean NOT NULL DEFAULT false,
				CONSTRAINT facture_pkey PRIMARY KEY (id)
			);
		
		
			CREATE TABLE IF NOT EXISTS public.client(
				id uuid NOT NULL,
				dni character varying(30) COLLATE pg_catalog."default" NOT NULL,
				first character varying(255) COLLATE pg_catalog."default" NOT NULL,
				last character varying(255) COLLATE pg_catalog."default" NOT NULL,
				"create" timestamp without time zone DEFAULT now(),
				update timestamp without time zone,
				delete timestamp without time zone,
				CONSTRAINT client_pkey PRIMARY KEY (id)
			);

			INSERT INTO public.client(id, dni, first, last)	VALUES ('364a57ca-3a34-11ed-a261-0242ac120002', '07883224C', 'Faustino', 'Mercado');
			INSERT INTO public.client(id, dni, first, last)	VALUES ('364a5ed2-3a34-11ed-a261-0242ac120002', '39037478S', 'Segundo', 'Casas');
			INSERT INTO public.client(id, dni, first, last)	VALUES ('364a6008-3a34-11ed-a261-0242ac120002', '83808048G', 'Vicente', 'Mora');
			INSERT INTO public.client(id, dni, first, last)	VALUES ('364a6238-3a34-11ed-a261-0242ac120002', '47714301L', 'Enrique', 'Serna');
			INSERT INTO public.client(id, dni, first, last)	VALUES ('364a638c-3a34-11ed-a261-0242ac120002', '12638266L', 'Dionisio', 'Castro');
			INSERT INTO public.client(id, dni, first, last)	VALUES ('364a64ea-3a34-11ed-a261-0242ac120002', '36611325V', 'Didac', 'Wang');
			INSERT INTO public.client(id, dni, first, last)	VALUES ('364a680a-3a34-11ed-a261-0242ac120002', '80337795Z', 'Angel', 'Castillo');

			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440c92fc-3a2e-11ed-a261-0242ac120002', 'España',	2,	4, 4, 'Hotel', 3, 50.00);
			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440c95b8-3a2e-11ed-a261-0242ac120002', 'Perú', 	3,	6, 3, 'Hotel', 2, 25.00);
			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440c9702-3a2e-11ed-a261-0242ac120002', 'EE.UU', 	4,	8, 3, 'Hotel', 4, 10.00);
			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440c982e-3a2e-11ed-a261-0242ac120002', 'Colombia', 5,	10, 1, 'Hotel', 2, 20.00);
			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440c993c-3a2e-11ed-a261-0242ac120002', 'Dinamarca', 3, 6, 5, 'Hotel', 1, 30.00);
			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440c9a2c-3a2e-11ed-a261-0242ac120002', 'Egipto', 2, 6, 3, 'Hotel', 4, 40.00);
			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440c9dd8-3a2e-11ed-a261-0242ac120002', 'Brasil', 1, 2, 1, 'Hotel', 2, 50.00);
			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440c9eaa-3a2e-11ed-a261-0242ac120002', 'Chile', 4, 8, 3, 'Hotel', 1, 44.00);
			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440c9f7c-3a2e-11ed-a261-0242ac120002', 'Bolivia', 1, 2, 2, 'Hotel', 2, 30.00);
			INSERT INTO public.hotel(id, place, roomnumber, numberpeople, hotelstars, description, qualification, price) VALUES ('440ca058-3a2e-11ed-a261-0242ac120002', 'México', 2, 4, 3, 'Hotel', 3, 50.00);
		`,
        []
      )
      .then((res) => res)
      .catch((err) => err);
  }
};
