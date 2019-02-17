# UncommonHacks
Project for UncommonHacks 2019, Team Member: Han Cao, Ruoyu He, Kesong Cao, Yuheng Chen 

## Inspiration

Our frond-end designer has always been _troubled_ to decide where to go for dinner. Frustrated and irritated, he decided to create an app that would present him with a range of choices that are **totally random** within walking distance. Hence the app Foodar.

## What it does

Foodar's database stores over 200,000 pictures of food and restaurants from **Yelp Open Dataset**. Each picture is linked with a restaurant's profile, so when the users open our app, Foodar will present them with pictures of nearby restaurants. Users can choose to _LIKE_ or _PASS_ this picture by _swiping_ right or left. After a few likes, Foodar will generate a list of restaurants the users prefer, and users can then filter and decide which one to go for dinner.

## How we built it

**Back-End:**
* Google Cloud Platform -> setting up Compute Engine (VM)
* Yelp Open Dataset -> data cleansing -> setting up MySQL environment -> import tables -> design queries
* Google Auth -> express & mongoDB -> Domain.com -> login functionality

**Front-End:**
* Adobe XD -> building a prototype
* tried flutter -> using react-native to build the apps -> fetching data from back-end

**Other Tasks:**
* coming up with a name and logo
* writing the devpost
* preparing the presentation

## Challenges we ran into

**A LOT!** Challenges are _everywhere_. We solved many and many remain. The biggest issue is that in a short period of time, we could not finish all the functionalities we promised during the designing phase.

## Accomplishments that we're proud of

That we managed to build the entire app, after frustrating, clueless debugging!
That we processed gigabytes of data and deployed a server handling those!
That we cooperated with each other and had fun during the entire UncommonHacks!
That we learned something new and built something cool!

## What we learned

* react-native tricks and experiences
* using postman to test requests
* writing sql queries
* rapid prototyping
* version control within a team

## What's next for Foodar

Hopefully we can enhance the user experience by designing a better, more intelligent choosing algorithm, and expand our database to include more useful info and more restaurants.