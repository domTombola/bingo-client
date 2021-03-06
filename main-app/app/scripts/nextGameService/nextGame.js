(function () {
    'use strict';
    angular.module('Tombola.BingoClient.NextGameService')
        .service('NextGameService',
        ['$state', '$interval', 'UserModel', 'Proxy', 'ObjectConverter', function ($state, $interval, UserModel, Proxy,
                                                                                   ObjectConverter) {
            var me = this;
            var gameLoop;
            me.timeToGame = 0;

            me.startCounter = function () {
                Proxy.nextGame().then(function (response) {
                    var counterObject = ObjectConverter.generateNextGameObject(response);
                    var currentDate = new Date();
                    var dateFromApi = new Date(counterObject.start);
                    me.timeToGame = Math.abs(dateFromApi.getTime() - currentDate.getTime());
                    gameLoop = $interval(updateTime, 1000, me.timeToGame);
                });
            };

            var updateTime = function () {
                me.timeToGame -= 1000;
                if (me.timeToGame < 1000) {
                    me.stop();
                    if (UserModel.ticketBought) {
                        $state.go('playing');
                        UserModel.ticketBought = false;
                        return;
                    }
                    me.startCounter();
                }
            };

            me.stop = function () {
                $interval.cancel(gameLoop);
            };
        }]);
})();
