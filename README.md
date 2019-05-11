# Friend Finder - A Node JS application using Express

## Getting Started

These instructions will get you a copy of the application up and running on your local machine for development and testing purposes.

This is a node application using express that allows you to submit a survey and return and compatible friend.

## Application Folder structure

```
.
|-- README.md
|-- app
|   |-- data
|   |   `-- friends.js
|   |-- public
|   |   |-- css
|   |   |   `-- style.css
|   |   |-- home.html
|   |   |-- images
|   |   |   `-- backlit-beach.jpg
|   |   |-- js
|   |   |   `-- app.js
|   |   `-- survey.html
|   `-- routing
|       |-- apiRoutes.js
|       `-- htmlRoutes.js
|-- package-lock.json
|-- package.json
`-- server.js


```
## Prerequisites

- Verify you have node installed.
  ```
  $ node --version
  ```
- Download the repository to your computer
- Install dependencies using the Node Package Manager
  ```
  $ npm install
  ```

## How the application works

- After downloading the application and installing dependencies, start the server using
  ```
  $node server.js
  ```
- In your browser, type in the URL localhost:3000, which will launch the home page
- Click on "Go to survey" to submit a survey and find a compatible friend.
- Click on "API Friends List" to see the list of available friends.


