const axios = require("axios")
const urls = ["https://nama.glitch.me"] //ubah sesuai nama yg akan di uptime!
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
