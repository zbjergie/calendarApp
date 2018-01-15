'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
        return 'Hello, world!';
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, h) {
        return ('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start((err) => {
    //TODO: somehow console.logs cannot escape this internal method. Can I pass the real console in somehow? 
    if (err) {
        console.log('found an error!')
        throw err;
    } else {
        console.log('no errors found')
    }

    console.log(`Server running at: ${server.info.uri}`);
});
