# Zoot (zoo tracker)

#### _{5-5-2017}_

#### By _**{Dallas Slaughter}**_


This app is made for zoo workers to track information about animals in the zoo. It will provide the workers the ability to add new animals, update existing animals, or view animals based on several filters. It will provide the workers with extensive information about the animals, such as age, diet, number of caretakers needed, etc.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Gulp](http://gulpjs.com) `npm install gulp -g`


## Installation

* `git clone <repository-url>` this repository
* `cd discussion-board`
* `npm install`
* `bower install`
* To prepopulate your database with a few questions, upload the datas.json file to firebase via the console.


## Running / Development

* You will first need to create a Firebase app at [Firebase](https://firebase.google.com). You will use information from that app (click on 'Add Firebase to your web app') in the api-keys.ts (not provided, you will have to create) file as detailed below.
* `gulp build && gulp serve`
* Visit your app at [http://localhost:3000](http://localhost:3000).


* Add file app/api-keys.ts with following (change the values such as YOUR_API_KEY to those provided by firebase)
```
export var masterFirebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DATABASE_URL,
  storageBucket: YOUR_STORAGE_BUCKET
}
```

* firebase database rules should be set to
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```


## Support and Contact

* If you have any issues installing or running this app, feel free to let me know on GitHub or email me: dslaughtr@gmail.com


## Implemented Features

#### ~~User stories:~~
+ ~~I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.~~
+ ~~I want to view a list of animals I have logged.~~
+ ~~I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (more than 2 years of age).~~
+ ~~I want to click an animal to edit its name, age or caretakers.~~

#### Objectives
+ ~~Application uses a model to organize data.~~
+ ~~Components create display and behavior for your templates.~~
+ ~~TypeScript is used throughout application; including variable data types.~~
+ ~~Users can successfully create and edit instances of a model.~~
+ ~~Models can be filtered using a pipe.~~
+ ~~Project is in a polished, portfolio-quality state. (Clear code presentation, error free, basic styling, complete README, thoughtful UI, etc.)~~
+ ~~README contains details on functionality you'd include in the future, given the opportunity.~~

FURTHER EXPLORATION
======
+ ~~Extend the functionality of the app by building out the animal model to further enhance the app.~~
+ ~~Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.~~
+ ~~Expand the application to differentiate between animals' species. Group the animals into those categories.~~ Then include a component to display the total needed caretakers for whichever species the user selects.
+ ~~Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)~~

DREAMS
======
+ ~~Screen reader integration~~
  + After thorough testing, I can say my site is pretty good at this from my uneducated opinion


TODO
======

FURTHER EXPLORATION
======
+ Add custom SASS styling with corresponding Gulp tasks to compile.
+ Display of the total number of caretakers needed in a day.
+ Add a new master component to average the total age for each species.


Beginning Plan
======

+ ~~Model layout:~~
```
---------
Species: "Arctic Fox"
Name: "Moon"
Age: 2
Diet: "Carnivore"
Location: "Northern Trail"
Caretakers: 5
Sex: "Female"
Likes: "Cool shade"
Dislikes: "Loud noises"
Image URL: "image.com/image.jpg"
Description: "white spot on left foot"
Date admitted: "12/12/2012"
---------
```

+ ~~Make a datas.json containing a few animals, upload to firebase~~

+ ~~Very basic page layout (Materialize - navbar, column layout, cards for animals)~~

+ ~~New animal form (user-inputtable date?~~ if empty default to current date?)

+ ~~Edit animal form (copy of new-animal, just pre-fills)~~

+ ~~Pipes (filter by: All/Young/Old/Species/Admitted/Diet/more?)~~

#### styling
+ ~~Divs everywhere, again~~
+ ~~Materialize/Angular Material for pretty much everything.~~
  * ~~Cards for animals~~
  * ~~3 col layout~~
  * ~~Navbar: [[New Animal]     ZOOT     [Filter(dropdown)] (github)]~~
+ ~~Color palette (hopefully high enough contrast)~~
  * ~~Background: #e0f2f1 teal lighten-5~~
  * ~~Navbar: #004d40 teal darken-4~~
  * ~~Cards: #b2ebf2 cyan lighten-4~~
  * ~~Secondaries: #b9f6ca green accent-1, #64ffda teal accent-2, #18ffff cyan accent-2~~


# Known Problems

Adding in new animals and then attempting to filter by species can be odd. Occasionally, the new animal shows up as a completely new species, even if you copy/paste the species of another animal.


## License

* This software is licensed under MIT. Accreditation is the nice thing to do.


Copyright (c) 2017 **_{Dallas Slaughter}_**
