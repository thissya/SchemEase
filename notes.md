index.js - entry point

config - used to integrate with third party softwares (mongo db)

Utils -  features of our app

model - structure of the Collection

controller - handling request and response

DTO - Data Transfer Object 
for validation
    class validator, class Transformer packages can be used.

service - business logics (handling all the read and write cases of db)

repository -  database manipulations (queries) (easy to convert the database)

constants - defining const values like routes and model name

middleware - Token validation (authorization and authentication)

Routes - used for routing purpose, route categorization

app.js - used to categorize the 
