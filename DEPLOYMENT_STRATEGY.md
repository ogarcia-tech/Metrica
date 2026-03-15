# Estrategia de Despliegue y Oferta de Agentes IA - METRICA.ONE

Este documento detalla el protocolo para desplegar los 3 niveles de servicio del Arsenal Turístico y la metodología para ofrecer los agentes de IA como pieza central de la infraestructura.

---

## 1. Despliegue de los 3 Servicios (Protocolo de Implementación)

### Nivel 1: INFRAESTRUCTURA (The Foundation)
*   **Fase 1: Auditoría y Conexión (Semana 1-2)**
    *   Mapeo de la arquitectura actual (PMS, Channel Manager, Motor de Reservas).
    *   Identificación de "fugas de margen" (reservas que deberían ser directas y caen en OTAs).
    *   Configuración del motor de reservas directo con disparadores de escasez y prueba social.
*   **Fase 2: Activación del Agente IA Nivel 1 (Semana 2)**
    *   Entrenamiento con el "Knowledge Base" del hotel (FAQs, servicios, horarios, políticas).
    *   Despliegue en Web y WhatsApp para resolución de dudas 24/7.
*   **Fase 3: Medición Base (Semana 3-4)**
    *   Establecimiento de métricas de control (Coste por Reserva Directa vs Comisión OTA).

### Nivel 2: ACELERADOR (The Growth Engine)
*   **Fase 1: Optimización de Ventas IA (Semana 1-2)**
    *   Upgrade del Agente a Nivel 2: Capacidad de consultar disponibilidad real y pre-reservar.
    *   Entrenamiento en técnicas de Upselling (ofrecer mejores habitaciones o servicios extra).
*   **Fase 2: Motor de Tráfico Internacional (Semana 2-4)**
    *   Lanzamiento de campañas en Google Ads (Search/Hotel Ads) y Meta Ads.
    *   Segmentación por mercados emisores de alto valor (UK, DACH, Escandinavia).
*   **Fase 3: Inteligencia de Negocio (Semana 4+)**
    *   Despliegue del Dashboard de Margen Real: Integración de datos de inversión publicitaria y facturación neta.

### Nivel 3: ELITE (Full Gremio)
*   **Fase 1: Blindaje de Cliente (Mes 1-2)**
    *   Implementación de sistemas de retención: Automatización de correos/WhatsApp post-estancia.
    *   Creación de ofertas exclusivas para "Clientes del Gremio" (fidelización directa).
*   **Fase 2: Revenue Algorítmico (Mes 2-3)**
    *   Activación de la IA de Revenue Management para ajuste dinámico de precios según demanda y competencia.
*   **Fase 3: Consultoría de Alto Nivel (Continuo)**
    *   Sesiones mensuales de optimización estratégica con los Vasallos Senior.

---

## 2. Cómo Ofrecer los Agentes de IA (Sales Playbook)

Los agentes de IA no son "chatbots", son **empleados digitales de alto rendimiento**. Así es como deben venderse:

### El Ángulo de Venta: "El Recepcionista que nunca duerme y habla 5 idiomas"
*   **Problema:** El 70% de las dudas de los turistas ocurren fuera del horario de oficina o en idiomas que el personal no domina con fluidez.
*   **Solución:** Un agente que responde en <2 segundos, en el idioma del cliente, y que conoce cada rincón del hotel.

### Diferenciación por Niveles de Agente:

#### Agente Nivel 1: El Informador Experto
*   **Qué hace:** Responde dudas complejas, envía fotos de las habitaciones, explica cómo llegar, da recomendaciones locales.
*   **Valor:** Libera al personal de recepción de tareas repetitivas y evita que el cliente se vaya a Booking a buscar la información.

#### Agente Nivel 2: El Cerrador Proactivo
*   **Qué hace:** Consulta el PMS en tiempo real. Si el cliente duda, ofrece un incentivo (ej. "Si reservas ahora, el desayuno es cortesía de Métrica").
*   **Valor:** Convierte el tráfico web en reservas firmes sin intervención humana.

#### Agente Nivel 3: El Concierge de Lujo
*   **Qué hace:** Gestiona peticiones especiales, hace upselling de servicios (spa, cenas, transfers) y fideliza al cliente durante su estancia.
*   **Valor:** Maximiza el gasto por huésped (RevPAR) de forma automática.

### Argumento de Cierre (ROI)
*"Un recepcionista nocturno multilingüe cuesta miles de euros al mes. Nuestro agente cuesta una fracción, no se cansa, no comete errores y cierra ventas mientras tú duermes. No es un gasto, es una infraestructura que se paga sola con las primeras 3 reservas directas que antes perdías."*

---

