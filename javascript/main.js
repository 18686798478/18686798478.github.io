require.config({
    paths:{
        "jquery":"jquery.min",
        "sousuo":"sousuo",
        "danji":"danji"
    }
})

require(["jquery","sousuo","danji"],function($,sousuo,danji){

    sousuo();
    danji();
})









