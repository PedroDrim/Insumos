var planejeinsumos = angular.module('planejeinsumos', []);

planejeinsumos.controller('produtoscontroller', function($scope, $http) {
    
    $http.get("/produtos/data.json").then(function(produtos){
        $scope.linha = produtos.data;
    }, function (err) {
        console.log("ERRO GET: " + err);
    });

    $http.post("/", {message: "oi"}).then(function (data) {
        console.log("OK POST: " + data)
    }, function (err) {
        console.log("ERRO POST: " + err)
    });
});

planejeinsumos.directive('card', function() {
  return {
    restrict: 'E',
    template: 
        '<div class="card">' +
            '<div class="view overlay hm-white-slight" id={{obj.identificador}}></div>' +
            '<div class="card-block">' +
                '<h4 class="card-title">{{obj.nome}}</h4>' +
                '<p class="card-text">{{obj.descricao}}</p>' +
                '<div class="read-more">' +
                    '<a href="#!" class="btn btn-brown">Comprar - {{obj.valor}} $</a>' +
                '</div>' +
            '</div>' +
        '</div>',
    replace: true,

    link: function(scope, elem, attr){

        scope.obj.valor = scope.obj.valores[0].preco;
        scope.obj.valores.forEach(function(element) { 
            if(element.preco < scope.obj.valor){
                scope.obj.valor = element.preco;
            }
        });

        var drawchart = function(){
            
            var insumo = scope.obj;
            var doc = document.getElementById(insumo.identificador);
            var chart = new google.visualization.ColumnChart(doc);
            var options = {
                chartArea: {width: '100%', height: '100%'},
                bars: 'vertical',
                hAxis: {
                    minValue: 0
                },
                legend: { position: "none" }
            };

            var colunas = [
                ["", "Preço por Kg"],
            ];

            insumo.valores.forEach(function(element) {
                colunas.push([element.marca, element.preco]); 
            });

            var data = new google.visualization.arrayToDataTable(colunas);
            chart.draw(data, options);
        }

        google.charts.load('current', {
            packages: ['corechart', 'bar'],
            callback: drawchart
        });

    }
  }
});