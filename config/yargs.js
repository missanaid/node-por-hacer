const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de una tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea '
};


const argv = require('yargs')
    .command('crear', 'Crear algo por hacer', {
        descripcion,
        /*: { //Desde aqui lo comentó para ponerlo arriba y ahorrar codigo
                   demand: true,
                   alias: 'd',
                   desc: 'Descripcion de una tarea por hacer'
               }*/
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        /* { //Lo mismo que arriba
                    demand: true,
                    alias: 'd',
                    desc: 'Descripcion de una tarea por hacer'
                },*/
        completado
        /*: {
                   alias: 'c',
                   default: true
               }*/
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
        /*: {
                  demand: true,
                  alias: 'b',
                  desc: 'Borra una tarea'

              }*/
    })
    .help()
    .argv;

module.exports = {
    argv
};