import http from 'k6/http';
import { check, sleep,group } from 'k6';

export const options = {
    iterations: 3,
    thresholds: {
        http_req_failed: ['rate<=5.00'],
        http_req_duration: ['p(99)<2000'], // 99% of requests must complete below 10s
        'group_duration{group:::Bulbasaur-check}': ['p(99)<2000'],
        'group_duration{group:::Charmander-check}': ['p(99)<2000'],
        'group_duration{group:::Squirtle-check}': ['p(99)<2000'],
    },
}
export default function () {


    group('Bulbasaur-check', function() {
        let response = http.get('https://pokeapi.co/api/v2/pokemon/bulbasaur');
        console.log('Bulbasaur check response time was ' + String(response.timings.duration) + ' ms');

        check(response, {
            "validate 200 status code": (r) => r.status === 200
        })
        sleep(1);
    })

    group('Charmander-check', function() {
        let response = http.get('https://pokeapi.co/api/v2/pokemon/charmander');
        console.log('Charmander check response time was ' + String(response.timings.duration) + ' ms');

        check(response, {
            "validate 200 status code": (r) => r.status === 200
        })
        sleep(1);
    })

    group('Squirtle-check', function() {
        let response = http.get('https://pokeapi.co/api/v2/pokemon/squirtle');
        console.log('Squirtle check response time was ' + String(response.timings.duration) + ' ms');

        check(response, {
            "validate 200 status code": (r) => r.status === 200
        })
        sleep(1);
    })


}