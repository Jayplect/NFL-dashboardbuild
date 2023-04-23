-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/QvHxNt
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "teams" (
    "Team_id" INTEGER   NOT NULL,
    "Abbreviation" VARCHAR(3)   NOT NULL,
    "Team_Name" VARCHAR(30)   NOT NULL,
    CONSTRAINT "pk_teams" PRIMARY KEY (
        "Team_id"
     )
);

CREATE TABLE "active_teams" (
    "Tm" VARCHAR(30)   NOT NULL,
    "From" INTEGER   NOT NULL,
    "To" INTEGER   NOT NULL,
    "W" INTEGER   NOT NULL,
    "L" INTEGER   NOT NULL,
    "T" INTEGER   NOT NULL,
    "W-L%" FLOAT   NOT NULL,
    "AV" VARCHAR(30)   NOT NULL,
    "Passer" VARCHAR(30)   NOT NULL,
    "Rusher" VARCHAR(30)   NOT NULL,
    "Receiver" VARCHAR(30)   NOT NULL,
    "Coaching" VARCHAR(30)   NOT NULL,
    "Yr_plyf" INTEGER   NOT NULL,
    "W_plyf" INTEGER   NOT NULL,
    "L_plyf" INTEGER   NOT NULL,
    "W-L_%" FLOAT   NOT NULL,
    "Chmp" INTEGER   NOT NULL,
    "SBwl" INTEGER   NOT NULL,
    "Conf" INTEGER   NOT NULL,
    "Div" INTEGER   NOT NULL,
    CONSTRAINT "pk_active_teams" PRIMARY KEY (
        "Tm"
     )
);

CREATE TABLE "offense" (
    "teamID" INTEGER   NOT NULL,
    "offense_name" VARCHAR(30)   NOT NULL,
    "offense_weight" FLOAT   NOT NULL,
    "offense_height" FLOAT   NOT NULL,
    "offense_age" INTEGER   NOT NULL,
    "offense_birthCity" VARCHAR(30)   NOT NULL,
    "offense_birthState" VARCHAR(3)   NOT NULL,
    "offense_birthCountry" VARCHAR(20)   NOT NULL,
    "offense_position" VARCHAR(30)   NOT NULL,
    "offense_jersey" VARCHAR(30)   NOT NULL,
    "offense_xp" INTEGER   NOT NULL,
    "offense_status" VARCHAR(20)   NOT NULL,
    "offense_headshot" VARCHAR(150)   NOT NULL
);

CREATE TABLE "defense" (
    "teamID" INTEGER   NOT NULL,
    "defense_name" VARCHAR(30)   NOT NULL,
    "defense_weight" FLOAT   NOT NULL,
    "defense_height" FLOAT   NOT NULL,
    "defense_age" INTEGER   NOT NULL,
    "defense_birthCity" VARCHAR(30)   NOT NULL,
    "defense_birthState" VARCHAR(3)   NOT NULL,
    "defense_birthCountry" VARCHAR(20)   NOT NULL,
    "defense_position" VARCHAR(30)   NOT NULL,
    "defense_jersey" VARCHAR(30)   NOT NULL,
    "defense_xp" INTEGER   NOT NULL,
    "defense_status" VARCHAR(20)   NOT NULL,
    "defense_headshot" VARCHAR(150)   NOT NULL
);

CREATE TABLE "special" (
    "teamID" INTEGER   NOT NULL,
    "special_name" VARCHAR(30)   NOT NULL,
    "special_weight" FLOAT   NOT NULL,
    "special_height" FLOAT   NOT NULL,
    "special_age" INTEGER   NOT NULL,
    "special_birthCity" VARCHAR(30)   NOT NULL,
    "special_birthState" VARCHAR(3)   NOT NULL,
    "special_birthCountry" VARCHAR(20)   NOT NULL,
    "special_position" VARCHAR(30)   NOT NULL,
    "special_jersey" VARCHAR(30)   NOT NULL,
    "special_xp" INTEGER   NOT NULL,
    "special_status" VARCHAR(20)   NOT NULL,
    "special_headshot" VARCHAR(150)   NOT NULL
);

ALTER TABLE "teams" ADD CONSTRAINT "fk_teams_Team_Name" FOREIGN KEY("Team_Name")
REFERENCES "active_teams" ("Tm");

ALTER TABLE "offense" ADD CONSTRAINT "fk_offense_teamID" FOREIGN KEY("teamID")
REFERENCES "teams" ("Team_id");

ALTER TABLE "defense" ADD CONSTRAINT "fk_defense_teamID" FOREIGN KEY("teamID")
REFERENCES "teams" ("Team_id");

ALTER TABLE "special" ADD CONSTRAINT "fk_special_teamID" FOREIGN KEY("teamID")
REFERENCES "teams" ("Team_id");

SELECT * 
FROM teams;

SELECT * 
FROM active_teams;

SELECT * 
FROM offense;

SELECT * 
FROM defense;

SELECT * 
FROM special;