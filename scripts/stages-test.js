import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        {duration: "3s", target: 2},
        {duration: "3s", target: 3},
        {duration: "3s", target: 4},
        {duration: "3s", target: 3},
        {duration: "3s", target: 2},
    ]
}
export default function () {
    let response = http.get('https://test.k6.io');
    check(response, {
        "validate 200 status code": (r) => r.status === 200
    })
    sleep(0.1);
}