# Test


Start: `docker-compose up` start with `-d` if you want to detach the output

Stop: `docker-compose down`

Install dependencies: `docker-compose exec app npm install`

Start app: `docker-compose exec app npm start`

Test: `http://127.0.0.1/service?action=off`



Access container bash directly: `docker-compose exec app bash`



## Further steps
Build image: `docker build -t example/some-app .`

