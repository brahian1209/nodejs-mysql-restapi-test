import app from './app.js'


app.listen(app.get('port'))


console.log('numero de puerto', app.get('port'))

