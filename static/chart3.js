let option6= {
    title: {
        text: 'crimes and cab use'
    },
    tooltip: {},
    toolbox: {},
    legend: {
        data:['crime','destination','departure'],
        x:'right'
    },
    grid:{left:'15%',right:'15%'},
    xAxis: [{
        type: 'category',
        data: [],
        axisPointer: {
            type: 'shadow'
        },
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
    }],
    yAxis: [{
        type: 'value',
        name: 'crime',
        axisLabel: {
            formatter: '{value} times'
        },
    }, {
        type: 'value',
        name: 'destination & departure',
        axisLabel: {
            formatter: '{value} times'
        },
        min:32000,
        max:35000
    }, {
        type: 'value',
        name: 'destination & departure',
        axisLabel: {
            formatter: '{value} times'
        },
        min:32000,
        max:35000
    }],
    series: [{
        name:'crime',
        type:'bar',
        data:[]
    }, {
        name:'destination',
        type:'bar',
        yAxisIndex: 1,
        data:[]
    }, {
        name:'departure',
        type:'bar',
        yAxisIndex: 1,
        data:[]
    }]};
$.getJSON( '/chart3', function(data) {
    let xaxis=[],y1axis=[],y2axis=[],y3axis=[];
    for (let i = 0; i < data.length; i++) {
        xaxis.push(data[i][0]);
        y1axis.push(data[i][1]);
        y2axis.push(data[i][2]);
        y3axis.push(data[i][3]);
    }
    console.log(xaxis,y1axis);
    option6.xAxis[0].data=xaxis;
    option6.series[0].data=y1axis;
    option6.series[1].data=y2axis;
    option6.series[2].data=y3axis;
    // 基于准备好的dom，初始化echarts实例
    let myChart3 = echarts.init(document.getElementById('chart3'));
    $('#text3')[0].innerText='this chart calculates the total times of crimes and cab number';
    myChart3.clear();
    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option6);
});

