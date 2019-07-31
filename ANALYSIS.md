SIMPLE REACT APP DEMO PROJECT
This project demonstrates complete development and production work-flow usging

- React and Nginx app

- Version control System : Git and Github

- Continuous integration system : Travis CI

- Containerizaton Plaltform: Docker Images and docker hub

- Container Orchastration : Kubernnetes


==========================CICD Workflow ========================================

Project files
React app file : docker-reactApp/src/App.js  / 
React app test file : docker-reactApp/src/App.test.js  /

Docckerfile.dev  for testing
Dockerfile for production build
.travis.yml for CI-CD  workflow  

=============================Running Container====================================

you can down loadimages from docker hub as follows :

$ docker pull ydockerr/docker-reactapp

run the image using following command

$ docker run -p 8050:80 ydockerr/docker-reactapp

==================================================================================
