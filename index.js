const axios = require('axios');
const notionToken = 'tu_token_de_integracion';

const notion = axios.create({
    baseURL: 'https://api.notion.com/v1/',
    headers: {
      'Authorization': `Bearer ${notionToken}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2021-05-13' // Cambia la versión de la API según sea necesario
    }
  });

  async function obtenerBasesDeDatos() {
    try {
      const response = await notion.get('databases');
      console.log(response.data);
    } catch (error) {
      console.error('Error al obtener las bases de datos:', error);
    }
  }
  
  obtenerBasesDeDatos();
  