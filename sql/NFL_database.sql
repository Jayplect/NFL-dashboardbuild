-- Drop Tables if already exist in the database

DROP TABLE IF EXISTS athletes;
DROP TABLE IF EXISTS team_venue;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS stats;


-- Create all tables

CREATE TABLE stats (
    date DATE   NOT NULL,
    away VARCHAR(20)   NOT NULL,
    home VARCHAR(20)   NOT NULL,
    first_downs_away INTEGER   NOT NULL,
    first_downs_home INTEGER   NOT NULL,
    third_downs_away VARCHAR(10)   NOT NULL,
    third_downs VARCHAR(10)   NOT NULL,
    fourth_downs_away VARCHAR(10)   NOT NULL,
    fourth_downs_home VARCHAR(10)   NOT NULL,
    passing_yards_away INTEGER   NOT NULL,
    passing_yards_home INTEGER   NOT NULL,
    rushing_yards_away INTEGER   NOT NULL,
    rushing_yards_home INTEGER   NOT NULL,
    total_yards_away INTEGER   NOT NULL,
    total_yards_home INTEGER   NOT NULL,
    comp_att_away VARCHAR(10)   NOT NULL,
    comp_att_home VARCHAR(10)   NOT NULL,
    sacks_away VARCHAR(10)   NOT NULL,
    sacks_home VARCHAR(10)   NOT NULL,
    rushing_attempts_away INTEGER   NOT NULL,
    rushing_attempts_home INTEGER   NOT NULL,
    fumbles_away INTEGER   NOT NULL,
    fumbles_home INTEGER   NOT NULL,
    int_away INTEGER   NOT NULL,
    int_home INTEGER   NOT NULL,
    turnovers_away INTEGER   NOT NULL,
    turnovers_home INTEGER   NOT NULL,
    penalties_away VARCHAR(10)   NOT NULL,
    penalties_home VARCHAR(10)   NOT NULL,
    redzone_away VARCHAR(10)   NOT NULL,
    redzone_home VARCHAR(10)   NOT NULL,
    drives_away INTEGER   NOT NULL,
    drives_home INTEGER   NOT NULL,
    def_st_td_away INTEGER   NOT NULL,
    def_st_td_home INTEGER   NOT NULL,
    possession_away VARCHAR   NOT NULL,
    possession_home VARCHAR   NOT NULL,
    score_away INTEGER   NOT NULL,
    score_home INTEGER   NOT NULL
);

CREATE TABLE teams (
    id INTEGER   NOT NULL,
    shortDisplayName VARCHAR(20)   NOT NULL,
    nickname VARCHAR(20)   NOT NULL,
    location VARCHAR(50)   NOT NULL,
    abbreviation VARCHAR(10)   NOT NULL,
    displayName VARCHAR(50)   NOT NULL,
    isActive BOOLEAN   NOT NULL,
    isAllStar BOOLEAN   NOT NULL,
    logos VARCHAR(300)   NOT NULL,
    OTLosses FLOAT   NOT NULL,
    OTWins FLOAT   NOT NULL,
    avgPointsAgainst FLOAT   NOT NULL,
    avgPointsFor FLOAT   NOT NULL,
    divisionWinPercent FLOAT   NOT NULL,
    gamesPlayed FLOAT   NOT NULL,
    losses FLOAT  NOT NULL,
    ties FLOAT   NOT NULL,
    wins FLOAT   NOT NULL,
    winPercent FLOAT   NOT NULL,
    points FLOAT   NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE athletes (
    type VARCHAR(20)   NOT NULL,
    teamID INTEGER   NOT NULL,
	FOREIGN KEY (teamID) REFERENCES teams(id),
    teamName VARCHAR(300)   NOT NULL,
    name VARCHAR(300)   NOT NULL,
    weight INTEGER   NOT NULL,
    height INTEGER   NOT NULL,
    age INTEGER   NOT NULL,
    birthCity VARCHAR(300)   NOT NULL,
    birthState VARCHAR(100)   NOT NULL,
    birthCountry VARCHAR(50)   NOT NULL,
    position VARCHAR(100)   NOT NULL,
    jersey INTEGER   NOT NULL,
    xp INTEGER   NOT NULL,
    status VARCHAR(50)   NOT NULL,
    headshot VARCHAR(300)   NOT NULL,
    PRIMARY KEY (name)
);

CREATE TABLE team_venue (
    Team_id INTEGER   NOT NULL,
	FOREIGN KEY (Team_id) REFERENCES teams(id),
    Abbreviation VARCHAR(10)   NOT NULL,
    Team_Name VARCHAR(50)   NOT NULL,
    Venue_id INTEGER   NOT NULL,
    Team_logo VARCHAR(300)   NOT NULL,
    Team_Venue VARCHAR(100)   NOT NULL,
    Venue_City VARCHAR(50)   NOT NULL,
    Venue_State VARCHAR(50)   NOT NULL,
    Venue_ZipCode INTEGER   NOT NULL,
    Venue_Capacity INTEGER   NOT NULL,
    Venue_Grass BOOLEAN   NOT NULL,
    Venue_Indoor BOOLEAN   NOT NULL,
    Latitude FLOAT   NOT NULL,
    Longitude FLOAT   NOT NULL,
    Location VARCHAR(300)   NOT NULL,
	PRIMARY KEY (Team_id)
);


-- Import each CSV file into its corresponding SQL table
-- Display each table to confirm data is imported properly
SELECT * FROM stats;
SELECT * FROM teams;
SELECT * FROM athletes;
SELECT * FROM team_venue;