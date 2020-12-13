module.exports = function() {
    return {
        main: function(to, from, next) {
            console.log(to)
            console.log("sayfa geçişten önce");
            next()
        },
    }
}