const products = [
  {
    id: 1,
    title:
      "Mouse Vertical Ergonómico Oficina Usb 5 Botones Optico Cable Color Black",
    price: 24900,
    description:
      "Experimenta comodidad y precisión sin igual con nuestro Optical Vertical Mouse. Diseñado ergonómicamente para reducir la tensión en la muñeca y brindar un seguimiento preciso, este mouse revolucionario mejora tu experiencia informática. Ya sea que trabajes desde casa, navegues por internet o juegues, disfrutarás de una comodidad excepcional y un control fluido. Descubre una nueva forma de interactuar con tu computadora y lleva tu productividad al siguiente nivel con el Optical Vertical Mouse.",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807349/webreact/mouse/Mouse%20Vertical%20Ergon%C3%B3mico%20Oficina%20Usb%205%20Botones%20Optico%20Cable%20Color%20Black.webp",
    stock: 12,
    category: "mouse",
  },
  {
    id: 2,
    title:
      "Mouse Vertical Genius Ergo 8250s Inalámbrico 6 Botones, Gray Color Silver",
    price: 63900,
    description:
      "¡Optimiza tu comodidad con nuestro mouse innovador! Diseñado para adaptarse a tus movimientos, este dispositivo es perfecto para largas sesiones frente a la computadora. Descansa tu brazo sobre el escritorio y evita molestias por una postura incorrecta. ¡Haz que trabajar sea más cómodo y eficiente con nuestro mouse ergonómico!",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807394/webreact/mouse/Mouse%20Vertical%20Genius%20Ergo%208250s%20Inal%C3%A1mbrico%206%20Botones%2C%20Gray%20Color%20Silver.webp",
    stock: 60,
    category: "mouse",
  },
  {
    id: 3,
    title: "Mouse Vertical Inalambrico Periférico Óptico Delux Color Negro",
    price: 63302,
    description:
      "¡Experimenta la comodidad definitiva con nuestro Mouse Vertical Ergonómico! Con soporte reposamuñecas y diseño óptico, este mouse se adapta perfectamente a tus movimientos. Su forma de voluta biónica alivia la rigidez y la incomodidad del brazo, permitiéndote despedirte del estrés de la 'mano del ratón'. Aunque su diseño único puede requerir algo de tiempo para acostumbrarse, ¡te garantizamos una experiencia sin igual una vez que lo hagas!",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807443/webreact/mouse/Mouse%20Vertical%20Inalambrico%20Perif%C3%A9rico%20%C3%93ptico%20Delux%20Color%20Negro.webp",
    stock: 8,
    category: "mouse",
  },
  {
    id: 4,
    title:
      "Smartwatch Haylou LS16 Tactical 1.43'",
    price: 186316,
    description:
      "¡Descubre el nuevo estándar de elegancia y funcionalidad con el Smartwatch Haylou! Con tecnología de vanguardia y calidad excepcional, este reloj inteligente es tu compañero ideal en el deporte, el trabajo y el tiempo libre. Desde el seguimiento de la actividad física hasta las notificaciones inteligentes, cada función está diseñada para enriquecer tu vida diaria con estilo y conveniencia. Eleva tu experiencia con el Smartwatch Haylou.",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807686/webreact/smartwatch/Smartwatch%20Haylou%20LS16%20Tactical%201.43%22%20caja%2045mm%20de%20abs%20negra%2C%20malla%20negra%20de%20silicona%20y%20bisel%20negro%20de%20metal%20RT3.webp",
    stock: 32,
    category: "smartwatch",
  },
  {
    id: 5,
    title: "Apple Watch Series 9 GPS",
    price: 1959900,
    description:
      "¡Experimenta la magia con el Apple Watch Series 9! Este dispositivo revolucionario promueve un estilo de vida activo, saludable y conectado. Con funciones avanzadas como el gesto de doble toque, una pantalla más brillante y el potente Siri, ahora más rápido que nunca, el Apple Watch Series 9 lleva la conveniencia y la innovación a un nuevo nivel. Mantente en forma, seguro y conectado con este impresionante reloj inteligente.",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807745/webreact/smartwatch/Apple%20Watch%20Series%209%20GPS.webp",
    stock: 16,
    category: "smartwatch",
  },
  {
    id: 6,
    title: "Apple Watch SE GPS",
    price: 1100800,
    description:
      "¡Desata tu potencial con el Apple Watch SE! Más que un simple reloj, este dispositivo ofrece poderosas funcionalidades para una vida conectada, activa, saludable y segura. Con un diseño elegante y tecnología avanzada, el Apple Watch SE te brinda todo lo que necesitas y más, a un precio accesible. Eleva tu estilo de vida con esta increíble pieza de innovación y funcionalidad.",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807804/webreact/smartwatch/Apple%20Watch%20SE%20GPS.webp",
    stock: 23,
    category: "smartwatch",
  },
  {
    id: 7,
    title: "Huawei Series 6 Band 6 Sport 1.47' caja de polímero dark gray",
    price: 420900,
    description:
      "Descubre el poder del HUAWEI Band 6 Fitness Tracker: pantalla a color AMOLED de 1.47', monitor de frecuencia cardíaca SpO2 24H, duración de la batería de 14 días y resistencia al agua 5ATM. Diseñado para hombres y mujeres, este reloj inteligente global en negro es tu compañero ideal para un estilo de vida activo y saludable. Sumérgete en la innovación con HUAWEI Band 6.",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807896/webreact/smartwatch/Huawei%20Series%206%20Band%206%20Sport%201.47%22%20caja%20de%20pol%C3%ADmero%20dark%20gray.webp",
    stock: 45,
    category: "smartwatch",
  },
  {
    id: 8,
    title: "Teclado bluetooth Logitech K380 QWERTY español color rosa",
    price: 199900,
    description:
      "Descubre la excelencia con los teclados de Logitech: resistentes, duraderos y de alta calidad. Experimenta la mejor experiencia de usuario con innovación en diseño y tecnología que perdura. Eleva tu experiencia informática con Logitech.",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807236/webreact/teclados/Teclado%20bluetooth%20Logitech%20K380%20QWERTY%20espa%C3%B1ol%20color%20rosa.webp",
    stock: 12,
    category: "teclados",
  },
  {
    id: 9,
    title: "Teclado bluetooth Logitech K380 QWERTY español color off-white",
    price: 199900,
    description:
      "Descubre la excelencia con los teclados de Logitech: resistentes, duraderos y de alta calidad. Experimenta la mejor experiencia de usuario con innovación en diseño y tecnología que perdura. Eleva tu experiencia informática con Logitech.",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807191/webreact/teclados/Teclado%20bluetooth%20Logitech%20K380%20QWERTY%20espa%C3%B1ol%20color%20off-white.webp",
    stock: 52,
    category: "teclados",
  },
  {
    id: 10,
    title:
      "Logitech K400 Plus, Teclado Inalámbrico Touch, Pc Android Tv teclado Negro.",
    price: 186329,
    description:
      "Experimenta el máximo rendimiento en juegos con el teclado Logitech. Diseñado para expresar tu estilo y habilidades, mejora tu experiencia de gaming y lleva tus jugadas al siguiente nivel. Ideal para aficionados y expertos, disfruta de horas ilimitadas de diversión y competición.",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706807134/webreact/teclados/Logitech%20K400%20Plus%2C%20Teclado%20Inal%C3%A1mbrico%20Touch%2C%20Pc%20Android%20Tv%20Color%20del%20teclado%20Negro%20Idioma%20Espa%C3%B1ol.webp",
    stock: 16,
    category: "teclados",
  },
  {
    id: 11,
    title:
      "Logitech K380, Teclado Multi-dispositivo Bluetooth Color del teclado Grafito",
    price: 149900,
    description:
      "Experimenta la libertad de escribir en cualquier lugar con el teclado portátil K380 de Logitech. Conecta fácilmente hasta tres dispositivos Bluetooth y cambia entre ellos con solo pulsar un botón. Ligero y compacto, este teclado inalámbrico es perfecto para trabajar en casa o en movimiento con tu smartphone, tablet o computadora.",
    img: "https://res.cloudinary.com/dzivhovxf/image/upload/v1706806986/webreact/teclados/Logitech%20K380%2C%20Teclado%20Multi-dispositivo%20Bluetooth%20Color%20del%20teclado%20Grafito%20Idioma%20Espa%C3%B1ol.webp",
    stock: 9,
    category: "teclados",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      resolve(products);
    } else {
      reject("error");
    }
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {

      const item = products.find((product) => product.id === id);

      if (item) {
        resolve(item);
      } else {
        reject(`No existe el producto con el ${id}.`);
      }
    } else {
      reject("error en busqueda de producto");
    }
  });
};
