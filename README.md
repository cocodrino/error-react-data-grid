# LEER

en las acciones hay un submitJSON que simula una llamada a una api, usa redux thunks para poder
funcionar de manera asincrona

En store puedes ver que se está usando redux dev tool,
en chrome instalar redux dev tool y abrirlo, eso proporciona
una herramienta ideal para ver cómo cambia el estado, los dispatcher, etc

Hay un ejemplo de css module en el componente Message.js
este permite escribir css exclusivo para el componente, de manera que no
colisione con otro componente, también hace más sencillo exportar el componente con su
estilo a diferentes proyectos

se puede usar tailwind, en caso de querer eliminarlo completamente
cambiar el script de run del package.json a

```
 "start": "react-scripts start",
```

eliminar tailwind.css y tailwind.src.css de la carpeta css/ y borrar la linea
de index.js

```js
import './css/tailwind.css';
```

## BREVE GUIA PARA AGREGAR FUNCIONALIDADES

Cuando desees agregar nuevas funcionalidades debes crear una constante
en constants/actions, este va a ser el nombre con el que te vas a referir a
la accion en state/actions/index.js, por ejemplo OBTENER_USUARIOS

luego creas la acción, que no es
mas que una función que retorna un mensaje {type:ACTION.OBTENER_USUARIOS...}

finalmente en el reducer indicas como se modifica el objeto state cuando se reciba esa acción

### SETUP

1. descargar el proyecto
2. correr dentro de la carpeta _npm install_
3. correr _npm start_
4. abrir el navegador en el puerto 3000

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
