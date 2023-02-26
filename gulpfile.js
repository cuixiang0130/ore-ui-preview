const useMinecraftPreview = true;

import gulp from 'gulp';
import { deleteAsync } from 'del';
import webpackStream from 'webpack-stream';
import { exec } from 'child_process';
import { promisify } from 'util';
import replace from 'gulp-replace';
import connect from 'gulp-connect';
import * as fs from 'fs'

export const clean = () => deleteAsync(['dist']);

export function build() {
    return gulp.src('engine.js').pipe(webpackStream({
        mode: "production",
        output: {
            filename: "engine.js"
        },
        experiments: {
            topLevelAwait: true
        }
    })).pipe(gulp.dest('dist')).pipe(connect.reload());
}

async function getMinecraftPath() {
    const name = useMinecraftPreview ? 'Microsoft.MinecraftWindowsBeta' : 'Microsoft.MinecraftUWP';
    const result = await promisify(exec)(`powershell.exe Get-AppxPackage -Name ${name} | findstr InstallLocation`);
    return result.stdout.replace(/InstallLocation\s*:/, '').trim();
}

export async function copyFiles() {
    const path = await getMinecraftPath()
    console.log('MinecraftPath: ' + path)
    gulp.src([`${path}/data/gui/dist/hbui/**/*`, `!${path}/data/gui/dist/hbui/*.html`]).pipe(gulp.dest("dist/hbui"));
    gulp.src(`${path}/data/resource_packs/oreui/texts/*.lang`).pipe(gulp.dest("dist/hbui"));
    gulp.src(`${path}/data/gui/dist/hbui/*.html`).pipe(replace('<script', '<script src="/engine.js"></script><script')).pipe(gulp.dest("dist/hbui"));
}

export async function server() {
    connect.server({
        root: 'dist',
        port: 8080
    })
    const routes = JSON.parse(fs.readFileSync('./dist/hbui/routes.json'))
    for (let route of routes.routes) {
        const fileName = route.fileName
        if (fs.existsSync(`./dist${fileName}`))
            console.log(`http://localhost:8080${fileName}#${route.defaultRoute}`)
    }
}

export const run = gulp.series(clean,copyFiles,build,server)

