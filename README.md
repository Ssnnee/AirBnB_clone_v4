# AirBnB Clone - Web dynamic
In this part of the project we'll make the project dynamic

<!-- #### Functionalities of this command interpreter: -->
<!-- * Create a new object (ex: a new User or a new Place) -->
<!-- * Retrieve an object from a file, a database etc... -->
<!-- * Do operations on objects (count, compute stats, etc...) -->
<!-- * Update attributes of an object -->
<!-- * Destroy an object -->

## Table of Content
* [Environment](#environment)
* [Dependencies](#dependencies)
* [Usage](#usage)
* [File Descriptions](#file-descriptions)
* [Usage](#usage)
* [Examples of use](#examples-of-use)
* [Bugs](#bugs)
* [Authors](#authors)
* [License](#license)

## Environment
This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3)

## Dependencies
This may be a none exhaustive of Dependencies
```
python3
sqlalchemy
mysql
flasgger
MySQLdb to install on Fedora (sudo dnf install python python-devel mysql-devel redhat-rpm-config  ; pip install MySQLdb)
flask-cors
```

## Usage
After cloning the project if you have all dependencies installed, you have to
set up the db :
```
cat setup_mysql_dev.sql | mysql -hlocalhost -uroot -p
```
Then to add a State or Amenity in the database, you can use for example :
```
echo 'create State name="California"' | HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db ./console.py
echo 'create Amenity name="Air Conditioning"' | HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db ./console.py
```
That's also work for all classes (city, amenity, etc.).
To see the created data, you can either go to MySQL and run the select command or
you can run:
```
echo 'all State' | HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db ./console.py
```

After that, to start the flask web server, run :
```
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.0-hbnb
```

To start the api :
```
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_PORT=5001 python3 -m api.v1.app
```


## Project Structure
| Project directory or file name | Description |
|------------------------|-------------|
| api  | contains classes used for this project |
| models  | contains classes used for this project |
| models  | contains classes used for this project |
| tests   | contains all tests of the project |
| web_dynamic | the dynamic version of the project |
| web_flask | the flask of part of the project |
| web_static | the static version of the project |


## Examples of use
```
vagrantAirBnB_clone$./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit
```

## Bugs
No known bugs at this time.

## Authors
Alexa Orrico - [Github](https://github.com/alexaorrico) / [Twitter](https://twitter.com/alexa_orrico)
Jennifer Huang - [Github](https://github.com/jhuang10123) / [Twitter](https://twitter.com/earthtojhuang)
Jhoan Zamora - [Github](https://github.com/jzamora5) / [Twitter](https://twitter.com/JhoanZamora10)
David Ovalle - [Github](https://github.com/Nukemenonai) / [Twitter](https://twitter.com/disartDave)
Samuel Sne - [Github](https://github.com/ssnnee) / [Twitter](https://twitter.com/NandiSne)

Second part of Airbnb: Joann Vuong
## License
Public Domain. No copy write protection.
