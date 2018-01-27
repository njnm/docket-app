webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_app_component__ = __webpack_require__("../../../../../src/app/main/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todos_todo_component__ = __webpack_require__("../../../../../src/app/todos/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todos_todo_service__ = __webpack_require__("../../../../../src/app/todos/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_http_service__ = __webpack_require__("../../../../../src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_filter_pipe__ = __webpack_require__("../../../../ng2-filter-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_filter_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__main_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todos_todo_component__["a" /* TodoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_filter_pipe__["Ng2FilterPipeModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__todos_todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_7__utils_http_service__["a" /* HttpService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__main_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <todos></todos>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/main/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todos/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-content\">\n  <h1 class=\"page-title\">Docket</h1>\n  <h5 class=\"sub-title\">The TODO tracker</h5>\n</div>\n<div class=\"todo-content\">\n    <div class=\"todo-create\">\n      <form #todoForm=\"ngForm\" (ngSubmit) = \"createTodo(todoForm)\" novalidate>\n        <input type=\"text\" id=\"description\" class=\"form-control\" placeholder=\"Enter a todo and press enter...\"\n               required\n               name=\"description\" [(ngModel)]=\"newTodo.description\"\n               #description=\"ngModel\"\n               [class.shake]= \"description.errors && description.errors.invalid\">\n               <a (click)=\"createTodo(todoForm)\" class=\"submit-btn\" title=\"Add TODO's\">\n                 <i class=\"material-icons\">library_add</i>\n               </a>\n        <div *ngIf=\"description.errors && description.dirty\"\n             class=\"alert alert-danger\">\n            <div [hidden]=\"!description.errors.required\">\n              Title is required.\n            </div>\n            <div [hidden]=\"!description.errors.exists\">\n              Todo already exists\n            </div>\n        </div>\n      </form>\n    </div>\n    <span class=\"todo-actions filter-box\" title=\"Filter TODO's\">\n      <span>Filter</span>\n      <a (click)=\"editTodo(todo)\" class=\"filter-list\">\n        <i class=\"material-icons\">filter_list</i>\n      </a>\n      <div class=\"filter-items\">\n        <div class=\"todo-row\" (click)=\"addFilter('all')\" [class.activated]= \"customFilter.isCompleted == undefined\">\n            <a class=\"todo-completed\">\n              <i class=\"material-icons toggle-completed-checkbox\"></i>\n            </a>\n            <span class=\"todo-title\">\n              All\n            </span>\n        </div>\n        <div class=\"todo-row\" (click)=\"addFilter('completed')\" [class.activated]= \"customFilter.isCompleted == true\">\n            <a class=\"todo-completed\">\n              <i class=\"material-icons toggle-completed-checkbox\"></i>\n            </a>\n            <span class=\"todo-title\">\n              Completed\n            </span>\n        </div>\n        <div class=\"todo-row\" (click)=\"addFilter('pending')\" [class.activated]= \"customFilter.isCompleted == false\">\n            <a class=\"todo-completed\">\n              <i class=\"material-icons toggle-completed-checkbox\"></i>\n            </a>\n            <span class=\"todo-title\">\n              Pending\n            </span>\n        </div>\n      </div>\n    </span>\n    <ul class=\"todo-list\">\n      <li *ngFor=\"let todo of todos | filterBy: customFilter\" class=\"todo-content-list\" [class.completed]= \"todo.isCompleted === true\" >\n        <div class=\"todo-row\" *ngIf=\"!editing || editingTodo.id != todo.id\">\n            <a class=\"todo-completed\" (click)=\"toggleCompleted(todo)\">\n              <i class=\"material-icons toggle-completed-checkbox\"></i>\n            </a>\n            <span class=\"todo-title\">\n              {{todo.description}}\n            </span>\n            <span class=\"todo-actions\">\n                <a (click)=\"editTodo(todo)\">\n                  <i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"deleteTodo(todo.id)\">\n                  <i class=\"material-icons delete\">clear</i>\n                </a>\n            </span>\n        </div>\n        <div class=\"todo-edit\" *ngIf=\"editing && editingTodo.id === todo.id\">\n            <input class=\"form-control\" type=\"text\"\n             [(ngModel)]=\"editingTodo.description\" required>\n            <span class=\"edit-actions\">\n                <a (click)=\"updateTodo(editingTodo)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n        </div>\n      </li>\n    </ul>\n    <div class=\"no-todos\" *ngIf=\"todos && todos.length == 0\">\n        <p>No Todos Found!</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/todos/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/todos/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo__ = __webpack_require__("../../../../../src/app/todos/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
        this.editing = false;
        this.editingTodo = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
        this.customFilter = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.getAllTodos();
    };
    TodoComponent.prototype.getAllTodos = function () {
        var _this = this;
        this.todoService.getAllTodos()
            .subscribe(function (todos) { return _this.todos = todos.reverse(); });
    };
    TodoComponent.prototype.createTodo = function (todoForm) {
        var _this = this;
        if (todoForm.valid) {
            this.todoService.createTodo(this.newTodo)
                .subscribe(function (createTodo) {
                todoForm.reset();
                _this.newTodo = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
                _this.todos.unshift(createTodo);
            }, function (error) {
                todoForm.form.controls['description'].setErrors({ 'exists': true });
            });
        }
        else {
            todoForm.form.controls['description'].setErrors({ 'invalid': true });
        }
    };
    TodoComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        this.todoService.deleteTodo(id)
            .subscribe(function () {
            _this.todos = _this.todos.filter(function (todo) { return todo.id != id; });
        });
    };
    TodoComponent.prototype.updateTodo = function (todoData) {
        var _this = this;
        console.log(todoData);
        this.todoService.updateTodo(todoData)
            .subscribe(function (updatedTodo) {
            var existingTodo = _this.todos.find(function (todo) { return todo.id === updatedTodo.id; });
            Object.assign(existingTodo, updatedTodo);
            _this.clearEditing();
        });
    };
    TodoComponent.prototype.addFilter = function (filterType) {
        switch (filterType) {
            case 'all': {
                this.customFilter = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
                break;
            }
            case 'completed': {
                this.customFilter.isCompleted = true;
                break;
            }
            case 'pending': {
                this.customFilter.isCompleted = false;
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    };
    TodoComponent.prototype.toggleCompleted = function (todoData) {
        var _this = this;
        todoData.isCompleted = !todoData.isCompleted;
        this.todoService.markAsCompleted(todoData)
            .subscribe(function (updatedTodo) {
            var existingTodo = _this.todos.find(function (todo) { return todo.id === updatedTodo.id; });
            Object.assign(existingTodo, updatedTodo);
        });
    };
    TodoComponent.prototype.editTodo = function (todoData) {
        this.editing = true;
        Object.assign(this.editingTodo, todoData);
    };
    TodoComponent.prototype.clearEditing = function () {
        this.editingTodo = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
        this.editing = false;
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'todos',
            template: __webpack_require__("../../../../../src/app/todos/todo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todos/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_http_service__ = __webpack_require__("../../../../../src/app/utils/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_app_constants__ = __webpack_require__("../../../../../src/app/utils/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoService = /** @class */ (function () {
    function TodoService(httpService) {
        this.httpService = httpService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__utils_app_constants__["a" /* CONSTANTS */].envurl;
    }
    TodoService.prototype.getAllTodos = function () {
        return this.httpService.get(this.baseUrl + '/todo/all')
            .map(function (response) { return response.json(); });
    };
    TodoService.prototype.createTodo = function (todoData) {
        return this.httpService.post(this.baseUrl + '/todos', todoData)
            .map(function (response) { return response.json(); });
    };
    TodoService.prototype.updateTodo = function (todoData) {
        return this.httpService.put(this.baseUrl + '/todos', todoData)
            .map(function (response) { return response.json(); });
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.httpService.delete(this.baseUrl + '/todos/' + id);
    };
    TodoService.prototype.markAsCompleted = function (todoData) {
        return this.httpService.put(this.baseUrl + '/mark-completed', todoData)
            .map(function (response) { return response.json(); });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/app/todos/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "../../../../../src/app/utils/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONSTANTS; });
var CONSTANTS = {
    // envurl : "http://localhost:8080/todo-app/api"
    envurl: "/api"
};


/***/ }),

/***/ "../../../../../src/app/utils/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    HttpService.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, data, {
            headers: headers
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
        ;
    };
    HttpService.prototype.put = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(url, data, {
            headers: headers
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
        ;
    };
    HttpService.prototype.patch = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch(url, data, {
            headers: headers
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
        ;
    };
    HttpService.prototype.delete = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(url, {
            headers: headers
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
        ;
    };
    HttpService.prototype.handleError = function (error) {
        console.error('Error occured ', error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.message || error);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map