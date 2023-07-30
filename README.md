# CAPI 
CAPI es una herramienta hecha con NextJS el cual ofrece una manera de guardar los Certificados de Escolaridad basados en el minteo de NFT's, proveyendo herramientas para simplificar el proceso de vinculación entre estos y una Wallet de Phantom en el blockchain de Solana.
Está en DevNet.

## Primer paso

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Segundo
El funcionamiento es muy simple, solo necesitas poner un botón al final del curso que hagan tus usuarios de este tipo:
``` jsx
<a href="[https://capi-neon.vercel.app/?
  title=${"Aquí va el título del certificado"}+test&
  user=${"Aquí va el usuario"}&
  issuer=${"Aquí va la empresa que emite el certificado"}&
  img=${"Aquí la referencia en html del certificado que ya genera tu empresa, la imagen no el pdf"}">

`
