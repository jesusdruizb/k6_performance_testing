import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    scenarios: {
        scenarioSharedIterations : {
            executor : 'shared-iterations',
            startTime: '10s',
            gracefulStop: '5s',
            vus: 5,
            iterations: 15,
            maxDuration: '15s'
        },
        scenarioConstantVus: {
            executor : 'constant-vus',
            vus: 10,
            duration: '30s',
        },
        scenarioConstantArrivalRate: {
            executor: 'constant-arrival-rate',
            duration: '30s',
            rate: 5,
            timeUnit: '1s',
            preAllocatedVUs: 4,
            maxVUs: 10,
        },
    }
}
export default function () {
    let response = http.get('https://test.k6.io');
    check(response, {
        "validate 200 status code": (r) => r.status === 200
    })
    sleep(0.1);
}