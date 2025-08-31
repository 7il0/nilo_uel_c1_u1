const SEED_NOTICIAS = [
    {
        id: '101',
        titulo: 'Frameworks que marcan tendencia',
        resumen: 'Un repaso a las herramientas que aceleran el desarrollo en 2025.',
        categoria: 'programacion',
        imagen: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        autor: 'Equipo NoticiasTech',
        fecha: '2025-07-15',
        contenidoHTML: '<p>Los frameworks modernos priorizan DX, rendimiento y seguridad.</p>'
    },
    {
        id: '102',
        titulo: 'Modelos de IA más eficientes',
        resumen: 'Nuevas técnicas reducen costos de entrenamiento y consumo.',
        categoria: 'ia',
        imagen: 'https://amrop.azureedge.net/cached/7/0/2/d/6/1/702d61578c519309b5a3d75e62e1941ace0f3b9e.jpg',
        autor: 'Ana Pérez',
        fecha: '2025-08-10',
        contenidoHTML: '<p>La optimización de parámetros y el distillation ganan terreno.</p>'
    },
    {
        id: '103',
        titulo: 'Gadgets plegables: ¿madurez del mercado?',
        resumen: 'Los dispositivos plegables consolidan su lugar en el consumidor.',
        categoria: 'gadgets',
        imagen: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
        autor: 'Luis García',
        fecha: '2025-06-21',
        contenidoHTML: '<p>Mejoras en bisagras y pantallas reducen fallas tempranas.</p>'
    },
    {
        id: '104',
        titulo: 'Nuevas prácticas de seguridad',
        resumen: 'Zero-trust y MFA se vuelven estándar en pymes.',
        categoria: 'programacion',
        imagen: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
        autor: 'María López',
        fecha: '2025-05-28',
        contenidoHTML: '<p>La seguridad por defecto llega a más entornos.</p>'
    },
    {
        id: '105',
        titulo: 'IA en el hogar: asistentes más útiles',
        resumen: 'Nuevos casos de uso domésticos más allá del clima y música.',
        categoria: 'ia',
        imagen: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
        autor: 'Equipo NoticiasTech',
        fecha: '2025-04-12',
        contenidoHTML: '<p>Automatización de rutinas, seguridad y eficiencia energética.</p>'
    },
    {
        id: '106',
        titulo: 'Wearables de salud 24/7',
        resumen: 'Sensores más precisos y baterías de larga duración.',
        categoria: 'gadgets',
        imagen: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
        autor: 'Carla Núñez',
        fecha: '2025-03-02',
        contenidoHTML: '<p>Monitoreo continuo con insights más accionables.</p>'
    },

    {
        id: '107',
        titulo: 'Novedades de ECMAScript 2025',
        resumen: 'Qué hay de nuevo en el estándar y cómo adoptarlo.',
        categoria: 'programacion',
        imagen: 'https://miro.medium.com/v2/resize:fit:1400/1*6tJgEt5fXCexHyC4tBWyFw.png',
        autor: 'Diego Castro',
        fecha: '2025-08-25',
        contenidoHTML: '<p>El nuevo estándar introduce mejoras de sintaxis y rendimiento pensadas para apps de gran escala.</p>'
    },
    {
        id: '108',
        titulo: 'IA generativa en educación',
        resumen: 'Casos reales de apoyo a docentes y estudiantes.',
        categoria: 'ia',
        imagen: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        autor: 'Lucía Ramos',
        fecha: '2025-08-18',
        contenidoHTML: '<p>Desde tutores virtuales hasta asistentes de evaluación, la IA transforma el aula.</p>'
    },
    {
        id: '109',
        titulo: 'Auriculares con cancelación inteligente',
        resumen: 'Algoritmos que se adaptan al entorno en tiempo real.',
        categoria: 'gadgets',
        imagen: 'https://images.unsplash.com/photo-1518443895914-6f1f1d2d5b4f',
        autor: 'Equipo NoticiasTech',
        fecha: '2025-07-30',
        contenidoHTML: '<p>Los nuevos chips DSP permiten un nivel de personalización sin precedentes.</p>'
    },
    {
        id: '110',
        titulo: 'CI/CD para frontends modernos',
        resumen: 'Pipelines rápidos con pruebas visuales y predeploy.',
        categoria: 'programacion',
        imagen: 'https://images.unsplash.com/photo-1556157382-97eda2d62296',
        autor: 'Rafael Medina',
        fecha: '2025-07-10',
        contenidoHTML: '<p>Integrar pruebas de regresión visual reduce errores y acelera releases.</p>'
    },
    {
        id: '111',
        titulo: 'Visión por computador en retail',
        resumen: 'Inventario automático y analítica en tiempo real.',
        categoria: 'ia',
        imagen: 'https://images.unsplash.com/photo-1522199710521-72d69614c702',
        autor: 'Sofía León',
        fecha: '2025-06-29',
        contenidoHTML: '<p>Modelos livianos corren en el borde para decisiones más ágiles.</p>'
    },
    {
        id: '112',
        titulo: 'Drones compactos 4K',
        resumen: 'Más autonomía y estabilización avanzada.',
        categoria: 'gadgets',
        imagen: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4',
        autor: 'Pablo Ibarra',
        fecha: '2025-06-12',
        contenidoHTML: '<p>El mercado prosumer crece con opciones portátiles y potentes.</p>'
    },
    {
        id: '113',
        titulo: 'Accesibilidad web en 2025',
        resumen: 'Patrones ARIA y pruebas con usuarios reales.',
        categoria: 'programacion',
        imagen: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
        autor: 'Mariana Ruiz',
        fecha: '2025-05-30',
        contenidoHTML: '<p>Cumplir WCAG 2.2 no es opcional: mejora SEO y UX para todos.</p>'
    },
    {
        id: '114',
        titulo: 'Aprendizaje por refuerzo en el hogar',
        resumen: 'Robots que aprenden tareas domésticas safely.',
        categoria: 'ia',
        imagen: 'https://images.unsplash.com/photo-1581091215367-59ab6b3213b1',
        autor: 'Equipo NoticiasTech',
        fecha: '2025-05-18',
        contenidoHTML: '<p>Simuladores y curricula reducen riesgos en ambientes reales.</p>'
    },
    {
        id: '115',
        titulo: 'Monitores OLED 120Hz para crear y jugar',
        resumen: 'Negros puros y baja latencia en escritorios pro.',
        categoria: 'gadgets',
        imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
        autor: 'Valeria Soto',
        fecha: '2025-05-05',
        contenidoHTML: '<p>Nuevos tamaños ultrawide y mejoras de burn-in extienden su vida útil.</p>'
    },
    {
        id: '116',
        titulo: 'WebAssembly más allá del navegador',
        resumen: 'Casos de uso en edge y serverless.',
        categoria: 'programacion',
        imagen: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87',
        autor: 'Héctor Molina',
        fecha: '2025-04-22',
        contenidoHTML: '<p>WASI abre la puerta a aplicaciones portables y seguras.</p>'
    },
    {
        id: '117',
        titulo: 'Privacidad diferencial aplicada',
        resumen: 'Datos útiles sin exponer identidades.',
        categoria: 'ia',
        imagen: 'https://images.unsplash.com/photo-1556157381-36ec8a686f88',
        autor: 'Camila Vega',
        fecha: '2025-04-08',
        contenidoHTML: '<p>Las técnicas de ruido calibrado llegan a analíticas de producto.</p>'
    },
    {
        id: '118',
        titulo: 'Teclados low-profile para programadores',
        resumen: 'Conmutadores silenciosos y ergonomía mejorada.',
        categoria: 'gadgets',
        imagen: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
        autor: 'Jorge Salinas',
        fecha: '2025-03-20',
        contenidoHTML: '<p>Layouts compactos sin sacrificar productividad ni confort.</p>'
    }
];
