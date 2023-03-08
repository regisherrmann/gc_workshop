"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listeningServer = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.status(200).json({
        msg: "API is up",
        data: null,
    });
});
exports.listeningServer = app.listen(8080, () => {
    console.log("server started on port 8080");
});
exports.default = app;
