const module = {
    prop : "my prop",
    config : {
        language : "es",
        cache : true
    },
    setConfig : conf => {
        module.config = conf
    },
    isCacheEnabled : () => {
        console.log(module.config.cache ? "si" : "no")
    }
}