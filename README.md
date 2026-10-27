# Muestra de Proyectos · 5.º año

Página compartida donde los estudiantes de **5to 1ra** (dorado) y **5to 2da** (marrón) suben sus proyectos con imagen y descripción. Todo se guarda para todos y se actualiza en vivo.

## Paso 1 · Publicar en GitHub

1. Creá un repositorio (por ejemplo `proyectos-5to`) y subí `index.html`, `config.js`, `firestore.rules` y `README.md`.
2. **Settings → Pages → Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. En un minuto estará en `https://TU-USUARIO.github.io/proyectos-5to/`.

Sin el paso 2 la página funciona, pero en modo de prueba: los datos quedan solo en cada navegador.

## Paso 2 · Base de datos compartida (Firebase, plan gratuito)

1. Entrá a <https://console.firebase.google.com> con una cuenta de Google y creá un proyecto (podés desactivar Analytics).
2. Menú **Compilación → Firestore Database → Crear base de datos**. Elegí una ubicación cercana y el modo **producción**.
3. Pestaña **Reglas**: pegá el contenido de `firestore.rules` y tocá **Publicar**.
4. **Configuración del proyecto** (rueda dentada) → **Tus apps** → ícono web `</>` → registrá la app y copiá los valores de `firebaseConfig`.
5. Pegá esos valores en `config.js`, en la sección `firebase`, y subí el archivo a GitHub.

No hace falta activar Storage: las imágenes se achican automáticamente y se guardan dentro de cada proyecto.

## Cómo se usa

- **Agregar:** botón *+ Agregar proyecto* de cada sector. Se completan título, integrantes, descripción, link (opcional), imagen desde la computadora y una **clave del proyecto**.
- **Editar / borrar:** piden la clave del proyecto. Con ella se puede cambiar todo, incluso la imagen o el sector.
- **Modo docente:** botón arriba a la derecha, con la clave `adminPin` de `config.js` (¡cambiala!). Permite editar o borrar cualquier proyecto y abre el botón **Colores**.
- **Colores:** en modo docente, elegí el color de cada sector; se guarda para todos. El color del texto se ajusta solo para que se lea bien.

## Límites a tener en cuenta

- Las claves protegen contra errores y bromas dentro del aula, pero no son seguridad fuerte: este tipo de página no tiene servidor propio. No se recomienda para datos personales sensibles.
- El plan gratuito de Firebase (Spark) tiene cuotas diarias y de almacenamiento que alcanzan de sobra para un curso; consultá los valores vigentes en la página de precios de Firebase.
- Las imágenes se limitan a unos 600 KB cada una después de la compresión.

## Créditos

Tipografía Poppins (Google Fonts). Base de datos: Firebase Firestore.
