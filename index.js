/*jslint node: true */
'use strict';
module.exports = function (str, n) {
    if (typeof str !=="string") {
        throw new TypeError('Expected String but received' + typeof str);
    }
    return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
};