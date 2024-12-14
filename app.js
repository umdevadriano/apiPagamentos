// Importando dependências
const express = require('express');
// const { initializeApp, applicationDefault } = require('firebase-admin/app');
// const { getFirestore } = require('firebase-admin/firestore');

// Inicializando o Firebase Admin
// initializeApp({
//   credential: applicationDefault(),
// });

// Criando uma instância do Firestore
// const db = getFirestore();

// Inicializando o Express
const app = express();
// Porta em que o servidor irá ouvir
const PORT = process.env.PORT || 3000;


// Middleware para interpretar JSON
app.use(express.json());

// Nome da coleção no Firestore
const COLLECTION_NAME = 'items';

// Rota para incluir um novo item
app.post('/', async (req, res) => {
    try {
    res.send('tudo certo por aqui')
    } catch (error) {
      res.status(500).json({ message: 'error.', error: error.message });
    }
  });

// Rota para incluir um novo item
app.post('/items', async (req, res) => {
  try {
    const newItem = req.body;
    // const docRef = await db.collection(COLLECTION_NAME).add(newItem);
    res.status(201).json({ id: docRef.id, message: 'Item incluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao incluir item.', error: error.message });
  }
});

// Rota para alterar um item existente
app.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = req.body;
    // await db.collection(COLLECTION_NAME).doc(id).set(updatedItem, { merge: true });
    res.json({ message: 'Item alterado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao alterar item.', error: error.message });
  }
});

// Rota para excluir um item
app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // await db.collection(COLLECTION_NAME).doc(id).delete();
    res.json({ message: 'Item excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir item.', error: error.message });
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
