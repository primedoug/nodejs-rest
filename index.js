const customExpress = require('./config/customexpress.js');
const app = customExpress();

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));