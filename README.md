# dice-venue-search

React app using Vite to search dice events by venue

it is a solution for this question https://diceproduct.notion.site/External-Frontend-Engineer-Technical-Exercise-2ea705b639464e37aa8135aefc5a3211

to run the app clone this repo

create a .env file with the following

VITE_BASE_URL
VITE_ACCESS_TOKEN

these can be found in the documentation of the test

run

`yarn`

`yarn run dev`

visit

`http://localhost:3000/`

## considerations and improvements

1). cache data, at the moment data fetching is in rudimentary custom hook, could implement react query for some more smarts here

2). image speed, it was a requirement for the cards to show a landscape version of the event image if the show more was expanded, when toggling the images first time there is a noticeable time for the images to load and therefore it feels a bit janky, it may be worth pre caching images to allow for a smoother transition.

3). virtualisation: when you have more than 3 pages of data the render time is visibly slowed so I think it would be worth virtualising this screen to only render items on the screen.

4). I have made a few components to start a component library (FlexBox, Button) but haven't gone very deep into fleshing them out. It would probably be a good idea to have a text component as I am just using raw html tags with some overrides in the App.css

## wins

1). I think the PageColumns component is quite a neat solution for responsive layouts using the useHooks useMedia hook.