## 3. Stack Técnico y Costes de IA (Nivel Ingeniería)

Para desplegar agentes de este nivel, no usamos herramientas "no-code" limitadas. Usamos un stack de grado militar para asegurar latencia mínima y razonamiento máximo.

### El Stack de Métrica.One:
*   **Orquestación:** LangGraph / Vercel AI SDK (para flujos de trabajo cíclicos y persistencia de estado).
*   **Modelos de Razonamiento (Cerebro):**
    *   **Claude 3.5 Sonnet:** Nuestro estándar para atención al cliente por su tono humano y seguimiento estricto de instrucciones.
    *   **GPT-5.4 (Preview):** Para tareas de Revenue Management y análisis de datos complejos.
    *   **Gemini 3.1 Pro / Flash:** Para procesamiento de contextos masivos (ej. leer 50 manuales de hotel en segundos) y baja latencia.
*   **Memoria y RAG (Base de Conocimiento):** Supabase (pgvector) o Pinecone para búsqueda semántica de información del hotel.
*   **Voz (Opcional):** Vapi + ElevenLabs (Latencia <800ms para recepción telefónica).
*   **Integración:** Webhooks personalizados hacia PMS (Cloudbeds, Mews, Opera) vía Make.com o Node.js.

### Estimación de Costes Operativos (IA):
*   **Nivel 1 (Informador):** ~0.01€ - 0.05€ por conversación (usando modelos optimizados como Gemini Flash).
*   **Nivel 2 (Cerrador):** ~0.10€ - 0.30€ por conversación (requiere modelos con mayor razonamiento para manejar objeciones).
*   **Nivel 3 (Revenue/Elite):** Basado en volumen de tokens de análisis, suele rondar los 50€-100€/mes de API para una propiedad media.

---

## 4. Despliegue por Buyer Persona (Pasos Específicos)

### A. Hotel Boutique / Agroturismo
*   **Foco:** Reducción de comisiones OTA.
*   **Paso 1:** Extraer FAQs de las últimas 500 reseñas de Booking.
*   **Paso 2:** Conectar el Agente al motor de reservas (ej. Roiback, Mirai).
*   **Paso 3:** Configurar el "Incentivo de Reserva Directa" (ej. Late check-out automático si reserva vía IA).

### B. Charter de Lujo / Yates
*   **Foco:** Cualificación de High-Ticket.
*   **Paso 1:** Configurar el Agente para preguntar: Nº de personas, fechas, presupuesto y tipo de evento.
*   **Paso 2:** Integración con calendario de tripulación y disponibilidad de flota.
*   **Paso 3:** Transferencia inmediata a humano vía WhatsApp si el lead es >10.000€.

### C. Real Estate Turístico (Villas/Inversión)
*   **Foco:** Captación de HNI (High Net Worth Individuals).
*   **Paso 1:** Entrenamiento en leyes locales, impuestos y rentabilidad por zona.
*   **Paso 2:** Perfilado del inversor (IA hace las preguntas de filtrado inicial).
*   **Paso 3:** Agendamiento automático de visita física o videollamada con el broker.

---

## 5. Cómo hacerlo: El Proceso de Despliegue

1.  **Discovery (Día 1-3):** Entrevista con el equipo de operaciones para entender los "puntos de dolor" y extraer el conocimiento no escrito.
2.  **Ingesta de Datos (Día 4-7):** Subida de PDFs, webs, y normativas a la base de conocimiento vectorial.
3.  **Prompt Engineering (Día 8-12):** Definición de la personalidad del agente (El "Tono Métrica": Profesional, servicial, pero orientado a la venta).
4.  **Integración Técnica (Día 13-20):** Conexión de APIs y Webhooks con el software del cliente (PMS/CRM).
5.  **Shadowing & Testing (Día 21-25):** El agente responde en un entorno de pruebas. Corregimos "alucinaciones".
6.  **Go-Live (Día 30):** Lanzamiento oficial y monitorización de las primeras 100 conversaciones.

---

## 6. Librería de "Prompts Maestros" (System Instructions)

El éxito de la IA reside en su "programación lingüística". Aquí los cimientos de nuestros agentes:

### A. El Prompt de Identidad (Tono & Estilo)
> "Eres el Concierge Digital de [Nombre del Hotel]. Tu tono es sofisticado, cálido y extremadamente eficiente. No eres un robot, eres un experto local. Si el cliente pregunta en inglés, respondes en inglés; si es en alemán, en alemán. Prioriza siempre la reserva directa. Si detectas que el cliente viene de Booking, menciona sutilmente: 'Reservando directamente con nosotros ahora, puedo asegurarte un detalle de bienvenida que las plataformas externas no ofrecen'."

