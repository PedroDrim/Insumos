var planejeinsumos = angular.module('planejeinsumos', []);

planejeinsumos.controller('produtoscontroller', function($scope, $http) {
    
    $http.get("/produtos/data.json").then(function(produtos){
        var dados = produtos.data;
        $scope.linha1 = dados.slice(0,3);
        $scope.linha2 = dados.slice(3,6);
    }, function (err) {
        console.log("ERRO GET: " + err);
    });

    $http.post("/", {message: "oi"}).then(function (data) {
        console.log("OK POST: " + data)
    }, function (err) {
        console.log("ERRO POST: " + err)
    });
});

planejeinsumos.controller('chartcontroller', function($scope) {

});