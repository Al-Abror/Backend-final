const router = require('express').Router()
const adminRouter = require('./admin.route')
const artikelRouter = require('./artikel.route')
const kategoriRouter = require('./kategori.route')
const komunitasRouter = require('./komunitas.route')
const kontakRouter = require('./kontak.route')
const psikologRouter = require('./psikolog.route')
const testiRouter = require('./testi.route')
const timRouter = require('./tim.route')
const userRouter = require('./user.route')
const webinarRouter = require('./webinar.route')

router.get("/", (req, res) => {
    res.status(200).send('Hello, welcome to cure.it API')
})

router.use('/artikel', artikelRouter)
router.use('/kategori', kategoriRouter)
router.use('/komunitas', komunitasRouter)
router.use('/message', kontakRouter)
router.use('/psikolog', psikologRouter)
router.use('/testimoni', testiRouter)
router.use('/tim', timRouter)
router.use('/webinar', webinarRouter)

router.use(adminRouter)
router.use(userRouter)

module.exports = router