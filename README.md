<h1 align="center">
	<img src="https://cdn-icons-png.flaticon.com/512/2636/2636428.png" alt="Cloud" width="200">
	<br> Reserve-Enpoint <br/>
    v.1.0.1
</h1>

<span>
    Reserve-Enpoint es una API de código abierto para el consumo de la api para la reserva de uno o varios tipos de hoteles dependiendo de las caracteristicas que busca el usuario
</span>
<br/>
<br/>

# Tabla de Contenidos
* [Herramientas Necesarias](#herramientas-necesarias)
* [Clonar Repositorio del Proyecto](#clonar-repositorio-del-proyecto)
* [Instalación dependencias del Proyecto](#instalación-dependencias-del-proyecto)
* [Ejecución en Modo Local](#ejecución-en-modo-local)
* [Ejecución en Modo Docker](#ejecución-en-modo-docker)
* [Justificación de Endpoints](#justificación-de-endpoints)
* [Cofiguración del Postman](#cofiguración-del-postman)
* [Autor](#autor)
<br/>

## Herramientas Necesarias
| Nombre  | Versión  | 
| :------------: | :------------: |
| Visual Studio (Opcional) o Editor de Código Favorito  | La más Reciente   |
| Node.JS  | > 14.0.0   |
| Docker | La más Reciente |
| Git  | La más Reciente |
| Postman (Opcional)  | La más Reciente |
<br/>

## Clonar Repositorio del Proyecto
1. Abrir tu Terminal Bash o cmd 
2. Copiar la el siguiente comando en su terminal: `git clone https://github.com/CyberLas/reserve-enpoint"`
3. Esperar la descarga del Repositorio
4. Ingresar al repositorio y Seguir los pasos de **Instalación del Proyecto**
<br/>

## Instalación dependencias del Proyecto
1. En la propia carpeta del proyecto abrir tu terminal 
2. Copiar la el siguiente comando en su terminal: `npm install`
3. Esperar que se descarguen la dependencias necesarias para el proyecto
4. Realizar el paso de Ejecución Local
<br/>

## Ejecución en Modo Local
1. Ingresar a la carpeta del proyecto 
2. Cambiar el nombre del archivo `.env_example` a `.env`
2. Ejecutar el proyecto con el comando `npm run dev`
<br/>

## Ejecución en Modo Docker
1. Ingresar a la carpeta del proyecto 
2. Cambiar el nombre del archivo `.env_example` a `.env`
2. Ejecutar el proyecto con el comando `docker-compose up -d`
<br/>

## Justificación de Endpoints
1. GET -> `/hotel` : Para que el usuario pueda ver lista general de los hoteles que se encuentran dentro de la aplicación.
2. POST -> `/hotel` : Para que el usuario filtre por un filtro y ver sus caracteristicas y si se encuentra dentro de lo que busca.
3. GET -> `/client` : Para que un usuario administrado pueda verificar los datos y saber que usuario hace la reservación.
4. POST -> `/client` : Para que usuario administrado pueda buscar y realizar la
5. POST -> `/facture` : Para visualizar el estado actual de la reserva
6. POST -> `/reserve` : Para que el pueda cambiar el estado a `pendiente`
7. PUT -> `/reserve` :  Para que el pueda cambiar el estado a `pagado`
8. DEL -> `/reserve` : Para que el pueda cambiar el estado a `eliminado`
<br/>

## Cofiguración del Postman
1. Abrir su postman.
2. Crear un nuevo Espacio de Trabajo.
![image](https://user-images.githubusercontent.com/33170529/187094916-72f55390-90df-4160-b5bc-4ac54050cf0d.png)

3. Luego Dirigirse a exportar y seleccionar el Archivo `reserve-endpoint.json`
![image](https://user-images.githubusercontent.com/33170529/187095041-d6bd9a47-4b98-4f1b-aeaf-3154c6e47085.png)

4. Si se hizo bien la exportación saldra de esta forma:
![image](https://user-images.githubusercontent.com/33170529/192026589-cb8d935a-bb7b-4475-b299-63289fa95c76.png)
<br/>

## Autor
* [CyberLas](https://github.com/CyberLas) - **Carlos Angeles**<<cyberlas@outlook.com>>