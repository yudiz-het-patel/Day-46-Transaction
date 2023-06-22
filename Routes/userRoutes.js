const express = require('express')
const router = express.Router()

const {
  addUser,
  manualTransaction,
  withTransaction,
  addBank,
  twoSessions,
} = require('../Controller/controller')

router.post('/sign-in', addUser)
router.post('/normal-transaction', manualTransaction)
router.post('/withTransaction', withTransaction)
router.post('/add-bank', addBank)
router.post('/two-sessions', twoSessions)

module.exports = router
