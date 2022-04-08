import { Express } from 'express';
import getBaseUrl from "get-base-url"
import { extname } from 'path';
import { PORT } from './constants';
export const filenameRandom = (req, file, cb) => {
    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
    return cb(null, `${randomName}${extname(file.originalname)}`)
}

export const imagePathResolver = (image: Express.Multer.File) => {
    let imagePath = image.path.replace('/public','')
    let baseUrl = getBaseUrl()
    let img = ''
    if(true){
        img = `http://${baseUrl}:${PORT}/${imagePath}`
    } else {
        img = `${baseUrl}${imagePath}`
    }
    return img
}