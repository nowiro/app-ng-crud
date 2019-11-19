"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var uri = "mongodb://127.0.0.1:27017/local";
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Book = mongoose.model("Book", exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Jvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaURBQXFDO0FBRXJDLElBQU0sR0FBRyxHQUFXLGlDQUFpQyxDQUFDO0FBRXRELFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUTtJQUM3QixJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFCO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQU9VLFFBQUEsVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdkMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ3pDLENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQVEsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUN2RCxrQkFBZSxJQUFJLENBQUMifQ==