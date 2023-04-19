import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 5,
    duration: '5s'
}
export default function () {
    let response = http.get('https://test.k6.io');
    check(response, {
        "validate 200 status code": (r) => r.status === 200
    })
    sleep(1);
}