const gulp = require('gulp')
const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa antes1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes2')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt' ])
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!!')
    return cb()
}

exports.default = series(
     antes1,
     antes2,
     copiar,
     fim,
    )
