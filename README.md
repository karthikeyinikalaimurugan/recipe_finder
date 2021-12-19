# Recipe Finder

This project <b>Recipe Finder</b> is built with <b>React</b> with complete responsiveness across multiple screens. Users can able to search and filter recipe through recipe finder app.

## Demo: https://recipe-finder-jade.vercel.app/

## Running the Project

In the project directory, you can run:

## NPM
### `npm start`
## Yarn
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Building Project
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Structure

```
- Recipe Finder (root Dir)
 |- public
 |  |- img            
 |  |  |- products
 |  |     |- g1.jpg         // Sample Product Image
 |  |- bg.jpeg              // App Body Background Image
 |  |- logo.png             // App Header Logo Image
 |  |- favicon.ico          // App Icon Image
 |  |- index.html           // Initial HTML File
 |  |- manifest.json        // Describes About The Webpage
 |  |- robots.txt           // Prevent Routes From Search Engine Bots
 |
 |- src
 |   |- components
 |   |   |- card       
 |   |   |   |- index.js     // Product Cards
 |   |   |   |- index.css    // Product Cards Styles
 |   |   |
 |   |   |- grid
 |   |   |   |- index.js     // Product Cards Listing
 |   |   |   |- index.css    // Product Cards Listing Styles
 |   |   |
 |   |   |- header     
 |   |   |   |- index.js     // Header Component (Logo,Searcbar,Actions)
 |   |   |   |- index.css    // Header Component Styles
 |   |   |
 |   |   |- main
 |   |   |   |- index.js     // Layout (Filter/Results)
 |   |   |   |- index.css    // Layout Styles
 |   |   |
 |   |   |- menuBar
 |   |   |   |- index.js     // NavLinks with Social Icons
 |   |   |   |- index.css    // NavLinks and Social Icons Styles
 |   |   |
 |   |   |- modal    
 |   |   |   |- index.js     // Filter Modal Mobile View
 |   |   |   |- index.css    // Filter Modal Mobile View Styles
 |   |   |
 |   |   |- searchBar    
 |   |   |   |- index.js     // Searchbar Component Searches Recipes
 |   |   |   |- index.css    // Searchbar Component Styles
 |   |   |
 |   |   |- sideBar
 |   |   |   |- index.js     // Sidebar With Filters
 |   |   |   |- index.css    // Sidebar With Filters Styles
 |   |   |
 |   |   |- stripe
 |   |      |- index.js     // Top Strip Component
 |   |      |- index.css    // Top Strip Component Styles
 |   |
 |   |- App.css             // Common CSS Styles Of Entire App
 |   |- App.js              // Root App Component Assembling All Other Components
 |   |- Data.js            // Entire Data Required For The App
 |   |- index.js            // Starting Point of the App
 |   |- reportWebVitals.css // Determines App Performance
 |- .gitignore              // ignore node_modules and builds to github
 |- package.json            // All packages and dependecies are included
 |- README.md               // App Information
 ```