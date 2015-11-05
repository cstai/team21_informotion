//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
// -------------------------------------- NAVIGATION BUTTON --------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var btns = document.getElementsByClassName("btn");
var stripes = document.getElementsByClassName("stripe");
var btn = document.getElementById("btn");
var btnTL = new TimelineMax();

var state = false;
$("#btn").click(function(){
  if(state == false){
    state = true;
    btnTL.staggerTo(btns,0.2,{y:0,ease: Expo.easeOut},0.1);
    TweenMax.to(btn,0.8,{backgroundColor:"rgb(231,76,60,0.4)"});
    var crossTLFront = new TimelineMax();
    crossTLFront.to(stripes[0],0.2,{y:11})
      .to(stripes[2],0.2,{y:-11})
      .to(stripes[1],0.2,{opacity:0})
      .to(stripes[0],0.2,{rotation:-45, transformOrigin:"50% 50%"},"-=0.2")
      .to(stripes[2],0.2,{rotation:45, transformOrigin:"50% 50%"},"-=0.2");

    console.log("click");
  }else if(state == true){
    state = false;
    btnTL.staggerTo(btns,0.2,{y:-800,ease: Expo.easeOut},0.1);
    TweenMax.to(btn,0.8,{backgroundColor:"#90ed7d"});
    var crossTLBack = new TimelineMax();
    crossTLBack.to(stripes[0],0.2,{rotation:0, transformOrigin:"50% 50%"})
      .to(stripes[2],0.2,{rotation:0, transformOrigin:"50% 50%"})
      .to(stripes[1],0.2,{opacity:1})
      .to(stripes[0],0.2,{y:0},"-=0.2")
      .to(stripes[2],0.2,{y:0},"-=0.2");
  }
});

$("#one").click(function() {
    $('html, body').animate({
        scrollTop: $("#video").offset().top
    }, 800);
});

$("#two").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 800);
});

$("#three").click(function() {
    $('html, body').animate({
        scrollTop: $("#education").offset().top
    }, 800);
});

$("#four").click(function() {
    $('html, body').animate({
        scrollTop: $("#age").offset().top
    }, 800);
});

$("#five").click(function() {
    $('html, body').animate({
        scrollTop: $("#sex").offset().top
    }, 800);
});

$("#six").click(function() {
    $('html, body').animate({
        scrollTop: $("#year").offset().top
    }, 800);
});


//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//--------------------------------------- EDUCATION --------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------


$(function () {
            $('#conEdu').highcharts({
                chart: {
                    type: 'column'
                },
                
                title: {
                    text: null
                },
                
                xAxis: {
                    categories: ['Onbekend', 
                                 'Basisonderwijs', 
                                 'VMBO, MBO1, AVO onderbouw', 
                                 'HAVO, VWO, MBO', 
                                 'HBO, WO bachelor', 
                                 'WO, Master, Doctor'
                                ],
                    title: {
                        text: 'Onderwijsniveau'
                    }
                },

                yAxis: {
                    min: 0,
                    title: {
                        text: 'Procenten'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                
                legend: {
                    align: 'center',
                    x: 0,
                    verticalAlign: 'bottom',
                    y: 60,
                    floating: true,
                    shadow: false,
                    itemDistance: 50,
                    title: {
                text: 'Filteren op:'
            },
                },
                
                tooltip: {
                    headerFormat: '<b>{point.x}</b><br/>',
                    pointFormat: '{series.name}: <b>({point.y}%)</b><br/>'
                },
                
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                            style: {
                                textShadow: '0 0 3px black'
                            }
                        }
                    }
                },
                
                series: [{
                    name: 'Ernstig overgewicht',
                    data: [17.6, 23.1, 17.6, 15.3, 9.7, 8.4]
                    }, {
                    name: 'Matig overgewicht',
                    data: [47.2, 40, 39.6, 39.9, 36.1, 32.3]
                    }, {
                    name: 'Normaal gewicht',
                    data: [35.2, 35.9, 41.8, 43.5, 53.1, 57.9]
                    }, {
                    name: 'Ondergewicht',
                    data: [0, 1, 1, 1.3, 1.1, 1.4]
                    }]
            });
        });


