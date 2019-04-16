function obj2String(data) {
    let searchStr = "";
    Object.keys(data).forEach(key => {
        searchStr += `${key}=${data[key]}&`;
    });
    return searchStr.substr(0, searchStr.lastIndexOf("&"));
}

class Fetch {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.defaults = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            cache: "force-cache",
            mode: "cors"
        }
    }

    get(url, settings) {
        return this.request(url, settings, 'GET')
    }

    post(url, settings) {
        return this.request(url, settings, 'POST')
    }

    request(url, settings, method) {
        method = method.toUpperCase();
        url = this.baseUrl + url;
        let data;
        if (settings) {
            data = settings.data
        }

        let defaults = {
            ...this.defaults,
            method
        };

        if (settings && settings.headers) {
            defaults = {
                ...defaults,
                headers: {
                    ...defaults.headers,
                    ...settings.headers
                }
            };
        }

        if (method === 'GET') {
            let searchStr = obj2String({});
            if (searchStr !== "") {
                url += `?${searchStr}`;
            }
        }

        if (method === 'POST') {
            defaults = {
                ...defaults,
                body: JSON.stringify(data)
            };
        }

        return fetch(url, defaults).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                throw response;
            }
        });
    }
}


class Fetch2 extends Fetch {
    constructor(baseUrl) {
        super(baseUrl)
    }

    getToken(url, settings, method) {
        return fetch(`https://www.vue-js.com/${url}`).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                throw response;
            }
        }).then((response) => {

            if (!response) {
                return super.request(url, settings, method)
            } else {
                console.log(count)
                if (count < 1) {
                    count += 1
                    return this.getToken(url, settings, method)
                }

            }
        });
    }

    request(url, settings, method) {
        return this.getToken(url, settings, method)
    }
}


let f = new Fetch2('https://www.vue-js.com')

f.get('/api/v1/topic/5b9699fccd6b2d5e4fd9e53e').then(res => res.json()).then(console.log).catch(err => console.log(err, 1111))
f.get('/api/v1/topics').then(res => res.json()).then(console.log).catch(err => console.log(err, 1111))
