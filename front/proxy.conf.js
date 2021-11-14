const PROXY_CONFIG = [{
    context: ['/api'],
    target: 'http://localhost:4100/',
    secure: false,
}, ];


module.exports = PROXY_CONFIG;