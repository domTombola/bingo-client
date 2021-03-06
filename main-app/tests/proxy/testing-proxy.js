(function () {
    'use strict';
    describe('Testing proxy', function () {
        var constants,
            $httpBackend;
        var responseDataForLogin = {'message':'LoginSuccess'};

        var responseDataForLogout = {'message':'LogoutSuccess'};

        beforeEach(function () {
            module('Tombola.BingoClient.Proxy');
            inject(function ($injector) {
                constants = $injector.get('proxy');
                $httpBackend = $injector.get('$httpBackend');
            });
        });

        it('Ensures login function communicates successfully with api', function () {
            $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:30069/users/login', {'username': 'drwho',
                'password': 'tardis123!'}).respond(responseDataForLogin);

            var returnedPromise = constants.login('drwho', 'tardis123!');
            returnedPromise.then(function(response){
                response.should.deep.equal(responseDataForLogin);
            });
            $httpBackend.flush();
        });

        it('Ensures logout function successfully communicates with the api', function () {
            $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:30069/users/logout').respond(responseDataForLogout);

            var returnedPromise = constants.logout('token');
            returnedPromise.then(function(response){
                response.should.deep.equal(responseDataForLogout);
            });
            $httpBackend.flush();
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();
