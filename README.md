# Página Romántica "Para Damarys" ❤️

Este proyecto es una sorpresa interactiva para el 14 de febrero, diseñada con una estética de tulipanes y un flujo de acceso seguro.

## Cómo Personalizar la Página

Toda la configuración principal se encuentra en el archivo `src/config.js`.

### Cambiar el nombre secreto
Busca estas líneas en `src/config.js`:
```javascript
  correctName: "Damarys",  // El nombre exacto que debe escribir ella para entrar
  secondaryName: "Dana",   // Un nombre secundario aceptado (apodo)
```

### Cambiar los mensajes
Puedes editar cualquier texto dentro del objeto `messages` en `config.js`. Por ejemplo:
- `welcome`: Título de la pantalla bloqueada.
- `heroSubtitle`: Subtítulo principal de la página.
- `typewriterRef`: La cita romántica que aparece al inicio.

### Cambiar los Videos
Los videos deben estar en la carpeta `public/videos/` (o si ya están en `Dana/videos`, asegúrate de que la ruta sea correcta en `config.js`).
```javascript
  videos: [
    "videos/video1.mp4",
    "videos/video2.mp4",
    // Agrega más rutas aquí
  ]
```

### Cambiar la Ubicación de la Cita
Edita el enlace de Google Maps:
```javascript
  googleMapsLink: "https://www.google.com/maps/...",
```

## Cómo Ejecutar Localmente
1. Abre una terminal en la carpeta `Dana`.
2. Ejecuta `npm install` (si no lo has hecho).
3. Ejecuta `npm run dev`.
4. Abre el enlace que aparece (ej: `http://localhost:5173`).

## Estructura de Archivos
- `src/App.jsx`: Orquestador principal de secciones.
- `src/components/`: Carpeta con todas las piezas interactivas (Tarjeta 3D, Galería, etc.).
- `src/config.js`: Tu panel de control para personalizar todo.
- `public/`: Donde deben ir las imágenes y videos si no se enlazan externamente.

---
¡Espero que le encante la sorpresa! ❤️
