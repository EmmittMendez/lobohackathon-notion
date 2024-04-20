//Version preliminar de la integracion de la API de Notion con MongoDB

const axios = require('axios');
const notionToken = 'secret_pyVoAaO6MX1gSZXmXgaTfzqVGqLOYp7ZKX4XfuQ1qzR';

const notion = axios.create({
    baseURL: 'https://api.notion.com/NoteHub_Comunity/',
    headers: {
      'Authorization': `Bearer ${notionToken}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2021-05-13' //Cambia la versión de la API según sea necesario
    }
  });

  //Base de datos de Notion
  async function obtenerBasesDeDatos() {
    try {
      const response = await notion.get('databases');
      console.log(response.data);
    } catch (error) {
      console.error('Error al obtener las bases de datos:', error);
    }
  }
  obtenerBasesDeDatos();


/*Base auxiliar (MongoDB)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/estudiantes', {useNewUrlParser: true, useUnifiedTopology: true});

const EstudianteSchema = new mongoose.Schema({
  nombre: String,
  contenido: String,
  //Entre otros
});

const Estudiante = mongoose.model('Estudiante', EstudianteSchema);

async function guardarContenidoEstudiante(nombre, contenido) {
  const estudiante = new Estudiante({ nombre, contenido });
  try {
    await estudiante.save();
    console.log('Contenido guardado con éxito');
  } catch (error) {
    console.error('Error al guardar el contenido:', error);
  }
}

//Prueba la función de guardar contenido
guardarContenidoEstudiante('Juan', 'Contenido de prueba');*/
  