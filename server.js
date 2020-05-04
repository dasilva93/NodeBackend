const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.post('/api/auth/ingresar', (req, res) => {
  res.json({
    id: 2,
    username: "user@correo.com",
    roles: [],
    tokenType: "Bearer",
    accessToken: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGNvcnJlby5jb20iLCJpYXQiOjE1ODg2Mjk3NDEsImV4cCI6MTU4ODcxNjE0MX0.eSggthL1YwUAQo5rLM_aoEIgs_eke3_75zSWj8X2NxjjnlkslSuhT2K_Fp6aTRB9wDI_4dc_4bAGctV6qThttg"
  });
});

app.post('/api/auth/registarUsuario', (req, res) => {
  res.json({message: "Usuario Registrado Correctamente!"})
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});