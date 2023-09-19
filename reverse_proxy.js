var net = require('net')
let config = {
    listen: "0.0.0.0",
    local_port: 5050,
    target_port: 8080,
    target_host: "192.168.10.3"
}
net.createServer(function (from) {
    var to = net.createConnection({
        host: config.target_host,
        port: config.target_port
    });
    from.pipe(to);
    to.pipe(from);
}).listen({
    host: config.listen,
    port: config.local_port,
}, () => console.log(`Server listening on ${config.listen}:${config.local_port}`))

