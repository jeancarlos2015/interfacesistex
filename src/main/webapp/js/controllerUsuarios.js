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
   
   $scope.autenticarUsuario = function (){
       $http.post('https://servicocontroleusuarios.herokuapp.com/usuario/autenticar',$scope.usuario).
        then(function(response) {
            if(response.data==="true"){
                $scope.mensagemUsuario = "Usuario habilitado";
            }else{
                $scope.mensagemUsuario = "Usuario ou Senha Inválidos";
            }
            
        });
   };  
});
