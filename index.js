"use strict";
// import { ajax } from 'rxjs/ajax';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const data$ = ajax.getJSON('https://api.github.com/search/repositories?q=rxjs');
// data$.subscribe((value) => console.log('data$ value', value));
// const dataGitLab$ = ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs');
// dataGitLab$.subscribe((value) => console.log('dataGitLab$ value', value));
const rxjs_1 = require("rxjs");
const axios_1 = __importDefault(require("axios"));
function test(url) {
    let observable$ = new rxjs_1.Observable((observer) => {
        axios_1.default.get(url)
            .then((response) => {
            observer.next(response.data);
            observer.complete();
        })
            .catch((error) => {
            observer.error(error);
        });
    });
    const subscription = observable$.subscribe({
        next(data) {
            console.log('data => ', data);
        },
        error(err) {
            console.error('something wrong occurred: ' + err);
        },
        complete() {
            console.log('complete');
        },
    });
}
test('https://api.github.com/search/repositories?q=rxjs');
