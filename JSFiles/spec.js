"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Chain local ors demo", () => {
    it("Open calculator website", () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
    }));
    it("Open Angular link", () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.get("https://angularjs.org/");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0M7QUFLL0MsUUFBUSxDQUFDLHNCQUFzQixFQUFDLEdBQUUsRUFBRTtJQUU1QixFQUFFLENBQUMseUJBQXlCLEVBQUMsR0FBTyxFQUFFO1FBRW5DLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7SUFFN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQyxHQUFPLEVBQUU7UUFFNUIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUUxQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBTU4sQ0FBQyxDQUNKLENBQUEifQ==