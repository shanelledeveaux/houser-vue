const getHouses = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_houses()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const addHouse = (req, res) => {
  console.log(req.body);
  const dbInstance = req.app.get("db");
  const {
    name,
    address,
    city,
    userState,
    zipcode,
    imageurl,
    mortgage,
    rent
  } = req.body;

  dbInstance
    .add_house([
      name,
      address,
      city,
      userState,
      zipcode,
      imageurl,
      mortgage,
      rent
    ])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const deleteHouse = (req, res) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .delete_house([id])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

module.exports = {
  getHouses,
  addHouse,
  deleteHouse
};
