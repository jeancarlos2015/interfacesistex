
var appCliente = angular.module("appCliente", []);

appCliente.controller("controllerClientes", function($scope, $http){
	
	$scope.clientes = [];
	$scope.clientes2 = [];
	$scope.cliente={};
	
	$scope.salvarCliente = function(){
		$http.post("http://servicocontroleclientes.herokuapp.com/cliente", $scope.cliente)
		.then(function(response) {
//			$scope.clientes.push(response.data);
			$scope.mensagem="Cliente cadastrado com sucesso!!!";
			console.log(response.data);
			console.log(response.status);
		} , function(response) {
			console.log(response.data);
			console.log(response.status);
		});
	}
	
//	$scope.carregarClientes = function() {
//		$http.get("http://servicocontroleclientes.herokuapp.com/cliente")
//		.then(function(response) {
//			$scope.clientes = response.data;
//			console.log(response.data);
//			console.log(response.status);
//		} , function(response) {
//			console.log(response.data);
//			console.log(response.status);
//		});
//	}
//	
	
});

