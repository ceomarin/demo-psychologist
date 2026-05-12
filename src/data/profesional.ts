// ============================================================
//  CONFIGURACIÓN DEL PROFESIONAL
//  Edita solo este archivo para personalizar el template.
//  No toques index.astro ni los demás componentes.
// ============================================================

export const profesional = {

    // ── DATOS BÁSICOS ──────────────────────────────────────────
    nombre: "Allison Feunsalida",
    titulo: "Psicóloga Clínica",
    universidad: "Universidad Academia de Humanismo Cristiano",
    metodo: "Sistémico",
    foto: "/demo-psychologist/images/profesional.jpg",
    // codigoSUP: se omite intencionalmente por privacidad del template

    // ── MODALIDAD DE ATENCIÓN ──────────────────────────────────
    // Opciones: "presencial" | "online" | "ambas"
    modalidadAtencion: "ambas" as "presencial" | "online" | "ambas",

    // Si es presencial o ambas, completar dirección
    direccion: "Santiago",
    ciudad: "Santiago, Chile",

    // ── CONTACTO ───────────────────────────────────────────────
    email: "contacto@[dominio].cl",
    whatsapp: "56937229880",         // sin +, sin espacios
    whatsappMensaje: "Hola, me gustaría agendar una consulta",

    // ── REDES SOCIALES ─────────────────────────────────────────
    instagram: "",   // pegar URL completa o dejar vacío
    linkedin: "",    // pegar URL completa o dejar vacío

    // ── SOBRE MÍ ───────────────────────────────────────────────
    bio: `¡Hola! soy Allison y como psicóloga clínica especializada en salud mental, ofrezco un espacio seguro, confidencial y empático para el acompañamiento psicológico de adultos y parejas. Terapia Individual para adultos: atiendo a personas que atraviesan situaciones de estrés, ansiedad, depresión, duelos, crisis personales o problemas de autoestima. También acompaño procesos de autoconocimiento, toma de decisiones, desarrollo de habilidades emocionales y crecimiento personal. Terapia de pareja: brindo herramientas para mejorar la comunicación, resolver conflictos y fortalecer los vínculos afectivos en la pareja. Se trabajan dinámicas relacionales, estilos de apego, acuerdos, sexualidad y toma de decisiones conjuntas.`,

    // ── MODALIDADES DE SERVICIO ────────────────────────────────
    modalidades: [
        {
            titulo: "Terapia individual",
            descripcion: "Acompañamiento psicológico para adultos que atraviesan ansiedad, depresión, duelo, crisis personales o procesos de autoconocimiento.",
            duracion: "50 minutos",
            icono: "🧠",
        },
        {
            titulo: "Terapia de pareja",
            descripcion: "Herramientas para mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo.",
            duracion: "60 minutos",
            icono: "💬",
        },
        // Agrega o elimina modalidades según el cliente:
        // { titulo: "Terapia online", descripcion: "...", duracion: "50 minutos", icono: "💻" },
    ],

    // ── FORMACIÓN Y POSTITULOS ─────────────────────────────────
    formacion: [
        "Máster en psicoterapia y psicología clínica",
        "Diplomado de salud mental y psiquiatría",
        "Curso: 'Estrategias clínicas para el abordaje de la autoestima'",
        // Agrega los que correspondan
    ],

    // ── ESPECIALIDADES ─────────────────────────────────────────
    especialidades: [
        "Ansiedad",
        "Autoestima",
        "Celos",
        "Depresión",
        "Duelo",
        "Estrés",
        "Crisis de Pánico",
        "Dependencia emocional",
        "Gestión emocional",
        "Problemas amorosos",
        // Agrega o elimina según el cliente
    ],

    // ── AGENDAMIENTO ───────────────────────────────────────────
    // fonasaActivo: true muestra botón de agenda Fonasa
    // fonasaActivo: false muestra solo agenda particular
    fonasaActivo: false,
    urlFonasa: "",          // pegar URL de agenda Fonasa cuando corresponda
    urlParticular: "#contacto",

    // ── SEO ────────────────────────────────────────────────────
    descripcionSEO: "Psicóloga clínica en Santiago. Atención individual y de pareja, presencial y online.",
    ogImage: "/demo-psychologist/images/og-image.jpg",

    // ── LEGAL ──────────────────────────────────────────────────
    rutProfesional: "[RUT del profesional]",  // para política de privacidad
    emailPrivacidad: "contacto@[dominio].cl",
};