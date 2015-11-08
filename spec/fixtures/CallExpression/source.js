var res = obj.getCtx().getOne();

console.log(res);

var a = obj.getCtx;
var b = obj["getCtx"]();

// shouldn't wrap require.ensure
require.ensure(["module-a", "module-b"], function(require) {
  var a = require("module-a");
});

// shouldn't wrap define
define(function(require) {
  require("module-a");
});

define(["module-a", "module-b"], function(a, b) {
  // ...
});
