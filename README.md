# Properly Coding Challenge
Welcome to the SPA that let's you browse property in Middle Earth (whaaat?!?!?).  
It's a very simple project, but I tried to build it in a way that is maintainable.

#### localhost:3000/ 
- Shows a list of all properties by default. 
- Allows you to change filtering to your liking and properties update automatically. 
- If no properties match, should show an empty placeholder.
- Clicking on a property redirects you to the property details page.

#### localhost:3000/property/:propertyId
- Shows the overview of the property.
- Can see stats about the property: address, #bathrooms, #bedrooms, sqft, price.
- Can see a description of the property.
- Can see a sticky agent card displaying agent info.
  - Can see 'Book A Viewing' button that shows an alert.

## Instructions
Start project: `yarn start`

Test project: `yarn test`

Navigate to `localhost:3000/`

## Technical Overview
- Made with create-react-app.
- Used styled-components. First time trying it out.
- Used MUI for the fancier components.
  - wrapped them in my own components so I can start building a component library.
- Unit testing covers utils.
  - mainly focused on filtering util.
- Tried to stick to atomic design to separate pages and components. 
- Redux was built with re-ducks structure, and dispatches mock actions to retrieve data.

## Other
Added user stories as a PDF in **/docs** folder.
