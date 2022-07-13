const express = require("express");
const models = require("./models");
const router = express.Router();
const { Properties } = require("../db");

router.get("/properties", async (req, res, next) => {
  if (req.query.name) {
    try {
      const { name } = req.query;
      const property = await models.findProperties(name);
      if (property === null) {
        res.status(404).send({ error: "Property Not found" });
      } else {
        res.status(200).json(property);
      }
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  } else {
    try {
      res.json(await Properties.findAll());
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
});

router.get("/properties/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const property = await Properties.findAll({
      where: {
        id: id,
      },
    });
    console.log("SOY PROPERTY", property);
    if (!property) {
      return res.status(404).send("Property Not Found");
    }
    return res.status(200).send(property);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

router.post("/properties/create", async (req, res, next) => {
  const { name, img, price, rooms, bathrooms, country, address } = req.body;

  try {
    res.status(201).json({
      msg: await models.addProperty(
        name,
        img,
        parseInt(price),
        parseInt(rooms),
        parseInt(bathrooms),
        country,
        address
      ),
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.put("/properties/update/:id", async (req, res, next) => {
  const { name, img, price, rooms, bathrooms, country, address } = req.body;
  const { id } = req.params;

  try {
    await Properties.update(
      {
        name: name,
        img: img,
        price: price,
        rooms: rooms,
        bathrooms: bathrooms,
        country: country,
        address: address,
      },
      {
        where: { id: id },
      }
    );
    res.status(201).json("Property updated");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Properties.destroy({ where: { id: id } });
    res.status(200).send("Property deleted");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
