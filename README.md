# Iglu central schema search

This is a very basic simple frontend for viewing and searching iglu schemas. It should work on both mobile and desktop.

## Running

To run locally you will need to have npm installed as a pre-requisite. Once installed simply run

```
npm install
npm start
```

## Building

To build a version of this run

```
npm run build
```

Then copy the output of the build directory to wherever you would like to host. It expects the host to provide a `/schemas` endpoint to grab the schemas from.
