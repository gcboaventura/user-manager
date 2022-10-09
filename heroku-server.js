const express = require('express')

const { resolve } = require('path')

const app = express()

app.use('/', express.static(resolve(__dirname, './build')))

app.listen(process.env.PORT || 3000, () =>
	console.log(`server ir running on port ${process.env.PORT || 3000}`)
)
