const property = require("../../properties.json");
const { Properties } = require("../db");
const { Op } = require("sequelize");

module.exports = {
  loadProperties: async () => {
    const arr = [];
    for (let i = 0; i < property.length; i++) {
      let newProperty = {
        name: property[i].name,
        img: property[i].img,
        price: property[i].price,
        rooms: property[i].rooms,
        bathrooms: property[i].bathrooms,
        country: property[i].country,
        address: property[i].address,
      };
      arr.push(newProperty);
    }
    await Properties.bulkCreate(arr);
    return { msg: "Property database loaded" };
  },

  findProperties: async (name) => {
    let property = name.toLowerCase();
    if (!property) {
      throw new Error(`Property ${name} doesn't exists`);
    }
    return await Properties.findAll({
      //Busca exacto
      // where: { name: name },
      //Busca todo lo q contenga esa serie de caracteres por el operador
      where: { name: { [Op.iLike]: `%${property}%` } },
    });
  },

  addProperty: async (name, img, price, rooms, bathrooms, country, address) => {
    if (await Properties.findOne({ where: { name: name } })) {
      throw new Error(`The property ${name} already exists`);
    }
    if (!name || typeof name !== "string") {
      throw new Error("The name should recieve words");
    }
    if (!img || typeof img !== "string") {
      throw new Error("Pls use a valid url");
    }
    if (!img.includes("https")) {
      throw new Error("Pls use a valid url");
    }
    if (!price || typeof price !== "number") {
      throw new Error("The price should recieve numbers");
    }
    if (!rooms || typeof rooms !== "number") {
      throw new Error("The rooms should recieve numbers");
    }
    if (!bathrooms || typeof bathrooms !== "number") {
      throw new Error("The bathrooms should recieve numbers");
    }
    if (!country || typeof country !== "string") {
      throw new Error("The country should recieve words");
    }
    if (!address) {
      throw new Error("Pls select an address");
    }
    if (name && img && price && rooms && bathrooms && country && address) {
      const add = await Properties.create({
        name: name,
        img: img,
        price: price,
        rooms: rooms,
        bathrooms: bathrooms,
        country: country,
        address: address,
      });
      return "Property created succesfully";
    }
  },
};
