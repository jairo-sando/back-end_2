

// Script de carga inicial (ejecutar una sola vez)

import mongoose from "mongoose";
import { ProductModel } from "../dao/models/product.model.js";

const products = [
  {
    title: "Freidora de Aire KALLEY 6.3 Litros K-MAF6",
    description: "La Freidora KALLEY K-MAF6 es el aliado ideal para tu cocina...",
    code: "FA7700",
    price: 50000.99,
    status: true,
    stock: 25,
    category: "Pequeños Electrodomésticos",
    thumbnails: ["img/freidora.png"]
  },
  {
    title: "Olla Multifuncional BLACK+DECKER 5,7 Litros",
    description: "Prepara tus platos favoritos con la Olla multicocción...",
    code: "OP1234",
    price: 70000.99,
    status: true,
    stock: 25,
    category: "Pequeños Electrodomésticos",
    thumbnails: ["img/olla.jpeg"]
  },
  {
    title: "Computador Portátil LENOVO 15.3",
    description: "En el portátil LENOVO IdeaPad Slim 3...",
    code: "PL1234",
    price: 2000000.99,
    status: true,
    stock: 25,
    category: "Portatiles",
    thumbnails: ["img/lenovo.jpeg"]
  },
  {
    title: "Computador Portátil HP 15",
    description: "El computador HP 15-fd1250la...",
    code: "PH1234",
    price: 2200000.99,
    status: true,
    stock: 25,
    category: "Portatiles",
    thumbnails: ["img/hp.png"]
  },
  {
    title: "TV SAMSUNG 50 QLED",
    description: "¡Es SAMSUNG QLED TV, es impresionante!",
    code: "TVS1234",
    price: 1500000.99,
    status: true,
    stock: 25,
    category: "Televisores",
    thumbnails: ["img/tv.jpeg"]
  },
  {
    title: "TV KALLEY 55 UHD",
    description: "¡Disfruta la mejor experiencia con el TV Kalley 55”!",
    code: "TVK1200",
    price: 1100000.99,
    status: true,
    stock: 25,
    category: "Televisores",
    thumbnails: ["img/kalley.jpg"]
  }
];

const runSeed = async () => {
  await mongoose.connect("mongodb://localhost:27017/backend2");
  await ProductModel.insertMany(products);
  console.log("✅ Productos cargados correctamente");
  process.exit();
};

runSeed();