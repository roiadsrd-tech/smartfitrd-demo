import React, { useState, useEffect } from 'react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';
import { ArrowRight, ArrowLeft, ArrowUpRight, Instagram, MapPin, Clock, ShieldCheck, Dumbbell, Activity, Flame, Users, Check } from 'lucide-react';

const BRAND = {
  name: 'Smart Fit RD',
  handle: '@smartfitrd',
  tagline: 'La red de gimnasios más grande de Latinoamérica en República Dominicana',
  instagramUrl: 'https://www.instagram.com/smartfitrd/',
  city: 'Santo Domingo, República Dominicana',
  coordinates: "18°28'35\"N 69°53'42\"W",
  hours: 'Lun–Vie 5:00 a 23:00 · Sáb 7:00 a 18:00 · Dom 8:00 a 16:00',
  logo: './media/logo_real.jpg',
  stats: [
    { label: 'Sedes en Santo Domingo', value: '08' },
    { label: 'Capacidad de Carga Técnica', value: '120 kg/m²' },
    { label: 'Superficie Promedio por Sede', value: '3.000 m²' },
    { label: 'Equipos Biomecánicos Calibrados', value: '100%' }
  ]
};

const SERVICES = [
  {
    number: '01',
    code: 'FZR · 01',
    title: 'Musculación & Peso Integrado',
    slug: 'musculacion-fuerza',
    kicker: 'Biomecánica y Potencia',
    shortDesc: 'Estaciones guiadas convergentes y área de peso libre calibrado para aislamiento muscular puro sin sobrecarga articular indebida.',
    fullDesc: 'La zona de musculación de Smart Fit RD está diseñada bajo principios biomecánicos rigurosos. Cada estación cuenta con trayectorias convergentes y divergentes que respetan el arco articular del cuerpo humano, permitiendo alcanzar una hipertrofia muscular profunda con total seguridad. Contamos con torres de poleas regulables, bancos con fijación técnica y mancuernas de poliuretano de alta resistencia.',
    challenge: 'Eliminar el riesgo de lesiones causadas por maquinarias descalibradas y desbalances de carga.',
    specs: [
      { label: 'Torres de Carga', val: 'Hasta 250 kg de resistencia progresiva' },
      { label: 'Ergonomía', val: 'Levas excéntricas con soporte lumbar dinámico' },
      { label: 'Superficie', val: 'Piso técnico vulcanizado de 25 mm anti-rebote' }
    ],
    features: [
      {
        title: 'Trayectoria Articular Natural',
        desc: 'El diseño biomecánico guía el rango completo de movimiento sin torsiones descompensadas.'
      },
      {
        title: 'Mancuernas de Alta Precisión',
        desc: 'Pesos calibrados en incrementos controlados para una sobrecarga progresiva real.'
      },
      {
        title: 'Mantenimiento Preventivo Semanal',
        desc: 'Inspección técnica continua de rodamientos, cables de acero y poleas de baja fricción.'
      }
    ],
    photos: ['./media/post_3.jpg', './media/post_12.jpg']
  },
  {
    number: '02',
    code: 'FNC · 02',
    title: 'Área de Ejercicios Funcionales',
    slug: 'entrenamiento-funcional',
    kicker: 'Potencia y Agilidad',
    shortDesc: 'Espacio despejado con piso amortiguante, rigs modulares, trineos y kettlebells para aceleración metabólica y fuerza multiplanar.',
    fullDesc: 'El sector funcional desafía tu rendimiento físico en todas las dimensiones del movimiento: empujar, jalar, rotar y estabilizar. Equipado con pistas de aceleración en césped sintético, estructuras metálicas rígidas para calistenia, wall balls y elásticos de resistencia, proporciona el entorno ideal para sesiones de acondicionamiento de alta demanda metabólica.',
    challenge: 'Superar el estancamiento de los entrenamientos estáticos mediante dinamismo neuromuscular.',
    specs: [
      { label: 'Estructuras', val: 'Rigs modulares con acero de 3 mm de espesor' },
      { label: 'Tracción', val: 'Pista de césped sintético para arrastre de trineo' },
      { label: 'Accesorios', val: 'Kettlebells de acero fundido y balones pliométricos' }
    ],
    features: [
      {
        title: 'Potencia en Múltiples Planos',
        desc: 'Entrena cadenas musculares integradas y refuerza la estabilidad del núcleo central.'
      },
      {
        title: 'Acondicionamiento Metabólico',
        desc: 'Incremento sostenido del consumo de oxígeno (VO2 máx) y aceleración de gasto calórico.'
      },
      {
        title: 'Flexibilidad de Rutina',
        desc: 'Entornos versátiles adaptables para circuitos HIIT, pliometría y movilidad activa.'
      }
    ],
    photos: ['./media/post_2.jpg']
  },
  {
    number: '03',
    code: 'CRD · 03',
    title: 'Circuito Cardiovascular Avanzado',
    slug: 'circuito-cardiovascular',
    kicker: 'Resistencia Aeróbica',
    shortDesc: 'Cintas de trote con absorción activa, elípticas sincronizadas y ergómetros con telemetría de esfuerzo en tiempo real.',
    fullDesc: 'Nuestro parque cardiovascular combina ingeniería de absorción progresiva que reduce hasta un 40% del impacto sobre rodillas y tobillos con monitoreo en pantalla. Monitorea vatios, cadencia, frecuencia cardíaca y gasto calórico en un ambiente climatizado continuamente a 21°C con flujo de aire presurizado.',
    challenge: 'Prevenir el desgaste articular en corredores frecuentes y optimizar el rendimiento cardiovascular.',
    specs: [
      { label: 'Amortiguación', val: 'Plataforma flotante con elastómeros de densidad variable' },
      { label: 'Monitoreo', val: 'Sensores de telemetría y ritmo cardíaco en tiempo real' },
      { label: 'Climatización', val: 'Flujo de aire presurizado a 21°C constantes' }
    ],
    features: [
      {
        title: 'Protección para Ligamentos',
        desc: 'Superficie de absorción progresiva que disipa el estrés en cada zancada.'
      },
      {
        title: 'Métricas de Precisión en Vivo',
        desc: 'Control exhaustivo de cadencia, gradiente, vatios generados y zonas de frecuencia.'
      },
      {
        title: 'Equipos de Alta Densidad',
        desc: 'Disponibilidad constante de máquinas para que nunca tengas que esperar tu turno.'
      }
    ],
    photos: ['./media/post_8.jpg', './media/post_11.jpg']
  },
  {
    number: '04',
    code: 'GRP · 04',
    title: 'Salón de Clases & Ritmos Colectivos',
    slug: 'clases-grupales',
    kicker: 'Energía Colectiva',
    shortDesc: 'Sesiones dirigidas por instructores certificados en salones con tarima flotante, acústica balanceada e iluminación adaptativa.',
    fullDesc: 'La fuerza de la comunidad se une a la precisión técnica en nuestras clases dirigidas. Con programas como Smart Shape, Fit Dance, Abdomen y Yoga, experimentarás sesiones estructuradas para desafiar tus límites dentro de salones equipados con tarima técnica anti-impacto y sistemas de sonido acústicamente equilibrados.',
    challenge: 'Vencer la falta de constancia y desmotivación en rutinas solitarias mediante dinámica grupal.',
    specs: [
      { label: 'Pavimento', val: 'Tarima técnica flotante de absorción multidireccional' },
      { label: 'Sonorización', val: 'Sistema de audio insonorizado de alta definición' },
      { label: 'Instructores', val: 'Entrenadores certificados con formación continua' }
    ],
    features: [
      {
        title: 'Dinámica de Alta Motivación',
        desc: 'El impulso colectivo y el ritmo musical potencian el rendimiento en cada intervalo.'
      },
      {
        title: 'Supervisión Técnica Personalizada',
        desc: 'Corrección postural y ajustes de intensidad según la condición física de cada miembro.'
      },
      {
        title: 'Piso Flotante Articular',
        desc: 'Absorbe los saltos y desplazamientos laterales para proteger tendones y meniscos.'
      }
    ],
    photos: ['./media/post_4.jpg']
  }
];

