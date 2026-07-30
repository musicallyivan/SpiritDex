# 🌀 SpiritDex

<p align="center">
  <b>Tu colección definitiva de espíritus.</b>
</p>

<p align="center">
  Una aplicación web para gestionar, organizar y completar una colección de espíritus con un sistema de variantes, niveles, maestrías y estadísticas.
</p>

---

## 🌟 Sobre el proyecto

**SpiritDex** es una aplicación tipo enciclopedia de colección creada con React y TypeScript.

Permite registrar el progreso de una colección de espíritus, gestionar sus variantes, controlar niveles y maestrías, consultar estadísticas y exportar colecciones.

El objetivo es crear una experiencia visual similar a una colección de videojuego, con una interfaz moderna y preparada para seguir creciendo.

---

# ✨ Características

## 🌀 Gestión de espíritus

- Lista completa de espíritus.
- Sistema de colección personal.
- Marcar espíritus como:

  - ✅ Conseguido
  - 💀 Perdido
  - ❤️ Favorito

- Sistema de niveles.
- Sistema de maestría.
- Guardado automático del progreso.

---

## 🎨 Sistema de variantes

Cada espíritu puede tener diferentes versiones:

- Normal
- Oro
- Galaxia
- Gominola
- Gema
- Holográfico
- Cubo
- Y más variantes futuras

El sistema está preparado para añadir nuevas variantes mediante datos sin modificar componentes.

---

## 🔎 Filtros y búsqueda

Incluye:

- Buscar por nombre.
- Filtrar por elemento.
- Filtrar por rareza.
- Filtrar por estado:

  - Todos
  - Conseguidos
  - Perdidos
  - Favoritos
  - Maestrías completadas

---

## 📊 Estadísticas

Panel de estadísticas con:

- Espíritus conseguidos.
- Porcentaje de colección completada.
- Maestrías completadas.
- Espíritus favoritos.
- Espíritus perdidos.

---

## 🖼️ Exportación de colección

Sistema para crear imágenes de la colección:

- Exportación en PNG.
- Diferentes tamaños.
- Fondos configurables.
- Estadísticas incluidas.

---

## 💾 Copias de seguridad

Sistema de backup:

- Exportar colección en JSON.
- Importar colección.
- Restaurar progreso fácilmente.

---

# 🖥️ Modos de visualización

## 🎮 Vista moderna

Vista mediante tarjetas:

- Imagen del espíritu.
- Información básica.
- Nivel.
- Maestría.
- Estados personales.

---

## 📦 Vista colección

Diseño compacto para consultar muchos espíritus rápidamente.

---

## 📋 Vista variantes

Tabla completa para revisar todas las variantes disponibles.

---

# 🛠️ Tecnologías utilizadas

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

## Estado

- Zustand
- Persistencia local

## Librerías

- React Router
- html-to-image

## Despliegue

- GitHub Pages

---

# 📂 Estructura del proyecto

```
src
│
├── components
│   ├── dashboard
│   ├── export
│   ├── layout
│   └── sprites
│
├── data
│   └── spirits.ts
│
├── models
│   ├── Spirit.ts
│   └── UserSpirit.ts
│
├── store
│
├── utils
│
└── pages
    ├── Home
    ├── Collection
    ├── Statistics
    ├── Export
    └── Settings
```

---

# 🚀 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/TU-USUARIO/SpiritDex.git
```

Entrar en la carpeta:

```bash
cd SpiritDex
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

---

# 🏗️ Crear versión de producción

Compilar proyecto:

```bash
npm run build
```

Previsualizar:

```bash
npm run preview
```

---

# 🌍 Publicación

El proyecto está preparado para GitHub Pages.

Para publicar:

```bash
npm run deploy
```

---

# 🗺️ Roadmap

## Completado

✅ Sistema de colección  
✅ Sistema de variantes  
✅ Filtros avanzados  
✅ Estadísticas  
✅ Exportación PNG  
✅ Backup e importación JSON  
✅ Diseño responsive  

---

## Próximas mejoras

⬜ Logo propio de SpiritDex  
⬜ Sistema multidioma 🇪🇸 🇬🇧  
⬜ Nuevas animaciones  
⬜ Más estadísticas avanzadas  
⬜ Nuevos tipos de colección  
⬜ Temas visuales personalizados  
⬜ Sistema de perfiles  

---

# 🎨 Diseño

SpiritDex utiliza una identidad visual propia inspirada en interfaces de videojuegos de colección.

Características del diseño:

- Tema oscuro.
- Tarjetas dinámicas.
- Colores vivos.
- Interfaz limpia.
- Experiencia tipo álbum coleccionable.

---

# 📸 Capturas

Próximamente:

- Página principal.
- Colección.
- Estadísticas.
- Exportador.

---

# 👨‍💻 Autor

Creado por **MusicallyIvan**

Proyecto personal desarrollado con:

React + TypeScript + Vite

---

# 📄 Licencia

Proyecto personal.

Los recursos visuales pertenecen a sus respectivos propietarios.