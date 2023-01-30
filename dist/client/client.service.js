"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClientService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let ClientService = ClientService_1 = class ClientService {
    constructor() {
        this.logger = new common_1.Logger(ClientService_1.name);
    }
    async getApp() {
        const basePath = process.env.CLIENT_BUILD_PATH;
        const filePath = path.resolve(path.join(basePath, 'index.html'));
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    this.logger.error(data);
                    reject(err);
                }
                else {
                    this.logger.log(data);
                    resolve(data);
                }
            });
        });
    }
};
ClientService = ClientService_1 = __decorate([
    (0, common_1.Injectable)()
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map