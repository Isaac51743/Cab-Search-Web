// assign parameters for the charts
let option4= {
    title: {
        text: 'crimes per hour'
    },
    tooltip: {},
    toolbox: {},
    legend: {
        data:['total','shooting'],
        x:'right'
    },
    grid:{
        left:'15%'
    },
    xAxis: [
        {
            type: 'category',
            data: [],
            axisPointer: {
                type: 'shadow'
            }
        }],
    yAxis: [{
        type: 'value',
        name: 'total',
        axisLabel: {
            formatter: '{value} times'
        },
        min:1500,
        max:11000
    }, {
        type: 'value',
        name: 'shooting',
        axisLabel: {
            formatter: '{value} times'
        },
        min:0,
        max:100
    }],
    series: [{
        name:'total',
        type:'bar',
        data:[]
    }, {
        name:'shooting',
        type:'bar',
        yAxisIndex: 1,
        data:[]
    }]};
let option5= {
    title: {
        text: 'crimes per month'
    },
    tooltip: {},
    toolbox: {},
    legend: {
        data:['total','shooting'],
        x:'right'
    },
    grid:{
        left:'15%'
    },
    xAxis: [{
        type: 'category',
        data: [],
        axisPointer: {
            type: 'shadow'
        }}],
    yAxis: [{
        type: 'value',
        name: 'total',
        axisLabel: {
            formatter: '{value} times'
        }}, {
        type: 'value',
        name: 'shooting',
        axisLabel: {
            formatter: '{value} times'
        }}],
    series: [{
        name:'total',
        type:'bar',
        data:[]
        }, {
        name:'shooting',
        type:'bar',
        yAxisIndex: 1,
        data:[]
        }]};

function draw2(){
    $.getJSON( '/chart2', function(data) {
        let xaxis1=[],y1axis1=[],y2axis1=[];
        let xaxis2=[],y1axis2=[],y2axis2=[];
        for (let i = 0; i < data[0].length; i++) {
            xaxis1.push(data[0][i][0]);
            y1axis1.push(data[0][i][1]);
            y2axis1.push(data[0][i][2]);
        }
        for (let i = 0; i < data[1].length; i++) {
            xaxis2.push(data[1][i][0]);
            y1axis2.push(data[1][i][1]);
            y2axis2.push(data[1][i][2]);
        }
        console.log(xaxis1,y1axis1);
        option4.xAxis[0].data=xaxis1;
        option4.series[0].data=y1axis1;
        option4.series[1].data=y2axis1;
        option5.xAxis[0].data=xaxis2;
        option5.series[0].data=y1axis2;
        option5.series[1].data=y2axis2;
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = echarts.init(document.getElementById('chart2'));
        let tem = document.getElementById("menu2").value;
    if (tem=="a") {
        $('#text2')[0].innerText='this chart calculates the total times of all crimes and shooting in each hour';
        myChart2.clear();
        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option4);
    }
    if (tem=="b") {
        $('#text2')[0].innerText='this chart calculates the total times of all crimes and shooting in each month';
        myChart2.clear();
        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option5);
    }
    });
}

