# Run Load Tests

Load testing test to load the home page and then add a new computer. Load test creates 20 virtual users every second for 60 seconds which will send 20 GET and 20 POST requests each. 

### Prerequisites

Artillery is a simple but powerful load testing toolkit. You can use it to make your application perform better under high load. Use Artillery to make your application faster, more scalable, and more resilient.


### Setup

Once Node.js is installed, install Artillery with: `npm install -g artillery`

To check that the installation succeeded, run: `artillery dino`


### Running the tests

1. Open a new command prompt and CD to where the LoadTest.yml file is in the QATestingCaseKata\Load Tests repository
2. Run the tests with: `artillery run LoadTest.yml`


### Load Test Information

While the test is running, intermediate stats will be printed every 10 seconds (by default) and a complete report will be printed at the end of the test.

* `Scenarios launched` is the number of virtual users created in the preceding 10 seconds (or in total for the final report)
* `Scenarios completed` is the number of virtual users that completed their scenarios in the preceding 10 seconds (or in the whole test). Note: this is the number of completed sessions, not the number of sessions started and completed in a 10 second interval.
* `Requests completed` is the number of HTTP requests and responses or WebSocket messages sent
* `RPS sent` is the average number of requests per second completed in the preceding 10 seconds (or throughout the test)
* `Request latency` and `Scenario duration` are in milliseconds, and p95 and p99 values are the 95th and 99th percentile values (a request latency `p99` value of 500ms means that 99 out of 100 requests took 500ms or less to complete).

If you see `NaN` (“not a number”) reported as a value, that means not enough responses have been received to calculate the percentile.
* `Codes` is the count of HTTP response codes.

If there are any errors (such as socket timeouts), those will be printed under Errors in the report as well.