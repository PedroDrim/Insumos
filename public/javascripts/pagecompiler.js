var drawMaterial = function(id, colunas) {

    var data = new google.visualization.arrayToDataTable(colunas);

    var options = {
        chartArea: {width: '100%', height: '100%'},
        bars: 'vertical',
        hAxis: {
            minValue: 0
        },
        legend: { position: "none" }
    };

    var chart = new google.charts.Bar(
        document.getElementById(id)
    );

    var selectHandler = function() {
        var selectedItem = chart.getSelection()[0];
        if (selectedItem) {
            var value = data.getValue(selectedItem.row, selectedItem.column);
            console.log('The user selected ' + value);
        }
    }

    // Listen for the 'select' event, and call my function selectHandler() when
    // the user selects something on the chart.
    google.visualization.events.addListener(chart, 'select', selectHandler);

    chart.draw(data, options);
}

var chartcompiler = function(){
    var colunas = [
        ["", "Preço por Kg"],
        ["Marca A", 12.50],
        ["Marca B", 10.75],
        ["Marca C", 9.20],
        ["Marca D", 18.00]
    ];

    drawMaterial("graphicTest", colunas)
    drawMaterial("graphicTest2", colunas)
    drawMaterial("graphicTest3", colunas)
    drawMaterial("graphicTest4", colunas)
    drawMaterial("graphicTest5", colunas)
    drawMaterial("graphicTest6", colunas)
}