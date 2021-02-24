var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx,
    
     {
    type: 'line',
    data: {
        labels: ["","May","April","March","feb",""],
        datasets: [{
            label: 'Series 1', // Name the series
            data: [450, 100, 400, 500, 700, 300, 400, 200, 300], // Specify the data values array
            fill: false,
            borderColor: '#71BC44', // Add custom color border (Line)
            backgroundColor: '#71BC44', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            pointBorderWidth: 0,
            pointRadius: 0,
        },
            {
            label: 'Series 2', // Name the series
            data: [300, 200, 350, 400, 220, 300, 200, 280, 400], // Specify the data values array
            fill: false,
            borderColor: '#71BC44', // Add custom color border (Line)
            backgroundColor: '#71BC44', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            pointBorderColor: "#ffffff",
            pointBorderWidth: 4,
            pointRadius: 6,
            pointHoverRadius: 8,
        },
                   {
            label: 'Series 3', // Name the series
            data: [200, 350, 200, 500, 800, 600, 400, 300, 200], // Specify the data values array
            fill: false,
            borderColor: '#F58031', // Add custom color border (Line)
            backgroundColor: '#F58031', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            pointBorderWidth: 0,
            pointBorderColor: "#ffffff",
            pointRadius: 0,
            pointBorderWidth: 4,
            pointRadius: 6,
            pointHoverRadius: 8,
        },
        {
          
            label: 'Series 4', // Name the series
            data: [600, 200, 150, 300, 300, 350, 460, 330, 100], // Specify the data values array
            fill: false,
            borderColor: '#F58031', // Add custom color border (Line)
            backgroundColor: '#F58031', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            pointBorderWidth: 0,
            pointBorderColor: "#ffffff",
            pointRadius: 0,
            pointBorderWidth: 4,
            pointRadius: 6,
            pointHoverRadius: 8,
        }]
    },
   
    options: {
   
      legend: {
            display: false,
        },
        tooltips: {
   
          cornerRadius: 0,
          fontColor: "black",
          // backgroundColor: "rgba(255,255,255)",
            // callbacks: {
            //     label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`, 
            //     title: () => null,
            //     labelColor: function(tooltipItem, chart) {
            //             return {
            //                 backgroundColor: '#ffc20f',
                           
            //             }
            //         },
                    
            // }
            
        },
        scales: {

      yAxes: [{
        ticks: {
        beginAtZero: true,
      

        // Return an empty string to draw the tick line but hide the tick label
        // Return `null` or `undefined` to hide the tick line entirely
        userCallback: function(value, index, values) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join('.');
            return '' + value;
        }
    }
      }]
    },
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});