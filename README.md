# k6_performance_testing

## Getting started

- Install K6 on your machine: https://k6.io/docs/get-started/installation/
    - Homebrew installed as a pre-requisite https://brew.sh/
- run
```
npm install
```
- test functionality with the following command:
```
npm run test:vus-test
```


To monitor results xk6-dashboard can be used in local executions.
Follow these instructions https://github.com/szkiba/xk6-dashboard#build

To run tests using the xk6 dashboard, use the command below changing the path where needed
```
./k6 run --out 'dashboard=period=1s' /Users/user.name/repository-name/scripts/script-name.js
```

the dashboard will accessible on port 5665 with any web browser: http://127.0.0.1:5665
