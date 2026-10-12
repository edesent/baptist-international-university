import files from "./espanol-files.json";

type FileMeta = { file: string; pages: number; kb: number };
const fileMeta = files as Record<string, FileMeta>;

export type SpanishClass = {
  code: string;
  title: string;
  description: string;
  note?: string;
} & FileMeta;

export type SpanishLevel = {
  id: string;
  range: string;
  name: string;
  intro: string;
  classes: SpanishClass[];
  pending?: { text: string; href: string };
};

function withFile(
  key: string,
  c: Omit<SpanishClass, keyof FileMeta>,
): SpanishClass {
  const meta = fileMeta[key];
  if (!meta) throw new Error(`Missing Spanish file for ${key}`);
  return { ...c, ...meta };
}

export const LEVELS: SpanishLevel[] = [
  {
    id: "antes-de-empezar",
    range: "000–200",
    name: "Antes de empezar",
    intro:
      "Lea primero el Manual (000) y la guía de inicio (000C). La Guía de Discipulado (101) sirve para enseñar a creyentes nuevos, y el Compendio (200) resume todas las clases del programa.",
    classes: [
      withFile("000", {
        code: "000",
        title: "Manual de Bautista Internacional",
        description:
          "La historia, el propósito y las enseñanzas de la universidad, para que estudiantes y maestros entiendan cómo funciona la Escuela de las Escrituras.",
      }),
      withFile("000C", {
        code: "000C",
        title: "Inicio y preparación",
        description:
          "Propósito y plan para comenzar la escuela en una iglesia local: descripción de la escuela, su historia y los pasos para aplicarla.",
      }),
      withFile("004", {
        code: "004",
        title: "Pirámide de enseñanza (con notas)",
        description:
          "La ilustración que usamos para enseñar los niveles de enseñanza comparados con el número de personas que llegan a cada nivel.",
      }),
      withFile("101", {
        code: "101",
        title: "Guía de discipulado",
        description:
          "Para enseñar a creyentes nuevos, o a quienes se preparan para la Escuela de las Escrituras, en el orden de Isaías 28:9-11 y Mateo 28:18-20.",
      }),
      withFile("200", {
        code: "200",
        title: "Compendio EDE y sinopsis de las clases",
        description:
          "Un resumen de todo el programa de la Escuela de las Escrituras, con una sinopsis de cada clase en los planes de estudio.",
      }),
      withFile("001", {
        code: "001",
        title: "Evaluación de clase",
        description:
          "Hoja de cálculo para que el maestro registre la evaluación de cada clase.",
        note: "Excel",
      }),
    ],
  },
  {
    id: "asociado",
    range: "201–229",
    name: "Nivel asociado",
    intro:
      "El punto de partida de los estudiantes nuevos. Comience con la Orientación (201A) después de leer los materiales de arriba.",
    classes: [
      withFile("201A", {
        code: "201A",
        title: "Orientación",
        description:
          "Información general de la escuela, diplomas y transcripciones, la Gran Comisión y la explicación de los currículos.",
      }),
      withFile("201B", {
        code: "201B",
        title: "Orientación, apéndice 1: Poblaciones e idiomas de las naciones",
        description:
          "Datos actualizados sobre las naciones del mundo y sus principales idiomas, como complemento de la clase 201A.",
      }),
      withFile("202", {
        code: "202",
        title: "Introducción a la doctrina",
        description:
          "Qué es la doctrina y lo que dice la palabra de Dios al respecto.",
      }),
      withFile("203A", {
        code: "203A",
        title: "Doctrina del mandamiento de Cristo",
        description:
          "Qué es la doctrina de Cristo y nuestra obligación de aprenderla y obedecerla como siervos de Dios.",
      }),
      withFile("203B", {
        code: "203B",
        title: "Doctrina del mandamiento de Cristo, apéndice 1",
        description:
          "Documentos que complementan el estudio y la enseñanza de la clase 203A.",
      }),
      withFile("203C", {
        code: "203C",
        title: "Doctrina del mandamiento de Cristo, apéndice 2",
        description:
          "Más documentos de referencia para la clase 203A, junto con el apéndice 1.",
      }),
      withFile("204", {
        code: "204",
        title: "Principios cristianos de finanzas",
        description:
          "Enseñanza para la economía personal del estudiante y para la obra del ministerio.",
      }),
      withFile("205", {
        code: "205",
        title: "Principios cristianos de servicio y liderazgo",
        description:
          "Un hombre en el ministerio debe ser un siervo y tener corazón de siervo.",
      }),
      withFile("206", {
        code: "206",
        title: "Introducción a la publicación de las Escrituras",
        description:
          "Los mandamientos sobre la responsabilidad de la iglesia de guardar, publicar y distribuir las Escrituras.",
      }),
      withFile("207", {
        code: "207",
        title: "Introducción a la enseñanza",
        description:
          "Los aspectos básicos de la obra de enseñar, parte fundamental de la Gran Comisión.",
      }),
      withFile("208", {
        code: "208",
        title: "Evangelismo mundial: Perspectiva mundial",
        description:
          "La responsabilidad personal de la evangelización mundial, por el esfuerzo propio y apoyando obras que cumplen la Gran Comisión.",
      }),
      withFile("209", {
        code: "209",
        title: "Evangelismo mundial: Jerusalén",
        description:
          "Evangelizar en la propia ciudad del estudiante. Ser testigo y ganar almas comienza localmente.",
      }),
      withFile("210", {
        code: "210",
        title: "Introducción a la distribución de las Escrituras",
        description:
          "Cómo llevar la palabra de Dios por todo el mundo, según la palabra de Dios.",
      }),
      withFile("211", {
        code: "211",
        title: "Preparación y solicitud de servicio",
        description:
          "Guía para que el maestro conozca a su alumno, la obra de Dios en su vida y su llamamiento, con evaluación para la certificación.",
      }),
      withFile("212", {
        code: "212",
        title: "La doctrina de la santidad",
        description:
          "Qué es la santidad y cuáles son sus mandamientos en el Nuevo Testamento.",
      }),
      withFile("213", {
        code: "213",
        title: "Manejo del tiempo según las Escrituras",
        description:
          "Principios bíblicos para administrar el tiempo en todas las áreas de la obra de Dios.",
      }),
    ],
    pending: {
      text: "Las clases 214 a 229 todavía no están traducidas. Puede encontrarlas en inglés.",
      href: "/curricula/201-229-associates-level",
    },
  },
  {
    id: "graduado",
    range: "301–310",
    name: "Nivel graduado",
    intro:
      "Clases de nivel de posgrado. La participación del maestro es esencial, y la enseñanza debe concordar con el Nuevo Testamento y la doctrina de la iglesia del estudiante.",
    classes: [
      withFile("301", {
        code: "301",
        title: "Distinciones bautistas I: Teológicas",
        description: "Primera de tres partes sobre las distinciones bautistas.",
      }),
      withFile("302", {
        code: "302",
        title: "Distinciones bautistas II: Eclesiásticas",
        description: "Segunda de tres partes sobre las distinciones bautistas.",
      }),
      withFile("303", {
        code: "303",
        title: "Distinciones bautistas III: Generales",
        description: "Tercera de tres partes sobre las distinciones bautistas.",
      }),
      withFile("304A", {
        code: "304A",
        title: "Introducción al griego y el Nuevo Testamento",
        description:
          "La historia del idioma griego, el Nuevo Testamento y sus manuscritos.",
      }),
      withFile("306", {
        code: "306",
        title: "Hermenéutica bíblica",
        description:
          "Para estudiantes que ya no son novatos y han leído la Biblia línea por línea varias veces.",
      }),
      withFile("307", {
        code: "307",
        title: "Homilética bíblica",
        description: "La clase hermana de la 306: la preparación de la predicación.",
      }),
      withFile("308", {
        code: "308",
        title: "Estudio de pasajes difíciles de las Escrituras",
        description:
          "Pasajes conocidos que históricamente han causado confusión o interpretaciones variadas.",
      }),
      withFile("309", {
        code: "309",
        title: "Revelaciones posteriores a los Evangelios",
        description:
          "La revelación que los apóstoles añadieron a la palabra de Dios después de la resurrección de nuestro Señor.",
      }),
      withFile("310", {
        code: "310",
        title: "Documento de evangelismo mundial (ejemplo)",
        description:
          "Un ejemplo del trabajo escrito que un estudiante puede presentar para recibir crédito en la clase 310.",
      }),
    ],
    pending: {
      text: "La clase 305, Introducción al hebreo y el Antiguo Testamento, todavía no está traducida. Está disponible en inglés.",
      href: "/curricula/301-310-pre-graduate-level",
    },
  },
  {
    id: "bachillerato",
    range: "401–409",
    name: "Bachillerato",
    intro:
      "En este nivel el estudiante hace el trabajo de manera autodirigida, según los objetivos del plan de estudios.",
    classes: [
      withFile("401-409", {
        code: "401–409",
        title: "Plan de estudios del nivel de bachillerato",
        description:
          "Los objetivos y el trabajo requerido para las clases 401 a 409.",
      }),
      withFile("406", {
        code: "406",
        title: "Mandamientos del Nuevo Testamento: La doctrina de Cristo",
        description:
          "Una lista completa de los mandamientos de Jesucristo en el Nuevo Testamento, para estudio y tareas escritas.",
      }),
      withFile("409", {
        code: "409",
        title: "Tabla de comparación de versículos",
        description:
          "Ayuda para la comparación textual de 500 versículos, con más de 240 textos del Nuevo Testamento griego de Westcott y Hort.",
      }),
    ],
  },
  {
    id: "maestria-acelerada",
    range: "550–551",
    name: "Maestría acelerada",
    intro:
      "Para pastores y líderes de iglesia que cumplen los requisitos y desean enseñar el programa en su propia iglesia, instituto o seminario.",
    classes: [
      withFile("550", {
        code: "550",
        title: "Programa de maestría acelerada",
        description:
          "Los requisitos del candidato y cómo funciona el programa.",
      }),
      withFile("551", {
        code: "551",
        title: "Guía docente y cómo entender los niveles",
        description:
          "Guía de enseñanza para los pastores inscritos en la maestría acelerada que inician el programa en sus iglesias.",
      }),
    ],
  },
];

