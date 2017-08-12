var planejeinsumos = angular.module('planejeinsumos', ['chart.js']);

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

planejeinsumos.directive('insumos', function() {
    return {
        restrict: 'E',
        template: 
            '<div class="card">' +
                '<div class="view overlay hm-white-slight">' +
                    '<canvas id={{obj.identificador}} class="chart chart-bar" chart-options="options" chart-data="data" chart-labels="labels" chart-series="series" chart-click="onClick"></canvas>' +
                '</div>' +
                '<div class="card-block">' +
                    '<h4 class="card-title">{{obj.nome}}</h4>' +
                    '<p class="card-text">{{obj.descricao}}</p>' +
                    '<div class="read-more">' +
                        '<a href="#!" class="btn btn-brown">Comprar - {{obj.valor}} R$/Kg</a>' +
                    '</div>' +
                '</div>' +
            '</div>',
        replace: true,

        link: function(scope, elem, attr){

            var min = scope.obj.valores[0].preco;

            scope.series = ['Preço'];
            scope.labels = [];
            scope.data = [];
            scope.options = {
                scales: {
                    xAxes: [{
                            display: false
                    }]
                }
            };

            scope.obj.valores.forEach(function(v) {
                if(min > v.preco) {
                    // A condicional está trocada, o menor é o maior.
                    min = v.preco;
                }

                scope.labels.push(v.marca);
                scope.data.push(v.preco);
            });
            
            scope.onClick = function (points, evt) {
                var barLabel = points[0]._model.label;
                var barValue = scope.data[scope.labels.indexOf(barLabel)];
                scope.obj.valor = barValue;
                scope.$apply();
            };

            scope.obj.valor = min;
        }
    }
});
