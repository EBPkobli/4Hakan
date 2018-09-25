    $(function() {

            $('.dilim').easyPieChart({
            easing: 'easeOutElastic',
            size: 100 ,
            barColor: '#17d3e6' ,
            scaleColor: false,
            lineWidth: 8,
            trackColor: '#373737',
            lineCap: 'butt',
            animate: 3000,
            onStep: function(from,to,currentValue)
            {
               $(this.el).find('.percent').text(Math.round(currentValue)+'%');
            }
        });



    });