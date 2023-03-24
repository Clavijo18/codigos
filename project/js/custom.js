barba.init({
    transitions:[{
        name: 'prueba',
        leave: function(data){
            var done = this.async();
            document.body.classList.add('LOADING...');
            setTimeout(function(){
                done()
            },900);
        },

        enter: function(data){
            var done = this.async();
            document.body.classList.add('LOADING...');
            setTimeout(function(){
                done()
            },900);
        }


    }]
})