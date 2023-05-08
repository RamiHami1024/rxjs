import { Observable } from 'rxjs';
import axios from 'axios';

function test(url: string) {
    const observable$ = new Observable((observer) => {
        axios.get(url)
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
            console.log('complete')
        },
    })
}

test('https://api.github.com/search/repositories?q=rxjs')
test('https://gitlab.com/api/v4/projects?search=nodejs')
