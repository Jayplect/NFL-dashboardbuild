# Touchdown Insights: A Data-Driven NFL Dashboard

### Project Description 

Football is one of the most popular sports in the world with a large viewing globally. There is a growing need for a platform that could cater for the needs of football enthusiasts and analysts. This project is aimed at creating an interactive dashboard that could serve as a one-point stop for National Football League (NFL) fans seeking information and these are our target audience. The dashboard displays overall Team and Athlete details for the year 2022 and also presents visualizations for teams performance statistics from 2002 onwards to 2023.


### The Dashboard

The interactive dashboard has three views:

1. **Main Dasboard**

    This view is the default view that loads when the dashboard is launched. It displays a static view of some key details of the 2022 game and an interactive map plotting team venues.

    ![Main Dashboard](data/Images/Image1.PNG)

2. **Teams Dashboard**

    The Teams view has a drodown containing list of all the teams that played in the 2022 season. The dashboard displays team logo, basic team data and results metrics for 2022. It also includes three additional visualizations displaying scores, yards and attempts statistics from 2002 to 2023. The dashboard updates every time a different team is selected from the dropdown.

    ![Teams Dashboard](data/Images/Image2.PNG)

3. **Athletes Dashboard**

    The Teams view has a drodown containing list of all the teams that played in the 2022 season. The dashboard displays team logo, basic team data and results metrics for 2022. It also includes three additional visualizations displaying scores, yards and attempts statistics from 2002 to 2023. The dashboard updates every time a different team is selected from the dropdown.

    ![Athletes Dashboard](data/Images/Image3.PNG)


### Data Sources

The data for this project is taken from a combination of API, CSV and Mapping sources. Following are the key data sources we have used:

- [ESPN API through GitHub](https://gist.github.com/nntrn/ee26cb2a0716de0947a0a4e9a157bc1c)

    This link contains NFL API endpoints which contain 2022 data only. We mainly used the Athletes and Teams endpoints to get informative and overall statistics data.

- [Kaggle dataset](https://www.kaggle.com/datasets/cviaxmiwnptr/nfl-team-stats-20022019-espn?resource=download) 

    The Kaggle dataset was downloaded as CSV and it contains detailed match statistics for teams from 2002 to 2023. The CSV has 5642 rows and 39 columns.

- [GeoPy](https://geopy.readthedocs.io/en/stable/)

    This was used for geocoding and getting latitude and longitude information for team venues.

Following are some other data sources which were consulted and reviewed to get ideas about the required data:

- [ProFootball Reference](https://www.pro-football-reference.com/)
- [GitHub ESPN API Endpoints](https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b#nfl)
- [Covers](https://www.covers.com/picks/nfl)


### Project Workflow

The team members collaborated on different steps of the project to optimize the workflow. Some steps were completed by working together and the others were assigned to each teammate to make best use of teh available resources and time.

Following are some of the key steps that were involved in building the dashboard:

#### **Step 1: Extract, Transform, Load (ETL) Data**

Identify the data source from SportsReference that you want to use for your dashboard, such as team performance, player performance, and team rankings.
Extract the data from SportsReference using web scraping techniques or by accessing their API.
Transform the data by cleaning and organizing it into a format that is suitable for visualization. This may involve data cleaning, data aggregation, and data merging to create meaningful insights.
Load the transformed data into a database or a data storage solution of your choice, such as MySQL or MongoDB, for easy retrieval and manipulation.

#### Step 2: Set Up the Dashboard UI

Decide on the UI framework or library you want to use for your dashboard, such as React, Angular, or Vue.
Set up the basic structure of your dashboard, including the main layout, navigation, and any necessary components or widgets.
Integrate the data retrieval and manipulation logic into your UI components using JavaScript or other relevant programming languages.

#### Step 3: Create Visualizations

Choose the appropriate data visualization libraries for creating visualizations, such as Chart.js, D3.js, or Plotly.
Create visualizations that display relevant statistics, such as wins and losses, player performance, and team rankings. Examples of visualizations could include bar charts, line charts, pie charts, and tables.
Customize the visualizations based on your requirements, such as adding labels, legends, tooltips, and interactivity.

#### Step 4: Implement Interactive Features

Add interactive features to your dashboard, such as filters, dropdowns, and buttons, to allow users to customize the data and insights they want to view.
Implement functionality for users to switch between different visualizations or views based on their preferences.
Add features for data drill-down, data filtering, and data sorting to provide more in-depth insights into team or player performance.
Step 5: Add Additional Functionality

Incorporate additional functionality into your dashboard, such as data updates in real-time or on a scheduled basis, user authentication and authorization, and data export options.
Perform thorough testing of your dashboard to ensure that it is functioning correctly and providing accurate insights.
Fine-tune the UI/UX of your dashboard based on feedback from users.
That's a high-level overview of the steps involved in building a dashboard that provides insights into the performance of a sports team or league using data from SportsReference. Depending on your specific requirements and the tools you choose, the implementation details may vary. Remember to consider data privacy and security when working with sensitive data, and follow best practices for web development and data visualization. Good luck!

#### Contributors
This project is created as part of the Data Analytics BootCamp at University of Toronto.     
Following are the team members:

- Jacob Evans 
- Sara Parveen
- Lailah Libay
- Gus Mendes
