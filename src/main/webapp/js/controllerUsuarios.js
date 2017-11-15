angular.module('appUsuario', [])
        .controller('controllerUsuarios', function ($scope, $http) {
            $scope.usuario = {};
            $scope.salvarUsuario = function () {
                $http.post('https://servicocontroleusuarios.herokuapp.com/usuario', $scope.usuario).
                        then(function (response) {
                            if (response.data) {
                                $scope.mensagemUsuario = "Usuario cadastrado com sucesso!!!";
                            } else {
                                $scope.mensagemUsuario = "Use um cadastro diferente !!!";
                            }
                        });
            };
            $scope.usuarioautent = {};
            $scope.autenticarUsuario = function () {
                $http.post('https://servicocontroleusuarios.herokuapp.com/usuario/autenticar', $scope.usuarioautent).
                        then(function (response) {
                            if (response.data) {
                                //$scope.mensagemUsuario = response.data;
                                $http.go("usuario"); //exemplo do .state abaixo

                                .state("usuario", {
                                    url: "/Usuario",
                                    controller: "UsuarioCtrl",
                                    templateUrl: "meu/caminho/usuario.html"
                                })
                            } else {
                                $scope.mensagemUsuario = "Usuário ou Senha Inválidos";
                            }

                        });
            };
        });
