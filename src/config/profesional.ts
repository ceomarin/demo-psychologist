// ============================================================
//  CONFIGURACIÓN DEL PROFESIONAL
//  Edita solo este archivo para personalizar el template.
//  No toques index.astro ni privacidad.astro.
// ============================================================

export const profesional = {

    // ── DATOS BÁSICOS ──────────────────────────────────────────
    nombre: "[Nombre Apellido]",
    titulo: "Psicóloga Clínica",
    universidad: "[Universidad]",
    metodo: "[Método terapéutico]",
    // codigoSUP: se omite intencionalmente por privacidad del template

    // ── CONTACTO ───────────────────────────────────────────────
    email: "contacto@[dominio].cl",
    whatsapp: "569XXXXXXXX",          // sin +, sin espacios
    direccion: "[Comuna], Santiago",

    // ── SOBRE MÍ ───────────────────────────────────────────────
    bio: `[Escribe aquí tu presentación personal. Describe tu enfoque,
  a quiénes atiendes y qué ofreces en el espacio terapéutico.]`,

    // ── MODALIDADES ────────────────────────────────────────────
    modalidades: [
        {
            titulo: "Terapia individual",
            descripcion: "Acompañamiento psicológico para adultos que atraviesan ansiedad, depresión, duelo, crisis personales o procesos de autoconocimiento.",
        },
        {
            titulo: "Terapia de pareja",
            descripcion: "Herramientas para mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo.",
        },
        // Agrega o elimina modalidades según el cliente:
        // { titulo: "Terapia online", descripcion: "..." },
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

    // ── FONASA ─────────────────────────────────────────────────
    // Cambia a true si el profesional atiende por Fonasa
    fonasaActivo: true,
    urlFonasa: "",   // pegar URL de agenda Fonasa cuando corresponda
    urlParticular: "#contacto",

    // ── SEO ────────────────────────────────────────────────────
    descripcionSEO: "Psicóloga clínica en Santiago. Atención individual y de pareja, presencial y online.",

    // ── LEGAL ──────────────────────────────────────────────────
    rutProfesional: "[RUT del profesional]",   // para política de privacidad
    emailPrivacidad: "contacto@[dominio].cl",

};