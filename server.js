// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.post('/submit', async (req, res) => {
    const { nome, email } = req.body;

    try {
      const docRef = await db.collection('dados').doc('RGBLC1Lr4jdIPXOeUEDX').set({
        nome,
        email
      }, { merge: true }); 
  
      res.status(200).json({ message: 'Dados enviados com sucesso!', id: docRef.id });
    } catch (error) {
      console.error("Erro ao adicionar documento: ", error);
      res.status(500).json({ error: "Erro ao processar sua solicitação" });
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = 3000;
  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
