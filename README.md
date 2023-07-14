<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

  
# WhatsApp Bot App

Esta es una aplicación de chatbot basada en WhatsApp desarrollada con Nest.js y la librería whatsapp-web.js. El bot permite interactuar con los usuarios a través de mensajes de WhatsApp y realizar acciones como enviar mensajes, recibir respuestas y realizar consultas a una base de datos.

## Características

- Generación dinámica de código QR para iniciar sesión en WhatsApp.
- Envío y recepción de mensajes de WhatsApp.
- Integración con una base de datos MySQL utilizando Sequelize.
- Soporte para enviar mensajes a través de Telegram.

## Instalación

1. Clona el repositorio: git clone 
  gh repo clone nicoriver9/NESTJS-Whatsapp-Telegram-Bot

2. Instala las dependencias:
  cd whatsapp-bot-app
  npm install

3. Configura la base de datos:

- Crea una base de datos MySQL.
- Copia el archivo `.env.example` y renómbralo a `.env`.
- Edita el archivo `.env` y proporciona los valores de configuración de tu base de datos.

4. Inicia la aplicación:
  npm start

## Uso

Una vez que la aplicación esté en funcionamiento, sigue estos pasos:

1. Abre tu navegador y ve a la URL [http://localhost:3000](http://localhost:3000).
2. Escanea el código QR generado para iniciar sesión en WhatsApp.
3. Comienza a enviar mensajes a través de WhatsApp y el bot responderá según la lógica de programación definida.

## Contribución

Las contribuciones son bienvenidas. Si tienes alguna idea o mejora para la aplicación, por favor abre un issue o envía una pull request.

## Licencia

Esta aplicación está licenciada bajo [MIT License](https://opensource.org/licenses/MIT).
