/**
 * Contenido editable del sitio.
 *
 * Todos los textos marcados como "// EDITAR" son borradores pensados para
 * que el cliente los revise y ajuste con su propia voz — no son textos
 * finales. Los datos de contacto, redes e imágenes son placeholders hasta
 * tener la información real.
 */
import {
  CarouselImage,
  FaqItem,
  Material,
  NavLink,
  SocialLink,
} from '../models/content.model';

export const NAV_LINKS: NavLink[] = [
  { label: 'Corte y grabado', target: 'corte-grabado' },
  { label: 'Impresión 3D', target: 'impresion-3d' },
  { label: 'Modelado 3D', target: 'modelado-3d' },
  { label: 'Materiales', target: 'materiales' },
  { label: 'Preguntas frecuentes', target: 'faq' },
];

// EDITAR: reemplazar por el teléfono y los enlaces reales del cliente.
export const CONTACT_PHONE = '+54 9 11 0000-0000';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'WhatsApp', href: '#', icon: 'whatsapp' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
];

// EDITAR: texto de referencia sobre corte y grabado láser, a revisar con el cliente.
export const CORTE_GRABADO_TEXT = `El corte y grabado láser es una técnica de fabricación digital que usa un haz de luz de alta precisión para cortar o marcar distintos materiales —madera, acrílico, cuero, cartón— siguiendo un diseño vectorial. A diferencia del corte manual, permite piezas idénticas entre sí, detalles muy finos y terminaciones prolijas, ya sea para un cartel, una pieza decorativa, un llavero personalizado o un prototipo funcional.`;

export const CORTE_GRABADO_IMAGES: CarouselImage[] = [
  { src: 'assets/images/corte/placeholder-1.svg', alt: 'Pieza cortada en MDF' },
  { src: 'assets/images/corte/placeholder-2.svg', alt: 'Grabado láser sobre madera' },
  { src: 'assets/images/corte/placeholder-3.svg', alt: 'Detalle de corte en acrílico' },
  { src: 'assets/images/corte/placeholder-4.svg', alt: 'Llavero de cuero grabado' },
];

// EDITAR: texto de referencia sobre impresión 3D, a revisar con el cliente.
export const IMPRESION_3D_TEXT = `La impresión 3D fabrica objetos capa por capa a partir de un modelo digital, sin moldes ni matrices. Esto permite crear piezas con geometrías complejas, prototipos funcionales, repuestos a medida o productos personalizados en distintos materiales y colores, con tiempos y costos mucho más accesibles que la fabricación tradicional para tiradas cortas.`;

export const IMPRESION_3D_IMAGES: CarouselImage[] = [
  { src: 'assets/images/impresion3d/placeholder-1.svg', alt: 'Pieza impresa en 3D' },
  { src: 'assets/images/impresion3d/placeholder-2.svg', alt: 'Prototipo funcional impreso en 3D' },
  { src: 'assets/images/impresion3d/placeholder-3.svg', alt: 'Detalle de capas de impresión 3D' },
];

// EDITAR: texto de referencia sobre modelado 3D, a revisar con el cliente.
export const MODELADO_3D_TEXT = `Antes de imprimir o cortar, cada pieza se diseña digitalmente en 3D. Este proceso permite ajustar medidas, probar encastres y anticipar el resultado final antes de fabricar, evitando errores y ahorrando material.`;

// EDITAR: reemplazar por la URL del video que envíe el cliente (por ejemplo,
// un archivo en assets/videos/ o un embed de YouTube/Vimeo).
export const MODELADO_3D_VIDEO_SRC = '';

export const MATERIALES_INTRO = 'EN QUÉ LO CORTO';

export const MATERIALES: Material[] = [
  {
    name: 'MDF',
    description: 'Cálido y noble. Es el que más me piden, y el que mejor toma el grabado.',
    image: 'assets/images/materiales/mdf.svg',
  },
  {
    name: 'Acrílico',
    description: 'Canto pulido, brilla en el borde.',
    image: 'assets/images/materiales/acrilico.svg',
  },
  {
    name: 'Cuero PU',
    description: 'Para llaveros y etiquetas.',
    image: 'assets/images/materiales/cuero-pu.svg',
  },
  {
    name: 'Cartón gris',
    description: 'Maquetas y prototipos rápidos, antes de comprometer material caro.',
    image: 'assets/images/materiales/carton-gris.svg',
  },
];

export const MATERIALES_NOTA =
  'Sumo materiales seguido. Si el tuyo no está en la lista, preguntame igual.';

// EDITAR: preguntas y respuestas de ejemplo — a completar con el cliente.
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Cuánto tarda un pedido?',
    answer: 'Placeholder — completar con el tiempo de producción real según el tipo de pedido.',
  },
  {
    question: '¿Hacen envíos?',
    answer: 'Placeholder — completar con las zonas de envío y los costos.',
  },
  {
    question: '¿Puedo enviar mi propio diseño?',
    answer: 'Placeholder — completar con los formatos de archivo aceptados y el proceso.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Placeholder — completar con los medios de pago disponibles.',
  },
  {
    question: '¿Hacen pedidos personalizados o por mayor?',
    answer: 'Placeholder — completar con la política de personalización y cantidades mínimas.',
  },
];
