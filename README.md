Satorix Django Demo
===================

A Python Django demo application for the Satorix Cloud

Next Steps
----------

### To explore and modify this app
* Download a local copy of the demo app
  * `git clone https://github.com/satorix/satorix-django-demo.git`
* Change directory into the local repository
  * `cd satorix-django-demo`
* Rename Github origin
  * `git remote rename origin old-origin`
* Associate this repository with appname in your Satorix Gitlab
  * `git remote add origin https://gitlab.clientid.satorix.cloud/satorix/appname.git`
* You'll now be set up to run the app locally, or deploy to your Satorix Hosting Cluster

How to use this app
-------------------

* Enable a Postgres database in the Resources tab for this project in your Satorix Dashboard
* Merge this project into the staging or production branches in your Satorix Gitlab to deploy to the corresponding environment
* During the deploy to your Satorix Hosting Cluster all the dependencies required to run this application will be installed
* This application runs as a single web process in your cluster by default
* The Polls app can be used to test database access
* You can manage the site with the built in Django admin interface using the initially created admin user

Required App Variables
----------------------

#### The Satorix Dashboard allows input of settings that are utilized by your application. Here is a list of the required settings for this application to run:
* `SECRET_KEY`
  * Django secret key used in production
* `DJANGO_SU_NAME`
  * Initial Django admin user to create
* `DJANGO_SU_EMAIL`
  * Email address for initial Django admin user
* `DJANGO_SU_PASSWORD`
  * Password for initial Django admin user
