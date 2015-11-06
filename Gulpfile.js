
var gulp = require('gulp')
var webpack = require('webpack')
var wpConf = require('./webpack.config.js')
var gutil = require('gulp-util')
var babel = require('gulp-babel')

var source = 'src/**/*'

gulp.task('default', ['babel', 'babel-watch'])

gulp.task('build', ['babel'])

gulp.task('babel-watch', function () {
  return gulp.watch(source, ['babel'])
})

gulp.task('babel', function (callback) {
  return gulp.src(source)
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('webpack', function (callback) {
  webpack(wpConf, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({}))
    callback()
  })
})
