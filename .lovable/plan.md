## Cambio solicitado

En la página de detalle de cada servicio (`/servicios/$slug`), la figura 3D del hero (lado derecho) se ve desproporcionadamente ampliada y cortada. Se eliminará.

## Archivos a modificar

**`src/routes/servicios.$slug.tsx`** — en la sección hero, reemplazar el contenedor derecho que renderiza el `<Service3DIcon>` escalado x2.4 por un panel decorativo limpio con el gradiente del servicio (mismo color/accent), bordes redondeados y un sutil patrón/halo. Sin figura 3D dentro.

El resto del hero (breadcrumb, título, descripción, botones) y las demás secciones (Lo que incluye, Cómo trabajamos, Otros servicios, Contacto) se mantienen sin cambios.

## Resultado

El hero del detalle muestra el texto a la izquierda y un panel con gradiente azul oscuro / claro a la derecha (acorde a la paleta `#0f1e36` / `#f1f5f9`), sin la figura 3D recortada.
