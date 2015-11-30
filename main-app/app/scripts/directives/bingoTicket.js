(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .directive('bingoTicket', function () {
            return {
                restrict: 'E',
                //templateUrl: 'html/bingoTicket.html'
                template: function (attr, element) {
                    return '<div ng-repeat="strip in game.bingo.bingoStrip"> <div class="bingoBackground"> <div class="gameboard gameboardPadding"> <bingo-cell strip-row="0" strip-column="0"></bingo-cell> <bingo-cell strip-row="0" strip-column="1"></bingo-cell> <bingo-cell strip-row="0" strip-column="2"></bingo-cell> <bingo-cell strip-row="0" strip-column="3"></bingo-cell> <bingo-cell strip-row="0" strip-column="4"></bingo-cell> <bingo-cell strip-row="0" strip-column="5"></bingo-cell> <bingo-cell strip-row="0" strip-column="6"></bingo-cell> <bingo-cell strip-row="0" strip-column="7"></bingo-cell> <bingo-cell strip-row="0" strip-column="8"></bingo-cell> <bingo-cell strip-row="1" strip-column="0"></bingo-cell> <bingo-cell strip-row="1" strip-column="1"></bingo-cell> <bingo-cell strip-row="1" strip-column="2"></bingo-cell> <bingo-cell strip-row="1" strip-column="3"></bingo-cell> <bingo-cell strip-row="1" strip-column="4"></bingo-cell> <bingo-cell strip-row="1" strip-column="5"></bingo-cell> <bingo-cell strip-row="1" strip-column="6"></bingo-cell> <bingo-cell strip-row="1" strip-column="7"></bingo-cell> <bingo-cell strip-row="1" strip-column="8"></bingo-cell> <bingo-cell strip-row="2" strip-column="0"></bingo-cell> <bingo-cell strip-row="2" strip-column="1"></bingo-cell> <bingo-cell strip-row="2" strip-column="2"></bingo-cell> <bingo-cell strip-row="2" strip-column="3"></bingo-cell> <bingo-cell strip-row="2" strip-column="4"></bingo-cell> <bingo-cell strip-row="2" strip-column="5"></bingo-cell> <bingo-cell strip-row="2" strip-column="6"></bingo-cell> <bingo-cell strip-row="2" strip-column="7"></bingo-cell> <bingo-cell strip-row="2" strip-column="8"></bingo-cell> </div> <div class="numbersLeft counterNumberSize">{{game.prizeNumbers.numbersToWin}}<br> <div class="togofix">to go!</div> </div> </div> </div>';
                }
            };
        });
})();
