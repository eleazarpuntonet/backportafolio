"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMiddleware = void 0;
const client_service_1 = require("./client.service");
const common_1 = require("@nestjs/common");
const path = require("path");
let ClientMiddleware = class ClientMiddleware {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async use(req, res, next) {
        if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
            const file = this.getAssetPath(req.path);
            res.sendFile(file, (err, success) => {
                if (err) {
                    res.status(err.status).end();
                }
            });
        }
        else {
            return next();
        }
    }
    getAssetPath(url) {
        const basePath = process.env.CLIENT_BUILD_PATH;
        return path.join(basePath, url);
    }
};
ClientMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientMiddleware);
exports.ClientMiddleware = ClientMiddleware;
//# sourceMappingURL=client.middleware.js.map