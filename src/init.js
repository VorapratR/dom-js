var CONSENTCOOKIE = CONSENTCOOKIE || (function() {
    var _args = {}; // private
    return {
        init: function(Args) {
            _args = Args;
        },
        getArgs: function() {
            return _args;
        }
    };
}());