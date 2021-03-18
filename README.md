# To-Do Project
Repository to upload the to-do project (back-end) and explain how to run it on **macOS**.

## How to run the project (back-end)
* Open the terminal.
* Clone the repository: **`git clone https://github.com/jemtca/todo-back-end.git`**
* Go to the project folder: **`cd todo-back-end`**
* Install dependencies/packages: **`npm install`**
* Run the app: **`npm start`**

## How to install mongodb (using Homebrew) and create a database
* Add the custom tap: **`brew tap mongodb/brew`**
* Install mongodb: **`brew install mongodb-community`**
* Start mongodb: **`brew services start mongodb-community`**
* Connect and use mongodb: **`mongo`**
* Create a database: **`use merntodo`**

* Useful commands
    * Current database: **`db`**
    * List all databases: **`show dbs`**
    * Switch between databases: **`use database_name`**
	* Show collections in the current database: **`show collections`**
	* Show collection information: **`db.collection_name.find()`**
	* Exit mongodb: **`exit`**

## How to run the whole project (database + back-end + front-end)
* Recomendation: open three different terminal windows.
* Database window
    * Start mongodb: **`brew services start mongodb-community`**
    * Connect and use mongodb: **`mongo`**
    * Switch to the right database: **`use merntodo`**
* Back-end window: **`npm start`**
* Front-end window: **`npm start`**

## How to stop the whole project (database + back-end + front-end)
* Stop the front-end: **`control + c`**
* Stop the back-end: **`control + c`**
* Stop postgresql: **`exit`** + **`brew services stop mongodb-community`**

## Screenshot
![](https://github.com/jemtca/todo-back-end/blob/master/screenshots/todo.gif)