//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
// -------------------------------------- AGE --------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------


$(function () {
            $('#conAge').highcharts({
                chart: {
                    type: 'column'
                },
                
                title: {
                    text: null
                },
                
                xAxis: {
                    categories: ['4-12', 
                                 '12-16', 
                                 '16-20', 
                                 '20-30', 
                                 '30-40', 
                                 '40-50', 
                                 '50-55', 
                                 '55-65', 
                                 '65-75', 
                                 '75+'
                                ],
                    title: {
                        text: 'Leeftijden (in jaren)'
                    }
                },
                
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Procenten'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                
                legend: {
                    align: 'center',
                    x: 0,
                    verticalAlign: 'bottom',
                    y: 60,
                    floating: true,
                    shadow: false,
                    itemDistance: 50,
                    title: {
                text: 'Filteren op:'
            },
                },
                
                tooltip: {
                    headerFormat: '<b>{point.x}</b><br/>',
                    pointFormat: '{series.name}: <b>({point.y}%)</b><br/>'
                },
                
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                            style: {
                                textShadow: '0 0 3px black'
                            }
                        }
                    }
                },
                
                series: [{
                    name: 'Ernstig overgewicht',
                    data: [9, 8.6, 11.3, 20.7, 32.3, 39.1, 42.1, 43.4, 44.1, 39.1]
                    }, {
                    name: 'Matig overgewicht',
                    data: [3.6, 3, 4.5, 7.5, 10.1, 15.2, 15.4, 17.5, 18.9, 16.8]
                    }, {
                    name: 'Normaal gewicht',
                    data: [80.8, 85.7, 81.2, 68.5, 55.1, 44.9, 41.6, 38.5, 36.6, 43.2]
                    }, {
                    name: 'Ondergewicht',
                    data: [6.6, 2.7, 3, 3.3, 2.5, 0.8, 0.9, 0.6, 0.4, 0.9]
                    }]
            });
        });


//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
// -------------------------------------- SEX MALE--------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------


$(function () {

    var colors = Highcharts.getOptions().colors,
        categories = ['Ernstig overgewicht', 
                      'Matig overgewicht', 
                      'Normaal gewicht', 
                      'Ondergewicht'
                     ],
        data = [{
            y: 10.5,
            color: colors[0],
        }, {
            y: 36.1,
            color: colors[1],
        }, {
            y: 51.8,
            color: colors[2],
        }, {
            y: 1.6,
            color: colors[3],
        }, ],
        soortData = [],
        i,
        j,
        dataLen = data.length,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add data
        soortData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
    }

    // Create the chart
    $('#conMale').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Mannen',
            y: 70
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor)
                        || 'black'
                    }
                }
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Aantal in procenten',
            data: soortData,
            dataLabels: {
                formatter: function () {
                    return this.y > 4 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -40
            }
        }]
    });
});


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// -------------------------------------- SEX FEMALE --------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


$(function () {

    var colors = Highcharts.getOptions().colors,
        categories = ['Ernstig overgewicht', 
                      'Matig overgewicht', 
                      'Normaal gewicht', 
                      'Ondergewicht'
                     ],
        data = [{
            y: 14,
            color: colors[0],
        }, {
            y: 27.1,
            color: colors[1],
        }, {
            y: 56.5,
            color: colors[2],
        }, {
            y: 2.4,
            color: colors[3],
        }, ],
        soortData = [],
        i,
        j,
        dataLen = data.length,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        soortData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
    }

    // Create the chart
    $('#conFemale').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Vrouwen',
            y: 70
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor)
                        || 'black'
                    }
                }
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Aantal in procenten',
            data: soortData,
            dataLabels: {
                formatter: function () {
                    return this.y > 4 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -40
            }
        }]
    });
});


