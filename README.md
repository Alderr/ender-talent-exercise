# Ender Talent

Build a single page application that displays various Properties and Leases.
Be creative. Show off your styling abilities. Please avoid UI libraries like Material, etc.

## Instructions

Use the bare wireframe image to build a page with property cards at the top. When clicking on a property, show all relevant leases in a table. When completed, please email talent@ender.com with your project zip file attached or a link to the zip file.

##  API

When fetching data, you must include 'token' in the request body.

```
https://talent.ender.com/fe-challenge/properties
https://talent.ender.com/fe-challenge/properties/[PROPERTY ID]/leases
```

## Starting The Application

[1] Create a .env file with your API token

```
REACT_APP_API_TOKEN=fancy-new-token-123-sprite
```

[2] Install packages 
```javascript
npm install
```

[3] Start application 
```javascript
npm start
```
