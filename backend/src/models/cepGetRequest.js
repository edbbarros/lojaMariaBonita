const https = require('https')

let getRequest = (url, path, method) => new Promise((resolve, reject) => {
    const options = {
        hostname: url,
        port: 443,
        path: path,
        method: method,
        headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
        }
    }
    const req = https.request(options, (res) => {
        res.setEncoding('utf8');
        if (res.statusCode == 200) {
            let data = "";
            res.on('data', (d) => {
                data += d;
            });
            res.on('end', function () {
                resolve(data);
            })
        } else {
            reject("Error: " + res.statusCode);
        }
    });
    req.on('error', (error) => {
        console.error(error)
        reject("Error: " + error);
    })
    req.end();
});

module.exports = getRequest;