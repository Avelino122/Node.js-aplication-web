// pages/api/submit.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const db = require('../../firebase'); 
      const { nome, email } = req.body;
      
      try {
        const docRef = await db.collection('dados').add({
          nome,
          email,
          timestamp: new Date(),
        });
  
        return res.status(200).json({ message: 'Dados adicionados com sucesso!', id: docRef.id });
      } catch (error) {
        console.error('Erro ao salvar no Firestore', error);
        return res.status(500).json({ message: 'Erro ao processar sua solicitação', error });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
  