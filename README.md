# CAPI 
CAPI es una herramienta hecha con NextJS el cual ofrece una manera de guardar los Certificados de Escolaridad basados en el minteo de NFT's, proveyendo herramientas para simplificar el proceso de vinculación entre estos y una Wallet de Phantom en el blockchain de Solana.
Está en DevNet.

Puedes utilizar [este enlace](https://main.dg4250ennog5l.amplifyapp.com/?title=Next+curso+completo&user=Elian+German&issuer=google&img=https%3A%2F%2Fmedia.sproutsocial.com%2Fuploads%2F2017%2F02%2F10x-featured-social-media-image-size.png) para comprobar su funcionamiento, desplegado en Amplify de AWS.


## Primer paso para su ejecución local

```bash
npm i
npm run dev
```

## Segundo paso
El funcionamiento es muy simple, solo necesitas poner un botón al final del curso que hagan tus usuarios de este tipo (La imagen recomendamos que no mida más de 500px x 500px):

```jsx
import React from 'react';

const title = "Aquí va el título del certificado";
const user = "Aquí va el usuario";
const issuer = "Aquí va la empresa que emite el certificado";
const imgHREF = "Aquí la referencia en html del certificado que ya genera tu empresa, la imagen no el pdf";

const MyComponent = () => {
  return (
    <a href={`[https://capi-neon.vercel.app/?
      title=${title}+test&
      user=${user}&
      issuer=${issuer}&
      img=${imgHREF}`}
    >
  );
};

export default MyComponent;

