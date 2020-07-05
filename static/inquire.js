
function inquire(){
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let hour = document.getElementById("hour").value;
    $.post( '/inquire', {'source':source, 'destination':destination,'hour':hour}, function(data) {
        $('#p1')[0].innerText=data[0];
        $('#p2')[0].innerText=data[1];
        $('#p3')[0].innerText=data[2];
        $('#p4')[0].innerText=data[3];
        $('#p5')[0].innerText=data[4];
        $('#p6')[0].innerText=data[5];
        $('#p7')[0].innerText=data[6];
        $('#p8')[0].innerText=data[7];
        $('#p9')[0].innerText=data[8];
        $('#p10')[0].innerText=data[9];
        $('#p11')[0].innerText=data[10];
        $('#p12')[0].innerText=data[11];
    });
}