//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// -------------------------------------- YEAR -------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------


 $(function () {
    $('#conYear').highcharts({
        chart: {
            type: 'spline',
            spacingBottom: 30
        },
        title: {
            text: null
        },
        legend: {
            align: 'center',
                    x: 0,
                    verticalAlign: 'bottom',
                    y: 60,
                    floating: true,
                    shadow: false,
                     title: {
                        text: 'Filteren op:'
                    },
            
        },
        xAxis: {
            categories: ['1981', 
                         '1991', 
                         '2001', 
                         '2011', 
                         '2012', 
                         '2013', 
                         '2014'
                        ],
            title: {
                text: 'Jaren'
            }
        },
        yAxis: {
            title: {
                text: 'Procenten'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Ernstig overgewicht (4-20)',
            data: [2.1, 1.8, 2.5, 2.7, 2.4, 2.3, 3.7]
        }, {
            name: 'Matig overgewicht (4-20)',
            data: [8.0, 9.3, 9.2, 10.1, 10.8, 9.5, 9.5]
        },
          {
            name: 'Ernstig overgewicht (20+)',
            data: [5.3, 5.9, 9.6, 11.4, 12, 11.8, 14.2]
        }, 
                {
            name: 'Matig overgewicht (20+)',
            data: [28.2, 29.3, 35.3, 36.8, 35.9, 36.4, 36.7]
        }]
    });
});


//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
// -------------------------------------- AUTOMATIC SCROLL --------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
 

(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},500)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= document.getElementsByTagName('section');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    $('html,body').animate({
      scrollTop: a[i].offsetTop
    });
  });
})();


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
// -------------------------------------- BACKGROUND COLOR TOGGLE --------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


var elements = document.getElementsByTagName("section");
var inVP = function(el){    
    var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

var toggleColor = function(){
    if(inVP(elements[0]) == true){
        btns[0].style.background = "#1abc9c";
        btns[1].style.background = "#696969";
        btns[2].style.background = "#696969";
        btns[3].style.background = "#696969";
        btns[4].style.background = "#696969";
        btns[5].style.background = "#696969";
    } else if(inVP(elements[1]) == true){
        btns[0].style.background = "#696969";
        btns[1].style.background = "#1abc9c";
        btns[2].style.background = "#696969";
        btns[3].style.background = "#696969";
        btns[4].style.background = "#696969";
        btns[5].style.background = "#696969";
    }else if(inVP(elements[2]) == true){
        btns[0].style.background = "#696969";
        btns[1].style.background = "#696969";
        btns[2].style.background = "#1abc9c";
        btns[3].style.background = "#696969";
        btns[4].style.background = "#696969";
        btns[5].style.background = "#696969";
    }else if(inVP(elements[3]) == true){
        btns[0].style.background = "#696969";
        btns[1].style.background = "#696969";
        btns[2].style.background = "#696969";
        btns[3].style.background = "#1abc9c";
        btns[4].style.background = "#696969";
        btns[5].style.background = "#696969";
    }else if(inVP(elements[4]) == true){
        btns[0].style.background = "#696969";
        btns[1].style.background = "#696969";
        btns[2].style.background = "#696969";
        btns[3].style.background = "#696969";
        btns[4].style.background = "#1abc9c";
        btns[5].style.background = "#696969";
    }else if(inVP(elements[5]) == true){
        btns[0].style.background = "#696969";
        btns[1].style.background = "#696969";
        btns[2].style.background = "#696969";
        btns[3].style.background = "#696969";
        btns[4].style.background = "#696969";
        btns[5].style.background = "#1abc9c";
    }
}
setInterval(function(){toggleColor()},1);


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
// ----------------------------------------------- VIDEO -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


var video = document.getElementById("video");

var clickVideo = function(){
    setTimeout(function(){btn.click()},23500);
}

video.addEventListener("click", clickVideo, false);