# faethflex-sacred-order
faethflex-sacred-order

- newly packaged with webpack + express.js

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run these commands:

``` bash

# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080 - this also builds the app for production in the dist/ directory
npm start

# Deploy to Google Cloud App Engine
gcloud app deploy

# Configure a Cloud Build trigger to automate builds and deployments on commits. Use the below command to view the build that was deployed in the browser
gcloud app browse
```
