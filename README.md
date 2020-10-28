# Aplicacion react de pruebas
```1) Ejecute el archivo ScriptBaseDatos en una base de datos MySql, versiones mas recientes.```

```2) Primero clone este repositiorio, los comandos a continuacion asumen estar siendo ejecutados dentro de la carpeta de su computador donde clono este repo```
## Abra una ventana de terminal o git en la carpeta de la aplicacion clonada antes con git clone desde este repositorio y ejecute los comandos
```cd frontend```
```npm install```
```npm start```

## Abra otra ventana de terminal o git en la carpeta de la aplicacion clonada antes con git clone desde este repositorio y ejecute los comandos
```cd backend```
```mvn spring-boot:run```

## La url de swagger docs en su instalacion local es:
http://localhost:8080/swagger-ui.html

## La url del frontend es:
http://localhost:3000

Software requerido:

Node.JS 10 o superior

NPM

React (ultimas versiones)

Visual Studio Code (ultimas versiones)

Java JDK 11

Maven 5

MySQL Database ultimas versiones

MySQL Workbench ultimas versiones

Posibles problemas:

(Se asume lo siguiente para entornos windows, donde fue probada la aplicacion)

Ud podria tener estos problemas al intentar ejecutar la aplicacion:

1) el backend no compila: 

Revise su JAVA_HOME en las variables de entorno, debe ser JDK y con java version 11

Revise si tiene instalado maven, ademas de MAVEN_HOME y M2_HOME en sus variables de entorno

Agregue al path de las variables de entorno la ruta de maven y su JDK 11 de java

Verifique que las dependencias del archivo pom.xml de maven en la carpeta backend son las correctas (fue validado ya) y ademas que no tengan bugs de ser necesario.

En caso de no aparecer una causa clara del error puede ejecutar maven con opcion debug o verbose y usar comandos de unix (dentro de consola git para windows) para por ejemplo pasar la salida del comando a un archivo de texto con grep para revisar los errores posteriormente.

2) La aplicacion compila

Fue testeada con visual studio code sobre windows, por lo que necesita extensiones habilitadas en VSCode.

Extensiones Java para visual studio code

Extensiones React para visual studio code

Extensiones Spring Boot para visual studio code

Extensiones Swagger (Open-Api) para visual studio code

Extensiones GIT para visual studio code
