-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/QvHxNt
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "teams1" (
    "Team_id" INTEGER   NOT NULL,
    "shortDisplayName" VARCHAR(20)   NOT NULL,
    "home" VARCHAR(20)   NOT NULL,
    "location" VARCHAR(50)   NOT NULL,
    "abbreviation" VARCHAR(5)   NOT NULL,
    "displayName" VARCHAR(50)   NOT NULL,
    "isActive" VARCHAR(5)   NOT NULL,
    "isAllStar" VARCHAR(5)   NOT NULL,
    "logos" VARCHAR(150)   NOT NULL,
    "OTLosses" INTEGER   NOT NULL,
    "OTWins" INTEGER   NOT NULL,
    "avgPointsAgainst" FLOAT   NOT NULL,
    "avgPointsFor" FLOAT   NOT NULL,
    "divisionWinPercent" FLOAT   NOT NULL,
    "gamesPlayed" INTEGER   NOT NULL,
    "losses" INTEGER   NOT NULL,
    "ties" INTEGER   NOT NULL,
    "wins" FLOAT   NOT NULL,
    "winPercent" INTEGER   NOT NULL,
    "points" INTEGER   NOT NULL,
    CONSTRAINT "pk_teams1" PRIMARY KEY (
        "home"
     )
);

CREATE TABLE "team_venue1" (
    "Team_id" INTEGER   NOT NULL,
    "Abbreviation" VARCHAR(5)   NOT NULL,
    "Team_Name" VARCHAR(50)   NOT NULL,
    "Venue_id" INTEGER   NOT NULL,
    "Team_logo" VARCHAR(150)   NOT NULL,
    "Team_Venue" VARCHAR(50)   NOT NULL,
    "Venue_City" VARCHAR(30)   NOT NULL,
    "Venue_State" VARCHAR(5)   NOT NULL,
    "Venue_ZipCode" INTEGER   NOT NULL,
    "Venue_Capacity" INTEGER   NOT NULL,
    "Venue_Grass" VARCHAR(5)   NOT NULL,
    "Venue_Indoor" VARCHAR(5)   NOT NULL,
    "Latitude" VARCHAR(30)   NOT NULL,
    "Longitude" VARCHAR(30)   NOT NULL,
    "Location" VARCHAR(100)   NOT NULL,
    CONSTRAINT "pk_team_venue1" PRIMARY KEY (
        "Team_id"
     )
);

CREATE TABLE "athletes1" (
    "type" VARCHAR(20)   NOT NULL,
    "Team_id" INTEGER   NOT NULL,
    "teamName" VARCHAR(50)   NOT NULL,
    "name" VARCHAR(200)   NOT NULL,
    "weight" INTEGER   NOT NULL,
    "height" INTEGER   NOT NULL,
    "age" INTEGER   NOT NULL,
    "birthCity" VARCHAR(50)   NOT NULL,
    "birthState" VARCHAR(3)   NOT NULL,
    "birthCountry" VARCHAR(20)   NOT NULL,
    "position" VARCHAR(50)   NOT NULL,
    "jersey" INTEGER   NOT NULL,
    "xp" INTEGER   NOT NULL,
    "status" VARCHAR(30)   NOT NULL,
    "headshot" VARCHAR(100)   NOT NULL
);

CREATE TABLE "stats" (
    "date" DATE   NOT NULL,
    "away" VARCHAR(20)   NOT NULL,
    "home" VARCHAR(20)   NOT NULL,
    "first_downs_away" INTEGER   NOT NULL,
    "first_downs_home" INTEGER   NOT NULL,
    "third_downs_away" VARCHAR(10)   NOT NULL,
    "third_downs_home" VARCHAR(10)   NOT NULL,
    "fourth_downs_away" VARCHAR(10)   NOT NULL,
    "fourth_downs_home" VARCHAR(10)   NOT NULL,
    "passing_yards_away" INTEGER   NOT NULL,
    "passing_yards_home" INTEGER   NOT NULL,
    "rushing_yards_away" INTEGER   NOT NULL,
    "rushing_yards_home" INTEGER   NOT NULL,
    "total_yards_away" INTEGER   NOT NULL,
    "total_yards_home" INTEGER   NOT NULL,
    "comp_att_away" VARCHAR(10)   NOT NULL,
    "comp_att_home" VARCHAR(10)   NOT NULL,
    "sacks_away" VARCHAR(10)   NOT NULL,
    "sacks_home" VARCHAR(10)   NOT NULL,
    "rushing_attempts_away" INTEGER   NOT NULL,
    "rushing_attempts_home" INTEGER   NOT NULL,
    "fumbles_away" INTEGER   NOT NULL,
    "fumbles_home" INTEGER   NOT NULL,
    "int_away" INTEGER   NOT NULL,
    "int_home" INTEGER   NOT NULL,
    "turnovers_away" INTEGER   NOT NULL,
    "turnovers_home" INTEGER   NOT NULL,
    "penalties_away" VARCHAR(10)   NOT NULL,
    "penalties_home" VARCHAR(10)   NOT NULL,
    "redzone_away" VARCHAR(10)   NOT NULL,
    "redzone_home" VARCHAR(10)   NOT NULL,
    "drives_away" INTEGER   NOT NULL,
    "drives_home" INTEGER   NOT NULL,
    "def_st_td_away" INTEGER   NOT NULL,
    "def_st_td_home" INTEGER   NOT NULL,
    "possession_away" VARCHAR(20)   NOT NULL,
    "possession_home" VARCHAR(20)   NOT NULL,
    "score_away" INTEGER   NOT NULL,
    "score_home" INTEGER   NOT NULL
);

ALTER TABLE "teams1" ADD CONSTRAINT "fk_teams1_Team_id" FOREIGN KEY("Team_id")
REFERENCES "team_venue1" ("Team_id");

ALTER TABLE "athletes1" ADD CONSTRAINT "fk_athletes1_Team_id" FOREIGN KEY("Team_id")
REFERENCES "team_venue1" ("Team_id");

ALTER TABLE "stats" ADD CONSTRAINT "fk_stats_home" FOREIGN KEY("home")
REFERENCES "teams1" ("home");

SELECT * FROM "team_venue1";
SELECT * FROM "teams1";
SELECT * FROM "athletes1";
SELECT * FROM "stats";