### B. El Prompt de Manejo de Objeciones (Precio)
> "Si el cliente menciona que ha visto un precio más bajo en una OTA: 'Entiendo perfectamente. Sin embargo, nuestra tarifa directa no solo iguala el precio en condiciones reales, sino que incluye [Desayuno/Late Check-out/Upgrade] y garantiza que tu habitación sea de las de planta alta con mejores vistas. ¿Te gustaría que bloquee esta oferta para ti ahora mismo?'"

---

## 7. Framework de Upselling Algorítmico

La IA no solo atiende, **maximiza el ticket medio**.

*   **Detección de Intención:** Si el cliente pregunta por "restaurantes cerca", la IA responde: "Hay excelentes opciones, pero nuestro Chef ha preparado un menú degustación esta noche que es la joya de la zona. ¿Te reservo una mesa para las 21:00?"
*   **Trigger de Celebración:** Si el cliente menciona "aniversario" o "cumpleaños", la IA dispara: "¡Qué maravilla! Podemos preparar una botella de champagne y pétalos en la habitación por solo 45€. ¿Lo añadimos a tu estancia?"
*   **Upgrade de Último Minuto:** 24h antes de la llegada, el agente envía un WhatsApp: "Hola [Nombre], tenemos una Suite con vistas al mar disponible por solo 30€ más de lo que pagaste. ¿Hacemos el cambio?"

---

## 8. Guía Técnica de Integración con PMS (Deep Dive)

Para que la IA sea autónoma, debe "leer" y "escribir" en el corazón del hotel.

### Flujo de Datos:
1.  **Consulta de Disponibilidad:** La IA envía `GET /availability` al PMS vía API (Mews/Cloudbeds).
2.  **Bloqueo Temporal:** Si el cliente avanza, la IA ejecuta un `POST /hold` para evitar overbooking durante la conversación.
3.  **Creación de Reserva:** Una vez confirmado el pago (vía Stripe integrado en el chat), la IA envía `POST /reservation` con todos los datos del huésped.

### Mapeo de Campos Críticos:
*   `guest_id`: Vinculado al número de teléfono de WhatsApp.
*   `source`: Etiquetado como "METRICA_DIRECT" para el Dashboard de Inteligencia.
*   `notes`: La IA inserta un resumen de la conversación (ej. "Cliente prefiere almohadas de pluma").

---

## 9. Protocolo de "Voz" (AI Voice Receptionist)

Transformamos la centralita telefónica en un centro de beneficios.

*   **Stack:** Vapi (Orquestación) + ElevenLabs (Voz: 'Kore' o 'Fenrir' para tono premium) + Deepgram (Transcripción ultra-rápida).
*   **Lógica de Desvío:**
    *   Consultas estándar -> Resuelve la IA.
    *   Cancelaciones/Quejas -> Desvío a humano con resumen previo en pantalla.
    *   Reservas VIP (>2000€) -> Desvío prioritario a Dirección Comercial.

---

## 10. Manual de Cumplimiento Legal y GDPR Turístico

La seguridad es la base de la confianza.

1.  **Anonimización:** Antes de enviar datos a LLMs (OpenAI/Anthropic), nuestro middleware filtra nombres reales y tarjetas de crédito.
2.  **Consentimiento:** El primer mensaje de WhatsApp siempre incluye: "Al continuar, aceptas nuestra política de privacidad. Solo usamos tus datos para gestionar tu estancia."
3.  **Almacenamiento:** Los datos sensibles se quedan en el servidor local o Supabase (EU-West), nunca en los logs de la IA.

---

## 11. Calculadora de ROI y Ahorro de Comisiones

Argumentario financiero para el dueño del hotel:

*   **Fórmula de Ahorro:** `(Nº Reservas Recuperadas de OTA) x (Tarifa Media) x (0.18 de Comisión media)`
*   **Ejemplo:** Un hotel de 20 habitaciones que mueve 30 reservas/mes al canal directo ahorra ~1.200€/mes solo en comisiones, cubriendo el coste del servicio ACELERADOR en el primer mes.

---

## 12. Onboarding Checklist para el Cliente (Día 1)

Para que los Vasallos empiecen la ingesta, el cliente debe entregar:

- [ ] **Acceso API al PMS/Channel Manager.**
- [ ] **Manual de Identidad de Marca** (o descripción del tono deseado).
- [ ] **PDFs de Menús, Servicios de Spa y Actividades.**
- [ ] **Listado de FAQs** (Preguntas que recepción responde 10 veces al día).
- [ ] **Credenciales de Meta Business Suite y Google Ads.**
- [ ] **Política de Cancelación y Condiciones Generales.**

---

