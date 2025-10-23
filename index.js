const express = require('express');
const cuentasRoutes = require('./routes/cuentasRoutes');

const app = express();
const PORT = 3130;

app.use(express.json());
app.use('/', cuentasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto:${PORT}`);
});