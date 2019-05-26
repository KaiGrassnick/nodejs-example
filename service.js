'use strict';

module.exports = {
    handle: async (request, response) => {
        let query = request.query;
        let data  = {};

        if (typeof query.action === 'undefined') {
            response.status(500).send('parameter action needs to be defined');
            return;
        }

        data.action = query.action;

        // debug / log in console -> stdout
        console.log('Incoming request. Target: /service, Action: ' + data.action);

        // answer to client
        response.status(200).send('Request with parameter action = ' + data.action);
    }
};
