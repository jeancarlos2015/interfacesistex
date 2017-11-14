var appProduto = angular.module("appProduto", []);

appProduto.controller("controllerProdutos", function ($scope, $http) {

    $scope.produtos = [];
    $scope.carregarProdutos = function () {
        $http.get("https://servicocontrolepedidos.herokuapp.com/produto")
                .then(function(response) {
                    $scope.produtos = response.data;
                }, function(response) {
                    $scope.mensagem = "Erro nenhum produto foi listado!!!";
                });
    };
//    
//app.controller('myCtrl', function($scope, $http) {
//    $http({
//        method : "GET",
//        url : "welcome.htm"
//    }).then(function mySuccess(response) {
//        $scope.myWelcome = response.data;
//    }, function myError(response) {
//        $scope.myWelcome = response.statusText;
//    });
//});
});
