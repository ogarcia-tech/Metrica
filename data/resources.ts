
export interface Resource {
  id: number;
  title: string;
  category: 'Guía' | 'Herramienta' | 'Caso de Éxito';
  description: string;
  image: string;
  link: string;
  date: string;
  slug: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Manual de Independencia de OTAs 2026',
    category: 'Guía',
    description: 'Cómo reducir la dependencia de Booking y Expedia en un 40% en 6 meses usando tácticas de Gremio.',
    image: 'https://picsum.photos/seed/manuscript/800/600',
    link: '#',
    date: 'Marzo 2026',
    slug: 'manual-independencia-otas-2026'
  },
  {
    id: 2,
    title: 'Calculadora de Margen Neto Real',
    category: 'Herramienta',
    description: 'Excel avanzado para calcular el coste real de adquisición por canal, incluyendo comisiones ocultas.',
    image: 'https://picsum.photos/seed/abacus/800/600',
    link: '#',
    date: 'Febrero 2026',
    slug: 'calculadora-margen-neto-real'
  },
  {
    id: 3,
    title: 'Caso: Hotel Boutique vs El Algoritmo',
    category: 'Caso de Éxito',
    description: 'Cómo un hotel de 20 habitaciones en Mallorca duplicó su venta directa en una temporada.',
    image: 'https://picsum.photos/seed/castle/800/600',
    link: '#',
    date: 'Enero 2026',
    slug: 'caso-hotel-boutique-mallorca'
  },
  {
    id: 4,
    title: 'Optimización de Motores de Reserva (BE)',
    category: 'Guía',
    description: 'Tácticas psicológicas para reducir el abandono en el checkout de tu motor de reservas.',
    image: 'https://picsum.photos/seed/gears/800/600',
    link: '#',
    date: 'Diciembre 2025',
    slug: 'optimizacion-motores-reserva'
  }
];
