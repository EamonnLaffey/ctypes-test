var {Cc, Ci, Cu} = require('chrome');
Cu.import('resource://gre/modules/ctypes.jsm');
Cu.import('resource://gre/modules/Services.jsm');

var data = require('sdk/self').data;

var dllPath = Services.io.newURI(data.url('operations.dll'), null, null).QueryInterface(Ci.nsIFileURL).file.path;
console.log('operations.dll path: ' + dllPath);
var lib = ctypes.open(dllPath);
var doOperation = lib.declare('do_operation', ctypes.default_abi, ctypes.void_t);
console.log('about to do operation');
doOperation();
console.log('just did operation');