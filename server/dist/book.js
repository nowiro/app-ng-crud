"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/local";
mongoose_1.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.BookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Book = mongoose_1.model("Book", exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0Q7QUFFbEQsSUFBTSxHQUFHLEdBQVcsaUNBQWlDLENBQUM7QUFFdEQsa0JBQU8sQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRO0lBQ3BCLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUN4QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxVQUFVLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQ25DLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN2QyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDekMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxJQUFJLEdBQUcsZ0JBQUssQ0FBQyxNQUFNLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQ3ZDLGtCQUFlLElBQUksQ0FBQyJ9