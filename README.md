# AWS_traductor

![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)


## Introducción
Pequeña función creada para poder traducir distintos textos que se le son enviados desde un idioma **entrada** a un idioma **salida**. Dichos idiomas entrada y salida deben ser especificados en el body que se le envía.

## Tecnologias usadas
- Node
- AWS Lambda
- AWS Translate
- AWS API Gateway

## Peticion
Le recomendamos servicios como Postman o Thunder Client ( una extension de vs code ) para poder probar dicha funcion.

### Post
Para poder obtener un texto traducido. Hay que enviar el siguiente RequestBody
```
{
  "texto": "Hola",
  "entrada": "es",
  "salida": "en"
}
```
_El anterior RequestBody es solo un ejemplo, puede cambiarle el texto o los idiomas de entrada y salida por los que usted quiera._
</br> 
A la siguiente dirección:
```
https://rbt2ufmwb3.execute-api.us-east-2.amazonaws.com/test/test
```
A continuación se recibirá un mensaje como el siguiente:
```
{
  "statusCode": 200,
  "headers": {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  },
  "traduccion": "Hello"
}
```
