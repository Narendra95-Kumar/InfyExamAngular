const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('/home/user/Desktop/user_repo/Certification_Assessment/Backend/db.json');
const middlewares = jsonServer.defaults();
router.db._.id = "bookingId";
const port = process.env.PORT || 3000;
const fs = require('fs')
server.use(middlewares);
server.use(jsonServer.bodyParser)

server.post('/buffetBookings', function (req, res, next) {
  let jsonData = JSON.parse(fs.readFileSync('/home/user/Desktop/user_repo/Certification_Assessment/Backend/db.json', 'utf-8'))
  var date = []
  for (i = 0; i < jsonData.buffetBookings.length; i++) {
    date.push(jsonData.buffetBookings[i].bookedOn)
  }
  if (date.includes(req.body.bookedOn)) {
    res.status(500)
    res.json({ "message": "Buffet is already booked on this date!" })
  }
  else {
    next()
  }

})


router.render = (req, res) => {
  if (req.method == "POST" && req.url == "/buffetBookings") {
    let bookingId = res.locals.data["bookingId"]
    res.json({ "message": `Buffet booked with booking ${bookingId}` })
  }
  if (req.method == "GET" && req.url.includes('/buffetBookings/')) {
    let data = res.locals.data
    let x = req.url.split('/')
    let id = x[2]
    if (data.bookingId == null) {
      res.json({ "message": `Reservation for booking Id: ${id} is not found!` })
    }
    else {
      res.json(res.locals.data)
    }
  }
}

server.use(router);
server.listen(port);