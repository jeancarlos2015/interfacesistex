
var appUsuario = angular.module("appUsuario", []);

appUsuario.controller("controllerUsuarios", function($scope, $http){
	
	$scope.usuarios = [];
	$scope.usuarios2 = [];
	$scope.usuario={};
	
	$scope.salvarUsuario = function(){
            if($scope.pass === $scope.usuario.pass){
                $http.post("https://servicocontroleusuarios.herokuapp.com/usuario", $scope.usuario)
		.then(function(response) {
//			$scope.usuarios.push(response.data);
			$scope.mensagem="Login Registrado!!!";
			console.log(response.data);
			console.log(response.status);
		} , function(response) {
			console.log(response.data);
			console.log(response.status);
		});
            }else {
                $scope.mensagem = "Senha não confere!!!";
                
            };
		
	};
	
//	$scope.carregarUsuarios = function() {
//		$http.get("http://servicocontroleusuarios.herokuapp.com/usuario")
//		.then(function(response) {
//			$scope.usuarios = response.data;
//			console.log(response.data);
//			console.log(response.status);
//		} , function(response) {
//			console.log(response.data);
//			console.log(response.status);
//		});
//	}
//	
	
});

