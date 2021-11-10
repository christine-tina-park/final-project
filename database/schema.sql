set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"createdAt" timestamptz NOT NULL default now(),
	"modifiedAt" timestamptz NOT NULL default now(),
	"username" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."wheelOfLife" (
	"userId" integer NOT NULL,
	"createdAt" timestamptz NOT NULL default now(),
	"modifiedAt" timestamptz NOT NULL default now(),
	"car" integer,
	"fin" integer,
	"hea" integer,
	"soc" integer,
	"fam" integer,
	"lov" integer,
	"rec" integer,
	"con" integer,
	"spi" integer,
	"sel" integer
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."visionBoardEntry" (
	"entryId" serial NOT NULL,
	"userId" integer NOT NULL,
	"createdAt" timestamptz NOT NULL default now(),
	"modifiedAt" timestamptz NOT NULL default now(),
	"imgUrl" TEXT NOT NULL,
	"entryTitle" TEXT NOT NULL,
	CONSTRAINT "visionBoardEntry_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."goal" (
	"goalId" serial NOT NULL,
	"userId" integer NOT NULL,
	"createdAt" timestamptz NOT NULL default now(),
	"modifiedAt" timestamptz NOT NULL default now(),
	"parentId" integer,
	"dueAt" timestamptz NOT NULL default now(),
	"goalTitle" TEXT NOT NULL,
	"goalText" TEXT,
	CONSTRAINT "goal_pk" PRIMARY KEY ("goalId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "wheelOfLife" ADD CONSTRAINT "wheelOfLife_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "visionBoardEntry" ADD CONSTRAINT "visionBoardEntry_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "goal" ADD CONSTRAINT "goal_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "goal" ADD CONSTRAINT "goal_fk1" FOREIGN KEY ("parentId") REFERENCES "goal"("goalId");
