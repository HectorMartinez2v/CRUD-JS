const mysql =  require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password : '',
    database: 'crud_js_db'

});

conexion.connect((error)=>{
    if (error){
        console.log('El error de conexion es: '+ error);
        return
    }
    console.log('Conectado a la Base de Datos');

})

module.exports = conexion;