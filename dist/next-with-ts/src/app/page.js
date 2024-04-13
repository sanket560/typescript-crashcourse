"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = __importDefault(require("@/components/Header"));
function Home() {
    return (<div>
      <Header_1.default title="next with typescript" color="orange"/>
    </div>);
}
exports.default = Home;