export const RESOURCES: SpanishClass[] = [
  withFile("manuscrita-manipulada", {
    code: "Libro",
    title: "Manuscrita manipulada",
    description:
      "Por el Dr. Francisco Guerrero Meza (2005), impreso por la Iglesia Histórica Bautista.",
  }),
  withFile("evangelio-sin-palabras-a4", {
    code: "A4",
    title: "Evangelio sin palabras",
    description: "Librito ilustrado para colorear con niños, tamaño A4.",
  }),
  withFile("evangelio-sin-palabras-a5", {
    code: "A5",
    title: "Evangelio sin palabras",
    description: "El mismo librito en tamaño A5, para imprimir en formato pequeño.",
  }),
  withFile("club-de-ninos", {
    code: "Niños",
    title: "Club de niños: 52 lecciones",
    description:
      "Un año de estudio bíblico para niños, escrito por Elesha Carrier en la Iglesia Bautista Bíblica de Bellingham.",
    note: "Traducción automática",
  }),
];

export const TRANSLATED_COUNT = LEVELS.reduce(
  (n, l) => n + l.classes.filter((c) => c.file.endsWith(".pdf")).length,
  0,
);

export const ZIP_URL =
  "/descargas/universidad-bautista-internacional-espanol.zip";

export const ZIP_KB = Object.values(fileMeta).reduce((n, f) => n + f.kb, 0);

export const FILE_COUNT = Object.keys(fileMeta).length;