## 14. Identidad Visual y Lore del Gremio

Para que la marca **Métrica.One** sea inolvidable, hemos creado un universo visual "Cyber-Medieval" que proyecta autoridad, misterio y alta tecnología.

### Estética Base:
*   **Colores:** Negro Mate, Carbón, Naranja Vibrante (#FF5F00), Cian Eléctrico.
*   **Atmósfera:** Brutalista, alto contraste, iluminación cinematográfica, interfaces holográficas.

### Los 6 Vasallos (Lore & Prompts):

1.  **El Arquitecto de Reservas (Estratega)**
    *   **Montura:** Halcón de Datos (Data Falcon).
    *   **Lore:** El visionario que mapea el territorio enemigo (OTAs).
    *   **Prompt:** `Cinematic portrait of a futuristic guild strategist. Cyber-medieval aesthetic. Matte black cloak with glowing orange hexagonal patterns. Glowing orange visor. Holding a holographic 3D map of the Balearic Islands. Dark brutalist background.`

2.  **El Centinela de Datos (Analista)**
    *   **Montura:** Esfinge de Cristal (Crystal Sphinx).
    *   **Lore:** Guardián de la verdad estadística. Nada escapa a su monocle de datos.
    *   **Prompt:** `Technical expert in charcoal suit with glowing cyan fiber-optic seams. High-tech monocle displaying data overlays. Surrounded by floating orange holographic charts. Dark industrial laboratory.`

3.  **El Alquimista de Conversión (Creativo)**
    *   **Montura:** Camaleón de Píxeles (Pixel Chameleon).
    *   **Lore:** Transmuta la atención del usuario en oro (reservas) mediante hipnosis visual.
    *   **Prompt:** `Visual wizard in glowing orange and black robes. Manipulating a sphere of liquid light and pixels. Hands glowing with orange energy. Dark creative studio with neon cyan accents.`

4.  **El Heraldo de Mercados (Tráfico)**
    *   **Montura:** Pantera de Sombras (Shadow Panther).
    *   **Lore:** El explorador que encuentra nuevos reinos (mercados internacionales) para conquistar.
    *   **Prompt:** `Tactical explorer in matte black gear with glowing orange highlights. Looking through a digital telescope at a horizon of glowing data points. Dark expansive landscape.`

5.  **El Guardián del Margen (Revenue)**
    *   **Montura:** Tortuga de Hierro (Iron Turtle).
    *   **Lore:** El escudo inquebrantable contra las comisiones abusivas.
    *   **Prompt:** `Powerful defender in heavy matte black armor with glowing orange shields. Standing in front of a vault door made of glowing data lines. Brutalist architecture.`

6.  **El Oráculo de la IA (Automatización)**
    *   **Montura:** Golem de Silicio (Silicon Golem).
    *   **Lore:** La voz de la inteligencia artificial que trabaja mientras el mundo duerme.
    *   **Prompt:** `Ethereal figure in flowing silver robes with integrated glowing orange fiber optics. Hands surrounded by orange energy particles. Interacting with a complex holographic interface of floating code.`

---

## 13. Inbound Marketing y Cualificación de Leads

El sistema no solo sirve a los clientes actuales, sino que actúa como un imán de nuevos prospectos de alto valor.

### A. Estrategia de Contenidos (Blog/Guías)
*   **SEO de Intención:** Publicamos guías técnicas sobre "Cómo reducir comisiones de Booking" o "IA para Hoteles Boutique".
*   **Lead Magnets:** Recursos descargables (Calculadoras de ROI, Checklists de Onboarding) protegidos por un formulario de captación.

### B. Cualificación Automática vía IA
Cuando un lead descarga un recurso, la IA inicia un protocolo de cualificación:
1.  **Enriquecimiento:** La IA busca el dominio del hotel para entender su tamaño, estrellas y ubicación.
2.  **Contacto Proactivo (WhatsApp):** "Hola [Nombre], he visto que has descargado la Calculadora de Margen. ¿Te gustaría que te ayudara a interpretar los datos de tu hotel?"
3.  **Filtrado (BANT):**
    *   **Budget:** ¿Tiene presupuesto para infraestructura de alto ticket?
    *   **Authority:** ¿Es el dueño o director de operaciones?
    *   **Need:** ¿Su dependencia de OTAs es >40%?
    *   **Timeline:** ¿Quiere implementar cambios antes de la próxima temporada?

### C. Nutrición (Nurturing)
Si el lead no está listo para comprar, entra en un flujo de "Inteligencia Semanal" donde recibe casos de éxito y actualizaciones del Gremio, manteniendo a **Métrica.One** como su referente de autoridad hasta que el dolor de las comisiones sea insoportable.
