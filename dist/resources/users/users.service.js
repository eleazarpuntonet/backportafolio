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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersModel) {
        this.usersModel = usersModel;
    }
    async create(createUserDto) {
        const newUser = new this.usersModel(createUserDto);
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashPassword;
        const model = await newUser.save();
        const _a = model.toJSON(), { password } = _a, obj = __rest(_a, ["password"]);
        return obj;
    }
    async findAll(params) {
        if (params) {
            const { limit, offset } = params;
            return await this.usersModel.find().skip(offset).limit(limit).exec();
        }
        return await this.usersModel.find().exec();
    }
    async findOne(id) {
        const user = await this.usersModel.findById(id);
        if (!user)
            throw new common_1.NotFoundException(`Usuario ${id} no encontrado`);
        return user;
    }
    async findByEmail(email) {
        const user = await this.usersModel.findOne({ email: email }).exec();
        if (!user)
            throw new common_1.NotFoundException(`${email} no encontrado`);
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.usersModel.findByIdAndUpdate(id, updateUserDto, { new: true });
        if (!user)
            throw new common_1.NotFoundException(`El usuario ${id} no fue encontrado`);
        return user;
    }
    remove(id) {
        return this.usersModel.findByIdAndDelete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USERS_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map