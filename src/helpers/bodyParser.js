function bodyParser() {
    let body = '';

        response.on('data', (chunk) => {
            body += chunk;
        });

        response.on('end', () => {
            body = JSON.parse(body);
            request.body = body;
            callback();
        });
};

module.exports = bodyParser;