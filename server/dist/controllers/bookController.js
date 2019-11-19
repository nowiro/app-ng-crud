"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = __importDefault(require("./../book"));
// We'll start with allBooks which will return
// every we have from our database
exports.allBooks = function (req, res) {
    var books = book_1.default.find(function (err, books) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(books);
        }
    });
};
exports.getBook = function (req, res) {
    var book = book_1.default.findById(req.params.id, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.deleteBook = function (req, res) {
    var book = book_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted Book");
        }
    });
};
exports.updateBook = function (req, res) {
    console.log(req.body);
    var book = book_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated book!");
        }
    });
};
exports.addBook = function (req, res) {
    var book = new book_1.default(req.body);
    console.log(req.body);
    console.log(book);
    book.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(book);
            res.send(book);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9ib29rQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLG1EQUE2QjtBQUU3Qiw4Q0FBOEM7QUFDOUMsa0NBQWtDO0FBQ3ZCLFFBQUEsUUFBUSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDaEQsSUFBSSxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVEsRUFBRSxLQUFVO1FBQ3pDLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRVMsUUFBQSxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMvQyxJQUFJLElBQUksR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxFQUFFLElBQVM7UUFDMUQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVTLFFBQUEsVUFBVSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsSUFBSSxJQUFJLEdBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQUMsR0FBUTtRQUN6RCxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFUyxRQUFBLFVBQVUsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksSUFBSSxHQUFHLGNBQUksQ0FBQyxpQkFBaUIsQ0FDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ2IsR0FBRyxDQUFDLElBQUksRUFDUixVQUFDLEdBQVEsRUFBRSxJQUFTO1FBQ2xCLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVTLFFBQUEsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7UUFDakIsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==