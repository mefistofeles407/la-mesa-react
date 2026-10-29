# La Mesa - Sistema de reservas de restaurante

Proyecto académico de **Desarrollo de Interfaces 2** desarrollado con React, JavaScript y Vite.

## Descripción

La Mesa centraliza la reserva y gestión de mesas de un restaurante ficticio. Incluye dos perspectivas:

- **Cliente:** consulta de disponibilidad, selección de fecha, hora, ambiente y mesas, confirmación mediante adelanto simulado, consulta de reserva, cancelación, solicitud de reembolso y reclamaciones.
- **Administración:** inicio de sesión académico, calendario de reservas, edición y cancelación, gestión operativa de mesas, procesamiento de reembolsos y seguimiento de reclamaciones.

## Funcionalidades principales

- 3 ambientes y 18 mesas.
- Horarios de reserva: 12:00, 13:00, 14:00 y 15:00.
- Adelanto simulado de S/100 por mesa.
- Prevención de duplicaciones por fecha, hora y mesa.
- Mesas libres, ocupadas y con bloqueo administrativo.
- Persistencia local mediante `localStorage`.
- Estados de reserva: Activa y Cancelada.
- Reembolsos: Disponible, Pendiente y Procesado.
- Reclamaciones: Recibida, En revisión y Resuelta.
- Interfaz adaptable a móvil y escritorio.

## Tecnologías utilizadas

- React
- JavaScript y JSX
- Vite
- CSS
- Hooks `useState`, `useEffect` y `useMemo`
- ESLint
- `localStorage`

## Requisitos

- Node.js 20.19 o superior, o una versión compatible posterior.
- npm.
- Navegador moderno.

## Instalación y ejecución

1. Descargar o clonar el proyecto.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir una terminal dentro de la carpeta principal.
4. Instalar dependencias:

```bash
npm install
```

5. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

En PowerShell de Windows, si `npm` está bloqueado, utilizar:

```bash
npm.cmd run dev
```

6. Abrir en el navegador la dirección mostrada por Vite, normalmente `http://localhost:5173/`.

## Compilación de producción

```bash
npm run build
```

En PowerShell de Windows:

```bash
npm.cmd run build
```

La compilación se genera en la carpeta `dist`.

## Acceso administrativo de demostración

- Correo: `admin@lamesa.pe`
- Contraseña: `admin123`

Estas credenciales pertenecen exclusivamente al escenario académico.

## Estructura principal

```text
src/
├── data/
├── features/
│   ├── admin/
│   └── cliente/
├── hooks/
├── shared/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Persistencia y datos

El proyecto no utiliza backend ni base de datos externa. Para la demostración académica, las reservas, mesas y reclamaciones se guardan en el almacenamiento local del navegador.

Para reiniciar los datos de prueba, abre las herramientas del navegador, elimina los datos de almacenamiento local del sitio y actualiza la página.

## Alcance

La aplicación cubre reservas y gestión de mesas. No incluye pagos bancarios reales, delivery, pedidos, cocina, inventario, facturación fiscal ni contabilidad.

## Integrantes

- Amadeo Eusebio Moisés Cárdenas Palomino
- Integrante 2: completar
- Integrante 3: completar

## Evidencias relacionadas

- Prototipo interactivo en Figma.
- Informe de pruebas de usabilidad.
- Código fuente React.
- Compilación de producción.
- Documentación académica y sustentación técnica.
