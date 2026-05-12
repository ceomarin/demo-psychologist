// ============================================================
//  CONFIGURACIÓN DEL PROFESIONAL
//  Edita solo este archivo para personalizar el template.
//  No toques index.astro ni los demás componentes.
// ============================================================

export const profesional = {

    // ── DATOS BÁSICOS ──────────────────────────────────────────
    nombre: "[Nombre Apellido]",
    titulo: "Psicóloga Clínica",
    universidad: "[Universidad]",
    metodo: "[Método terapéutico]",
    foto: "/demo-psychologist/images/profesional.jpg",
    // codigoSUP: se omite intencionalmente por privacidad del template

    // ── CONTACTO ───────────────────────────────────────────────
    email: "contacto@[dominio].cl",
    whatsapp: "56937229880",         // sin +, sin espacios
    whatsappMensaje: "Hola, me gustaría agendar una consulta",
    direccion: "[Comuna], Santiago",
    ciudad: "Santiago, Chile",

    // ── REDES SOCIALES ─────────────────────────────────────────
    instagram: "",   // pegar URL completa o dejar vacío
    linkedin: "",    // pegar URL completa o dejar vacío

    // ── SOBRE MÍ ───────────────────────────────────────────────
    bio: `[Escribe aquí tu presentación personal. Describe tu enfoque,
a quiénes atiendes y qué ofreces en el espacio terapéutico.]`,

    // ── MODALIDADES ────────────────────────────────────────────
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
        "[Máster / Diplomado / Curso 1]",
        "[Máster / Diplomado / Curso 2]",
        "[Máster / Diplomado / Curso 3]",
        // Agrega los que correspondan
    ],

    // ── ESPECIALIDADES ─────────────────────────────────────────
    especialidades: [
        "Ansiedad",
        "Autoestima",
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