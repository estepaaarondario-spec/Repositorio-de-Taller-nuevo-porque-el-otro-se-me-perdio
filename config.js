// Configuración de la muestra de proyectos.
// Mientras "firebase.projectId" esté vacío, la página funciona en modo de prueba (datos solo en este navegador).
// Para compartir los proyectos entre todos, completá los datos de Firebase (ver README, paso 2).
window.APP_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // Clave del "modo docente": permite editar/borrar cualquier proyecto y cambiar los colores. ¡Cambiala!
  adminPin: "cambiame",
  // Colores iniciales (después se pueden cambiar desde la página en modo docente).
  colors: { c1: "#d4a017", c2: "#6f4e37" },
  // Sectores: clave interna -> nombre visible
  courses: { "1ra": "5to 1ra", "2da": "5to 2da" }
};
