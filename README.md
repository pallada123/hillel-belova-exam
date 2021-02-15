# hillel-belova-exam
https://lms.ithillel.ua/groups/5f17ea5923a8fa47dfcc597e/homeworks/5fec218ee141f40c79a771dd

> В рамках финального задания необходимо создать простое одностраничное веб-приложение о погоде.
> 
> Данные можно взять с сайта openweathermap.org или любого другого бесплатного.
> 
> Приложение должно уметь:
> 
> - Добавлять/удалять города(при добавлении города отображается название, погода и еще данные по желанию: ветер, прогноз погоды и тд)
> 
> - Редактировать название города(меняется и все данные, в зависимости от названия города)
> 
> - Сохранять данные в БД(если совсем сложно, в localStorage)
> 
> - Автоматически запрашивать погоду по координатам пользователя — это город/место по умолчанию, там, где вы находитесь.
> 
> 
> Результат разработки должен быть сохранен на сервисе github с локальными коммитами разработчика.
> 
> Справа сделайте виджет курса валют, который обновляется каждый час. Внешний вид на ваш вкус. 
> 
> Поддержка адаптивной верстки приветствуется.
> 
> Дизайн на ваш вкус.
> 
> ps. В Readme опишите все шаги по запуску вашего приложения.


## Project description

This is an exam project for the 'Front End Pro' course.

The application allows the user to add one or more cities to the DB and obtain the current weather in these cities.

The application also has the following widgets:
- weather in the user's city (determined by geolocation, user consent is required to access his location);
- the current rate of popular currencies (updated hourly).


## Project comments

1. Required environment:
- MongoDb
- Node.JS
- GIT

2. Services used:
- https://openweathermap.org/api
- https://api.privatbank.ua/


## Local project setup manual

1. Download and install nodejs:
https://nodejs.org/ru/download/

2. Download and install mongodb:
https://www.mongodb.com/try/download/community

3. Download and install git for your OS:
https://git-scm.com/download/

4. Clone the repository:

In the console, go to the folder where you want to deploy the local project:
```
cd PATH_TO_YOUR_FOLDER
```

Run clone command:
```
git clone https://github.com/pallada123/hillel-belova-exam.git
```

The default branch is called `main` and becomes active when the project is cloned.

5. Go to the project folder
```
cd hillel-belova-exam
```

6. Install a project dependencies
```
npm install
```

7. Start mongodb server:
In the file manager, go to the folder with installed mongodb, e.g.:
```
c:\Program Files\MongoDB\Server\4.4\bin\
```

In this folder, open a console and run the command:
```
mongod
```
Don't close the console with the mongodb server running while you need to continue working with mongodb.
You can stop it with the "Ctrl+C".

8. In the console, start the node server in the project folder:
```
npm start
```

9. Open in your browser:
http://localhost:3000/
