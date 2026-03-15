
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  resource?: {
    title: string;
    type: string;
    description: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'independencia-otas-2026',
    title: 'La Gran Traición: Por qué tu Channel Manager te está costando un 15% de margen',
    excerpt: 'Analizamos cómo los algoritmos de paridad están diseñados para favorecer a la plataforma, no a tu hotel.',
    category: 'Estrategia',
    author: 'El Maestre',
    date: '10 Mar 2026',
    readTime: '7 min',
    image: 'https://picsum.photos/seed/betrayal/1200/800',
    content: `
      <p>El mercado ha cambiado. Lo que antes era una relación de simbiosis con las OTAs se ha convertido en una extracción sistemática de valor. En este artículo desglosamos las tácticas de "Ingeniería del Margen" que estamos aplicando en el Gremio para recuperar el control.</p>
      <h2>El Mito de la Paridad</h2>
      <p>La paridad de precios es una jaula de oro. Mientras tú mantienes el mismo precio en todos los canales, las OTAs juegan con programas de fidelización y descuentos móviles que tú no controlas.</p>
      <blockquote>"La verdadera paridad no existe cuando el intermediario controla la interfaz de usuario."</blockquote>
      <h2>Tácticas de Guerrilla Digital</h2>
      <p>Para combatir esto, necesitamos implementar capas de valor que la OTA no pueda replicar. No se trata solo de precio, se trata de la experiencia post-reserva y la captura de datos en el primer contacto.</p>
    `,
    resource: {
      title: 'Checklist de Auditoría de Canales',
      type: 'PDF Exclusivo',
      description: '15 puntos críticos para detectar fugas de margen en tu distribución actual.'
    }
  },
  {
    id: 'psicologia-reserva-directa',
    title: 'Psicología de la Escasez: Cómo hackear el cerebro del viajero moderno',
    excerpt: 'Más allá del "Solo queda 1 habitación". Tácticas psicológicas para aumentar la conversión directa.',
    category: 'Marketing',
    author: 'Vasallo Senior',
    date: '05 Mar 2026',
    readTime: '5 min',
    image: 'https://picsum.photos/seed/psychology/1200/800',
    content: `
      <p>¿Por qué Booking.com es tan efectivo? No es solo tecnología, es psicología aplicada al límite. En Métrica.One hemos decodificado estos patrones para aplicarlos al canal directo sin parecer spam.</p>
      <h2>Sesgos Cognitivos en el Travel</h2>
      <p>El sesgo de anclaje y la aversión a la pérdida son tus mejores aliados si sabes cómo presentarlos en tu motor de reservas.</p>
    `,
    resource: {
      title: 'Guía de Copywriting Disruptivo',
      type: 'Ebook',
      description: 'Frases y estructuras que disparan la urgencia en el proceso de reserva.'
    }
  },
  {
    id: 'ia-automatizacion-hotelera',
    title: 'IA Generativa: Dejando de responder correos para empezar a generar ingresos',
    excerpt: 'Cómo la automatización con LLMs está ahorrando 20 horas semanales a los equipos de recepción.',
    category: 'Tecnología',
    author: 'Oráculo IA',
    date: '01 Mar 2026',
    readTime: '10 min',
    image: 'https://picsum.photos/seed/ai-robot/1200/800',
    content: `
      <p>La IA no va a reemplazar a tu equipo, pero el equipo que use IA reemplazará al que no la use. Estamos viendo una revolución en la gestión de la atención al cliente y la personalización de ofertas.</p>
      <h2>Agentes Autónomos</h2>
      <p>No hablamos de chatbots básicos. Hablamos de agentes que entienden el contexto, el sentimiento y pueden cerrar ventas complejas en 12 idiomas diferentes.</p>
    `,
    resource: {
      title: 'Framework de Automatización',
      type: 'Blueprint',
      description: 'Mapa de herramientas para automatizar el 80% de tus tareas repetitivas.'
    }
  }
];
