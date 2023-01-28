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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const config_1 = require("@nestjs/config");
const uuid_1 = require("uuid");
let AppService = class AppService {
    constructor(configService) {
        this.configService = configService;
    }
    async uploadPublicFile(Body, filename) {
        const s3 = new aws_sdk_1.S3();
        const Bucket = this.configService.get('AWS_PUBLIC_BUCKET_NAME');
        const params = {
            Bucket,
            Body,
            Key: `${(0, uuid_1.v4)()}-${filename}`,
            ACL: "public-read",
            ContentDisposition: "inline",
            CreateBucketConfiguration: {
                LocationConstraint: "us-east-2"
            }
        };
        try {
            const uploadResult = await s3.upload(params).promise();
            return uploadResult.Location;
        }
        catch (e) {
            console.log(e);
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map