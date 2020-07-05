let option1 = {
    title: {
        text: 'cab source&times'
    },
    tooltip: {},
    legend: {
        data: ['times'],
        x:'right'
    },
    grid:{
        bottom:'20%'
    },
    xAxis: {
        data: [],
        axisLabel:{
            interval: 0,
            formatter:function(value) {
                debugger
                var ret = "";
                var maxLength = 5;//number of words in a row
                var valLength = value.length;
                var rowN = Math.ceil(valLength / maxLength);
                if (rowN > 1) {
                    for (var i = 0; i < rowN; i++) {
                        var temp = "";
                        var start = i * maxLength;
                        var end = start + maxLength;
                        temp = value.substring(start, end) + "\n";
                        ret += temp;
                    }
                    return ret;
                }
                else {
                    return value;
                }
            }
        }
        },
    yAxis: {
        min:32500,
        max:34500
    },
    series: [{
        name: 'times',
        type: 'bar',
        data: []
    }]
};
let option2= {
    title: {
        text: 'hour with cab times&multiplier'
    },
    tooltip: {},
    toolbox: {},
    legend: {
        data:['times','multiplier'],
        x:'right'
    },
    grid:{
        left:'15%'
    },
    xAxis:[{
        type: 'category',
        data: [],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        type: 'value',
        name: 'times',
        min: 1990,
        axisLabel: {
            formatter: '{value} times'
        }},
        {
            type: 'value',
            name: 'multiplier',
            axisLabel: {
                formatter: '{value} '
            }
        }],
    series: [{
        name:'times',
        type:'bar',
        data:[]
    }, {
        name:'multiplier',
        type:'line',
        yAxisIndex: 1,
        data:[]
    }]};
let option3 = {
    title: {
        text: 'weather&multiplier'
    },
    tooltip: {},
    legend: {
        data: ['multiplier'],
        x:'right'
    },
    xAxis: {
        data: [],
        axisLabel:{
            interval: 0,
            formatter:function(value) {
                debugger
                var ret = "";
                var maxLength = 5;
                var valLength = value.length;
                var rowN = Math.ceil(valLength / maxLength);
                if (rowN > 1) {
                    for (var i = 0; i < rowN; i++) {
                        var temp = "";
                        var start = i * maxLength;
                        var end = start + maxLength;
                        temp = value.substring(start, end) + "\n";
                        ret += temp;
                    }
                    return ret;
                } else {
                    return value;
                }
            }
        }
        },
    yAxis: {
        min:1,
        max:1.02
    },
    series: [{
        name: 'multiplier',
        type: 'bar',
        data: []
    }]};
function draw1(){
    $.getJSON( '/chart1', function(data) {
        let xaxis1 = [], yaxis1 = [];
        let xaxis2=[],y1axis2=[],y2axis2=[];
        let xaxis3 = [], yaxis3 = [];
        for (let i = 0; i < data[0].length; i++) {
            xaxis1.push(data[0][i][0]);
            yaxis1.push(data[0][i][1]);
        }
        for (i = 0; i < data[1].length; i++){
            xaxis2.push(data[1][i][0]);
            y1axis2.push(data[1][i][1]);
            y2axis2.push(data[1][i][2]);
        }
        for (let i = 0; i < data[2].length; i++) {
            xaxis3.push(data[2][i][0]);
            yaxis3.push(data[2][i][1]);
        }
        //show xaxis,yaxis
        console.log(xaxis2, y1axis2);

        option1.xAxis.data =xaxis1;
        option1.series[0].data = yaxis1;

        option2.xAxis[0].data=xaxis2;
        option2.series[0].data=y1axis2;
        option2.series[1].data=y2axis2;

        option3.xAxis.data =xaxis3;
        option3.series[0].data = yaxis3;

        let myChart1 = echarts.init(document.getElementById('chart1'));
        let tem = document.getElementById("menu1").value;
        if (tem=="a") {
            $('#text1')[0].innerText='this chart shows the relationship of cab source and using times ';
            myChart1.clear();
            myChart1.setOption(option1);
        }
        if (tem=="b") {
            $('#text1')[0].innerText='this chart shows the relationship of price multiplier and cab using times ';
            myChart1.clear();
            myChart1.setOption(option2);
        }
        if (tem=="c") {
            $('#text1')[0].innerText='this chart shows the relationship of price multiplier and weather ';
            myChart1.clear();
            myChart1.setOption(option3);
    }});
}
