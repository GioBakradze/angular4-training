const data = [{
  "id": 1,
  "name": "Madel",
  "email": "mpullin0@deviantart.com"
}, {
  "id": 2,
  "name": "Myles",
  "email": "mklisch1@icq.com"
}, {
  "id": 3,
  "name": "Hillyer",
  "email": "hdobble2@nationalgeographic.com"
}, {
  "id": 4,
  "name": "Rafi",
  "email": "rpeake3@hostgator.com"
}, {
  "id": 5,
  "name": "Crissie",
  "email": "cberanek4@nytimes.com"
}, {
  "id": 6,
  "name": "Filip",
  "email": "fjennions5@ameblo.jp"
}, {
  "id": 7,
  "name": "Sherry",
  "email": "sjust6@feedburner.com"
}, {
  "id": 8,
  "name": "Analiese",
  "email": "aodennehy7@hostgator.com"
}, {
  "id": 9,
  "name": "Riley",
  "email": "rswanston8@tamu.edu"
}, {
  "id": 10,
  "name": "Neel",
  "email": "nstirman9@feedburner.com"
}];

module.exports.all = function () {
    return data.slice().reverse()
}

module.exports.add = function (user) {
    data.push(user)
}
