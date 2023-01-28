"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagePathResolver = exports.filenameRandom = void 0;
const get_base_url_1 = require("get-base-url");
const path_1 = require("path");
const constants_1 = require("./constants");
const filenameRandom = (req, file, cb) => {
    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
    return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
};
exports.filenameRandom = filenameRandom;
const imagePathResolver = (image) => {
    let imagePath = image.path.replace('/public', '');
    let baseUrl = (0, get_base_url_1.default)();
    let img = '';
    if (true) {
        img = `http://${baseUrl}:${constants_1.PORT}/${imagePath}`;
    }
    else {
        img = `${baseUrl}${imagePath}`;
    }
    return img;
};
exports.imagePathResolver = imagePathResolver;
//# sourceMappingURL=commons.js.map