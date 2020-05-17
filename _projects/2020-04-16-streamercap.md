---
layout: post
title:  "My first post"
date:   2020-04-15 14:13:31 -0400
gh_url: "https://github.com/"
no: true

---

### Background
StreamerCap is my current side project. It's a web app that aggregates live video game streams across different sites to sort and filter by various criteria. Implemented using Python’s `Django`, `JS`, `HTML`, `CSS`, `Postgresql`, & `AWS`. I found that Twitch.tv's filtering tool to find new streams was not as feature rich as I would like. 
For example, Twitch doesn't allow you to filter multiple games at a time, or do other additive filters. On Twitch it's impossible to display all streamers who are playing either League of Legends or Starcraft 2, speak either English or Korean, and who have been streaming for over 5 hours. Those filter parameters are possible on StreamerCap, with the addition of supporting Mixer(Twitch competitor) as well.
 
------
I felt that client-side rendering was the obvious choice to give users a snappy response while changing filter parameters. I chose to store entries for almost all of Twitch & Mixer's current streams at any given time, this allowed me to rely on my own custom db querying api rather than twitch & mixer's respective api's. 
In this way I could easily add support for another streaming platform, like Youtube, by simply writing a small wrapper to convert their data model into my own without changing anything about how my client queries the backend api. 

I started development by designing my database schema. I used Django for my backend framework, whose ORM made it really easy to get started but ended up being troublesome when writing my more complicated queries. The ORM also allowed me to seamlessly transition to a Postgresql database for production with ease. After writing basic database functionality I wrote simple python scripts to query the Twitch & Mixer apis to populate my database. I scheduled these scripts as jobs to trigger every 3 minutes using Crontab. 

Next I went on to build the font-end. I chose to not use any front-end frameworks like React and stick with just raw JS, CSS, & HTML. The core functionality of the
front end revolves around four major filter category buttons (game, platform, language, & length) which expand to show individual filter parameters. These main category buttons are the only content hard coded into the site. When a user visits to the site the client queries the api for all of the individual filter parameters, this returns a list of the most popular games, platforms supported, highest streamed languages, and the different stream length parameters I support. The client side code generates individual filter buttons for all of these items under their respective categories. When a user clicks a new filter item, for example a game, the client-side code makes a REST call to the backend, returning the filtered streams which are displayed to the users in a table.

Overall I'm extremely proud of how this project turned out, although it's far from perfect. The site peaked at ~50 users after sharing it on various social media sites but quickly fell to a small handful of daily active users. I have a few friends who said they have not returned to the Twitch homepage since I launched which continues to motivate me to work on the site. 
