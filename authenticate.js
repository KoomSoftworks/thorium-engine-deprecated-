const https = require('https');
const Endpoint = require('./enums-interfaces/endpoint');

class authenticate{
    checkToken(token){
        const authOptions = {
            hostname: Endpoint.baseUrl,
            path: Endpoint.getAuth,
            headers: {
                Token: token
            }
        }
        try{
            https.get(authOptions, (response) => {
                console.log('statusCode:', response.statusCode);
                let result = '';
                response.on('data', function (chunk) {
                    result += chunk;
                });
                response.on('end', function () {
                    result = JSON.parse(result);
                    console.log(result.message);
                });
                if (response.statusCode != 200)
                    return false;
            });
            return true;
        } catch (ex) {
            console.log(ex)
        }
    }
}

module.exports = authenticate;