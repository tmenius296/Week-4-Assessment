let names = ["Bob", "Billy"];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "This will be one of many fortunes you receive today",
      "Your luck today will be better than the weather",
      "Tomorrow you will be returned to the stork who originally brought you",
      "You're missing really good deals this week at the grocery store",
    ];
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
  getAllNames: (req, res) => {
    try {
      if (names.length > 0) {
        res.status(200).send(names);
      } else {
        res.status(200).send("No names to display!");
      }
    } catch {
      res.status(400).send();
    }
  },
  putName: (req, res) => {
    try {
      names = [req.body.name];
      res.status(200).send();
    } catch {
      res.status(400).send();
    }
  },
  postName: (req, res) => {
    try {
      names.push(req.body.name);
      res.status(200).send();
    } catch {
      res.status(400).send();
    }
  },
  deleteNames: (req, res) => {
    try {
      names = [];
      res.status(200).send();
    } catch {
      res.status(400).send();
    }
  },
};
