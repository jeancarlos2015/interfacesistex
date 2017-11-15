angular.module('appUsuario', [])
.controller('controllerUsuarios', function($scope, $http) {
    $scope.usuario = {};
   $scope.salvarUsuario = function (){
       $http.post('https://servicocontroleusuarios.herokuapp.com/usuario',$scope.usuario).
        then(function(response) {
            if(response.data){
                $scope.mensagemUsuario = "Usuario cadastrado com sucesso!!!";
            }
        });
   };
   $scope.usuarioautent = {};
   $scope.autenticarUsuario = function (){
       $http.post('https://servicocontroleusuarios.herokuapp.com/usuario/autenticar',$scope.usuarioautent).
        then(function(response) {
            if(response.data){
                $scope.mensagemUsuario = response.data;
            }else{
                $scope.mensagemUsuario = response.data;
            }
            
        });
   };  
});
