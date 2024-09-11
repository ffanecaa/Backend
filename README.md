# Localización de Elementos Patrimoniales de Galicia

Este proyecto es una aplicación web cuyo objetivo principal es localizar más de **30,000 elementos patrimoniales de Galicia**, incluidos todos los **Bienes de Interés Cultural (BIC)**. La aplicación ofrece a los usuarios herramientas de filtrado por tipología, nombre y ubicación geográfica, además de funciones de geolocalización para facilitar la visita a estos elementos.

## Funcionalidades Principales

- **Búsqueda y Filtrado**: Los usuarios pueden buscar y filtrar los elementos patrimoniales por:
  - **Tipología**: Clasificación de los elementos (monumentos, paisajes, etc.).
  - **Nombre**: Búsqueda por el nombre exacto o parcial del elemento.
  - **Ubicación Geográfica**: Filtrar elementos según su proximidad o ubicación específica en Galicia.

- **Geolocalización**: Los usuarios pueden localizar elementos patrimoniales visitables dentro de un radio de **30 km** de su posición actual.
  
- **Cálculo de Ruta**: Se ofrece la funcionalidad de calcular la **ruta óptima** para llegar a los elementos seleccionados en el mapa interactivo.

## Estado del Proyecto

El proyecto está **funcional**, permitiendo a los usuarios buscar, visualizar y geolocalizar elementos patrimoniales. Sin embargo, debido a la magnitud de los datos y la complejidad de la implementación, el proyecto **está incompleto**. Algunas características avanzadas y optimizaciones aún no se han implementado, y el sistema puede expandirse significativamente en futuras fases de desarrollo.

## Tecnologías Utilizadas

### Frontend

- **[Svelte](https://svelte.dev/)**: Utilizado para el desarrollo del frontend por su eficiencia y facilidad de uso. Svelte compila los componentes directamente a JavaScript puro, eliminando la sobrecarga del framework en tiempo de ejecución.
  
- **[Leaflet](https://leafletjs.com/)**: Biblioteca utilizada para la visualización de **mapas interactivos**. Permite la renderización eficiente de los elementos patrimoniales en un mapa, con herramientas para geolocalización y creación de rutas.

### Backend

- **[Express.js](https://expressjs.com/)**: Framework de Node.js utilizado para la creación de una API RESTful, manejando la lógica de servidor y la interacción con la base de datos.
  
- **[Sequelize](https://sequelize.org/)**: ORM (Object Relational Mapper) utilizado para gestionar la base de datos. Garantiza una manipulación segura y eficiente de los datos patrimoniales, facilitando las consultas y operaciones en la base de datos.

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona el repositorio:

   ```bash   -frontend
   git clone(https://github.com/ffanecaa/Frontend.git)
             - backend
   https://github.com/ffanecaa/Backend.git