const LOCATIONS = [
  {
    name: 'Sede Churchill',
    zone: 'Distrito Nacional',
    address: 'Av. Winston Churchill esq. Paseo de los Locutores',
    type: 'Mega Gimnasio Biomecánico',
    photo: './media/post_5.jpg',
    specs: '3 Niveles · Área Funcional · Parking Subterráneo'
  },
  {
    name: 'Sede Naco',
    zone: 'Distrito Nacional',
    address: 'Calle Graciela Guanahani, Ensanche Naco',
    type: 'Instalación de Alto Rendimiento',
    photo: './media/post_6.jpg',
    specs: 'Zona de Pesos Libres · Estudio de Clases · Lockers Pro'
  },
  {
    name: 'Sede Downtown Center',
    zone: 'Distrito Nacional',
    address: 'Av. Núñez de Cáceres esq. Rómulo Betancourt',
    type: 'Centro Fitness Premium',
    photo: './media/post_7.jpg',
    specs: 'Parque Cardio Extendido · Rigs Funcionales · Climatizado'
  },
  {
    name: 'Sede La Esperilla',
    zone: 'Distrito Nacional',
    address: 'Av. México esq. Pedro Henríquez Ureña',
    type: 'Sede Urbana Integral',
    photo: './media/post_9.jpg',
    specs: 'Circuito Isocinético · Duchas Calientes · Seguridad 24/7'
  },
  {
    name: 'Sede Plaza Lama 27',
    zone: 'Distrito Nacional',
    address: 'Av. 27 de Febrero esq. Winston Churchill',
    type: 'Sede Estratégica Central',
    photo: './media/post_10.jpg',
    specs: 'Acceso Directo Vía Principal · Zona HIIT · Vestuarios'
  }
];

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [activeLocation, setActiveLocation] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Multi-page Hash Routing Resolver
  const currentServiceSlug = route.startsWith('#/servicios/')
    ? route.replace('#/servicios/', '')
    : null;

  const currentService = currentServiceSlug
    ? SERVICES.find((s) => s.slug === currentServiceSlug)
    : null;

  if (currentService) {
    return <ServiceDetailView service={currentService} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white selection:bg-[#FF1923] selection:text-white">
      {/* 1. TOP MINIMALIST NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0B0E]/85 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="container-fluid flex items-center justify-between h-20">
          <a href="#/" className="flex items-center gap-3 group">
            <img
              src={BRAND.logo}
              alt={BRAND.name}
              className="w-9 h-9 object-cover border border-white/20 group-hover:border-[#FF1923] transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-display font-black tracking-tight text-lg text-white group-hover:text-[#FF1923] transition-colors uppercase">
                {BRAND.name}
              </span>
              <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                República Dominicana
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#disciplinas" className="text-white/70 hover:text-white transition-colors tracking-wide">
              Disciplinas
            </a>
            <a href="#ingenieria" className="text-white/70 hover:text-white transition-colors tracking-wide">
              Ingeniería
            </a>
            <a href="#sedes" className="text-white/70 hover:text-white transition-colors tracking-wide">
              Sedes Santo Domingo
            </a>
            <a href="#filosofia" className="text-white/70 hover:text-white transition-colors tracking-wide">
              Filosofía
            </a>
          </nav>

          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FF1923] hover:bg-[#D90F18] text-white text-xs font-semibold px-4 py-2.5 transition-all duration-200 tracking-wider uppercase font-mono"
          >
            <Instagram size={14} />
            <span>Únete en IG</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <main>
        {/* SECTION 1: FULL-BLEED CINEMATIC HERO */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-end pt-24 pb-12 overflow-hidden border-b border-white/10">
          {/* Background Media with Calibrated Scrim */}
          <div className="absolute inset-0 z-0">
            <img
              src="./media/post_1.jpg"
              alt="Atletas en entrenamiento de alto rendimiento en Smart Fit RD"
              className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
            />
            <div className="absolute inset-0 scrim-hero" />
          </div>

          <div className="container-fluid relative z-10 w-full">
            <div className="max-w-5xl mb-8">
              <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-[#FFD200] uppercase mb-4">
                <span className="w-2 h-2 bg-[#FF1923]" />
                <span>SANTO DOMINGO · {BRAND.coordinates}</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white uppercase mb-6">
                ALTO RENDIMIENTO SIN CONCESIONES.
              </h1>

              <p className="font-body text-base sm:text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-8">
                La red de gimnasios más grande de Latinoamérica en República Dominicana. Biomecánica de precisión, amplias zonas de entrenamiento y equipamiento de última generación al alcance de todos.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#FF1923] hover:bg-[#D90F18] text-white px-7 py-4 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200"
                >
                  <span>Inscríbete en {BRAND.name}</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#disciplinas"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-4 font-mono text-xs font-medium uppercase tracking-widest transition-colors backdrop-blur-sm"
                >
                  <span>Explorar Disciplinas</span>
                </a>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/15 font-mono text-xs">
              {BRAND.stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {s.value}
                  </span>
                  <span className="text-white/50 text-[11px] uppercase tracking-wider mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: DISCIPLINAS & ZONAS TÉCNICAS (CONTRAST SHIFT TO PRISTINE LIGHT) */}
        <section id="disciplinas" className="bg-[#FFFFFF] text-[#111215] py-24 sm:py-32 border-b border-black/10">
          <div className="container-fluid">
            {/* Editorial Section Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-black/10">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs tracking-[0.2em] text-[#FF1923] uppercase font-bold">
                  01 // CAPACIDADES DEL SISTEMA
                </span>
                <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#111215] uppercase mt-2">
                  DISCIPLINAS & ÁREAS DE ENTRENAMIENTO
                </h2>
              </div>
              <div className="lg:col-span-4 text-sm text-[#5E6068] font-body leading-relaxed">
                Cuatro zonas especializadas estructuradas para maximizar el estímulo metabólico, la fuerza muscular y la salud cardiovascular sin pérdidas de tiempo.
              </div>
            </div>

            {/* Technical 4-Column Grid with Hairline Dividers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-black/10 mt-12">
              {SERVICES.map((service, idx) => (
                <div
                  key={service.slug}
                  className="flex flex-col justify-between p-8 border-r border-b border-black/10 hover:bg-[#F9F9FA] transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <BespokeServiceIcon
                        title={service.title}
                        category={service.kicker}
                        index={idx}
                        size={48}
                      />
                      <span className="font-mono text-xs tracking-widest text-[#5E6068] font-bold">
                        {service.code}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111215] uppercase tracking-tight mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#5E6068] leading-relaxed mb-6 font-body">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-black/5 mt-auto">
                    <a
                      href={`#/servicios/${service.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FF1923] group-hover:text-[#D90F18] uppercase tracking-wider transition-colors"
                    >
                      <span>Conocer más</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: INGENIERÍA DEL RENDIMIENTO & TECHNICAL SCHEMATIC (CONTRAST TO DEEP DARK) */}
        <section id="ingenieria" className="bg-[#0A0B0E] text-white py-24 sm:py-32 border-b border-white/10">
          <div className="container-fluid">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs tracking-[0.2em] text-[#FFD200] uppercase font-bold">
                  02 // MODULACIÓN & ARQUITECTURA ESPACIAL
                </span>
                <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase mt-2">
                  INGENIERÍA DEL RENDIMIENTO
                </h2>
              </div>
              <div className="lg:col-span-4 text-sm text-white/60 font-body leading-relaxed">
                Cada metro cuadrado está optimizado para garantizar distancias de seguridad ergonómicas, absorción estructural y flujo continuo de atletas.
              </div>
            </div>

            {/* Technical Schematic Blueprint Component */}
            <div className="border border-white/15 bg-[#121419] p-4 sm:p-8">
              <TechnicalSchematic />
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 font-mono text-xs">
              <div className="p-6 border border-white/10 bg-[#121419]/50">
                <span className="text-[#FF1923] text-sm font-bold block mb-1">01 / CAPACIDAD</span>
                <p className="text-white text-base font-bold font-display uppercase mb-2">120 KG/M² EN PISO</p>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  Refuerzo estructural anti-impacto en zonas de levantamiento pesado y peso muerto.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-[#121419]/50">
                <span className="text-[#FF1923] text-sm font-bold block mb-1">02 / ERGONOMÍA</span>
                <p className="text-white text-base font-bold font-display uppercase mb-2">1.20 M RADIO DE GIRO</p>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  Pasillos amplios que previenen aglomeraciones e interferencias entre series.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-[#121419]/50">
                <span className="text-[#FF1923] text-sm font-bold block mb-1">03 / CLIMATIZACIÓN</span>
                <p className="text-white text-base font-bold font-display uppercase mb-2">21°C REGULADOS</p>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  Renovación constante de aire presurizado con filtración industrial activa.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-[#121419]/50">
                <span className="text-[#FF1923] text-sm font-bold block mb-1">04 / ABSORCIÓN</span>
                <p className="text-white text-base font-bold font-display uppercase mb-2">25 MM VULCANIZADO</p>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  Superficie de absorción acústica y desacople de vibraciones mecánicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: RED DE SEDES EN SANTO DOMINGO (ASYMMETRIC ARCHITECTURAL GALLERY) */}
        <section id="sedes" className="bg-[#121419] text-white py-24 sm:py-32 border-b border-white/10">
          <div className="container-fluid">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
              <div>
                <span className="font-mono text-xs tracking-[0.2em] text-[#FF1923] uppercase font-bold">
                  03 // PRESENCIA METROPOLITANA
                </span>
                <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase mt-2">
                  SEDES EN SANTO DOMINGO
                </h2>
              </div>
              <div className="font-mono text-xs text-white/50 tracking-wider uppercase">
                {BRAND.hours}
              </div>
            </div>

            {/* Asymmetric Gallery Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-stretch">
              {/* Featured Main Sede */}
              <div className="lg:col-span-7 flex flex-col justify-between border border-white/15 bg-[#0A0B0E] p-6 sm:p-8">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden mb-6">
                    <img
                      src={LOCATIONS[activeLocation].photo}
                      alt={LOCATIONS[activeLocation].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#0A0B0E]/90 px-3 py-1 font-mono text-[11px] text-[#FFD200] border border-white/20">
                      {LOCATIONS[activeLocation].zone}
                    </div>
                  </div>

                  <span className="font-mono text-xs text-[#FF1923] font-bold uppercase tracking-wider">
                    {LOCATIONS[activeLocation].type}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mt-1 mb-2">
                    {LOCATIONS[activeLocation].name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                    <MapPin size={16} className="text-[#FF1923] shrink-0" />
                    <span>{LOCATIONS[activeLocation].address}</span>
                  </div>
                  <div className="font-mono text-xs text-white/50 border-t border-white/10 pt-4">
                    {LOCATIONS[activeLocation].specs}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF1923] hover:text-[#D90F18] uppercase tracking-wider"
                  >
                    <span>Consultar planes para esta sede</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Sede Selectors List */}
              <div className="lg:col-span-5 flex flex-col divide-y divide-white/10 border border-white/15 bg-[#0A0B0E]">
                {LOCATIONS.map((loc, idx) => (
                  <button
                    key={loc.name}
                    type="button"
                    onClick={() => setActiveLocation(idx)}
                    className={`text-left p-6 transition-all duration-200 flex items-center justify-between ${
                      activeLocation === idx ? 'bg-white/10 border-l-4 border-l-[#FF1923]' : 'hover:bg-white/5'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase block mb-1">
                        0{idx + 1} // {loc.zone}
                      </span>
                      <h4 className="font-display font-bold text-lg text-white uppercase">
                        {loc.name}
                      </h4>
                      <p className="text-xs text-white/60 truncate max-w-xs mt-0.5">
                        {loc.address}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className={`text-[#FF1923] transition-transform ${
                        activeLocation === idx ? 'translate-x-1 opacity-100' : 'opacity-30'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FILOSOFÍA Y MANIFIESTO DEL ESTUDIO (EDITORIAL MONOLITHIC CONTRAST) */}
        <section id="filosofia" className="bg-[#FFFFFF] text-[#111215] py-24 sm:py-32 border-b border-black/10">
          <div className="container-fluid">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-xs tracking-[0.2em] text-[#FF1923] uppercase font-bold">
                  04 // MANIFIESTO OPERATIVO
                </span>

                <blockquote className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111215] leading-tight my-6">
                  “EL FITNESS DE ALTA CALIDAD AL ALCANCE DE TODOS.”
                </blockquote>

                <p className="font-body text-base text-[#5E6068] leading-relaxed mb-8">
                  Smart Fit RD es la representación oficial de la mayor red de entrenamiento en Latinoamérica. Nuestro propósito es democratizar el acceso a maquinaria de vanguardia, erradicando barreras económicas sin comprometer jamás la excelencia biomecánica.
                </p>

                <div className="space-y-4 border-t border-black/10 pt-8 font-mono text-xs">
                  <div className="flex items-start gap-3">
                    <span className="text-[#FF1923] font-bold">01.</span>
                    <span className="text-[#111215]">Biomecánica certificada sin improvisaciones técnicas.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#FF1923] font-bold">02.</span>
                    <span className="text-[#111215]">Ambiente seguro y motivador para cualquier nivel físico.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#FF1923] font-bold">03.</span>
                    <span className="text-[#111215]">Acceso unificado a múltiples sedes de la capital con tu plan.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-black/10 p-2 bg-[#F6F6F8]">
                  <img
                    src="./media/post_1.jpg"
                    alt="Cultura de entrenamiento en Smart Fit RD"
                    className="w-full aspect-[4/5] object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="p-4 font-mono text-[11px] text-[#5E6068] flex justify-between items-center">
                    <span>SANTO DOMINGO ESTUDIO</span>
                    <span className="text-[#FF1923] font-bold">ALTO RENDIMIENTO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CIERRE MONOLÍTICO & CONVERSIÓN DIRECTA */}
        <section id="contacto" className="bg-[#0A0B0E] text-white py-24 sm:py-32 relative overflow-hidden">
          <div className="container-fluid relative z-10 text-center max-w-4xl mx-auto">
            <span className="font-mono text-xs tracking-[0.25em] text-[#FFD200] uppercase font-bold block mb-4">
              COMIENZA HOY · SANTO DOMINGO
            </span>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-6">
              TRANSFORMA TU VIDA CON SMART FIT.
            </h2>

            <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
              Escríbenos directamente a través de nuestro canal verificado de Instagram para consultar planes, disponibilidad de cupos y visitas guiadas a nuestras sedes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF1923] hover:bg-[#D90F18] text-white px-8 py-5 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200"
              >
                <Instagram size={18} />
                <span>Escríbenos a {BRAND.handle}</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Huge Wordmark Across Screen */}
            <div className="mt-24 select-none opacity-10 pointer-events-none">
              <div className="font-display font-black text-5xl sm:text-8xl md:text-9xl tracking-tighter uppercase whitespace-nowrap">
                SMART FIT RD
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#050608] text-white/50 py-12 border-t border-white/10 font-mono text-xs">
        <div className="container-fluid flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={BRAND.logo} alt={BRAND.name} className="w-6 h-6 object-cover" />
            <span className="text-white font-display font-bold uppercase tracking-wider">
              {BRAND.name}
            </span>
          </div>

          <div className="text-center md:text-right">
            <span>{BRAND.city} · {BRAND.hours}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// DEDICATED MULTI-PAGE SERVICE DETAIL VIEW
function ServiceDetailView({ service }) {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white selection:bg-[#FF1923] selection:text-white">
      {/* Top Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-[#0A0B0E]/90 backdrop-blur-md border-b border-white/10">
        <div className="container-fluid flex items-center justify-between h-20">
          <a
            href="#/"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="text-[#FF1923]" />
            <span>Volver al inicio</span>
          </a>

          <div className="font-mono text-xs text-[#FFD200] hidden sm:block">
            {service.code} — {service.kicker}
          </div>

          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF1923] hover:bg-[#D90F18] text-white text-xs font-mono font-bold px-4 py-2 transition-colors uppercase"
          >
            <Instagram size={14} />
            <span>Consultar</span>
          </a>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container-fluid max-w-5xl">
          {/* Service Header */}
          <div className="mb-12 border-b border-white/10 pb-12">
            <span className="font-mono text-xs text-[#FF1923] tracking-[0.2em] uppercase font-bold block mb-2">
              DISCIPLINA TÉCNICA · {service.number}
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-6">
              {service.title}
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/80 max-w-3xl font-light leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Real Photography of this Zone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            {service.photos.map((photo, i) => (
              <div key={i} className="border border-white/15 bg-[#121419] p-3">
                <img
                  src={photo}
                  alt={`${service.title} fotografía real de instalación`}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="pt-3 font-mono text-[11px] text-white/50 flex justify-between">
                  <span>EQUIPAMIENTO OFICIAL</span>
                  <span className="text-[#FFD200]">SANTO DOMINGO</span>
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Callout */}
          <div className="p-8 border border-white/15 bg-[#121419] my-12">
            <span className="font-mono text-xs text-[#FFD200] uppercase tracking-wider block mb-2">
              PROPÓSITO & RIGOR
            </span>
            <p className="font-display text-2xl font-bold text-white uppercase mb-2">
              {service.challenge}
            </p>
            <p className="text-white/60 text-sm font-body">
              Diseño estructural concebido para que cada minuto de tu sesión se traduzca en progreso medible con máxima protección articular.
            </p>
          </div>

          {/* Technical Specifications Table */}
          <div className="my-16">
            <h3 className="font-mono text-xs text-[#FF1923] uppercase tracking-[0.2em] font-bold mb-6">
              ESPECIFICACIONES TÉCNICAS
            </h3>
            <div className="divide-y divide-white/10 border-y border-white/10 font-mono text-sm">
              {service.specs.map((item, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-white/50 uppercase tracking-wider text-xs">
                    {item.label}
                  </span>
                  <span className="text-white font-medium text-right">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages */}
          <div className="my-16">
            <h3 className="font-mono text-xs text-[#FF1923] uppercase tracking-[0.2em] font-bold mb-8">
              BENEFICIOS COMPROBADOS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.features.map((feat, idx) => (
                <div key={idx} className="p-6 border border-white/10 bg-[#121419]">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#FF1923]/10 text-[#FF1923] font-mono text-xs font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display font-bold text-lg text-white uppercase mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed font-body">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-display text-xl font-bold uppercase text-white">
                ¿Listo para entrenar en esta área?
              </p>
              <p className="text-xs text-white/60 font-mono mt-1">
                Consulta los planes con acceso a todas las sedes de Santo Domingo.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#/"
                className="px-6 py-3.5 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white/10 transition-colors"
              >
                Volver
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF1923] hover:bg-[#D90F18] text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Inscribirme vía Instagram</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
