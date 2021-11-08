# Node Notes

A note taking App to help demonstate and practice creating a CLI (Command line Interface) application using Node.js. This app lets you CRUD (create, retreive, update, delete) notes and persist data to a JSON file.

> This open source App was originally built to help my mentees grasp basics of Node.js CLI app development.

## Getting started

Clone the repo
`git@github.com:shashankkatte/node-notes-app.git`

change into the directory
`cd node-notes-app`

Run the app and add a note
`$ node app.js add --title="Buy" --body="Note body here"`

## Dependenceies

- **chalk** : NPM package lets you print formated output with color to your console
- **yargs** : NPM package helps you process command line arguments
- **Nodemon** : OPTIONAL NPM package for development to automatically restart application when file changes are made

## Concepts covered

- Installing Node.js
- Node module system : importing and exporting
- Using 3rd party NPM packages
- Using command line arguments with `process.argv` and later with `yargs`
- Using JSON to persist data
- using arrow functions
- Debugging node applications

## Contributing

Fell free to raise a pull request and help make this better for everyone :smile:
