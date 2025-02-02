// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Express = require("bs-express/src/Express.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Process = require("process");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function checkProperty(req, next, property, k, res) {
  var reqData = Express.$$Request.asJsonObject(req);
  var match = Js_dict.get(reqData, property);
  if (match !== undefined) {
    var match$1 = Js_json.decodeBoolean(Caml_option.valFromOption(match));
    if (match$1 !== undefined && match$1) {
      return Curry._1(k, res);
    } else {
      return Curry._2(next, Express.Next.route, res);
    }
  } else {
    return Curry._2(next, Express.Next.route, res);
  }
}

function checkProperties(req, next, properties, k, res) {
  var aux = function (properties) {
    if (properties) {
      var tl = properties[1];
      return checkProperty(req, next, properties[0], (function (param) {
                    return aux(tl);
                  }), res);
    } else {
      return Curry._1(k, res);
    }
  };
  return aux(properties);
}

function setProperty(req, property, res) {
  var reqData = Express.$$Request.asJsonObject(req);
  reqData[property] = true;
  return res;
}

function getDictString(dict, key) {
  var match = Js_dict.get(dict, key);
  if (match !== undefined) {
    return Js_json.decodeString(Caml_option.valFromOption(match));
  }
  
}

function makeSuccessJson(param) {
  var json = { };
  json["success"] = true;
  return json;
}

var app = Express.express(/* () */0);

Express.App.disable(app, "x-powered-by");

Express.App.useOnPath(app, "/", Express.Middleware.from((function (next, req, res) {
            return Curry._2(next, Express.Next.middleware, setProperty(req, "middleware0", res));
          })));

Express.App.useWithMany(app, [
      Express.Middleware.from((function (next, req) {
              return (function (param) {
                  return checkProperty(req, next, "middleware0", (function (res) {
                                return Curry._2(next, Express.Next.middleware, setProperty(req, "middleware1", res));
                              }), param);
                });
            })),
      Express.Middleware.from((function (next, req) {
              var partial_arg = /* :: */[
                "middleware0",
                /* :: */[
                  "middleware1",
                  /* [] */0
                ]
              ];
              return (function (param) {
                  return checkProperties(req, next, partial_arg, (function (res) {
                                return Curry._2(next, Express.Next.middleware, setProperty(req, "middleware2", res));
                              }), param);
                });
            }))
    ]);

Express.App.get(app, "/", Express.Middleware.from((function (next, req) {
            var partial_arg = makeSuccessJson(/* () */0);
            var partial_arg$1 = function (param) {
              return Express.$$Response.sendJson(partial_arg, param);
            };
            return (function (param) {
                return checkProperties(req, next, /* :: */[
                            "middleware0",
                            /* :: */[
                              "middleware1",
                              /* :: */[
                                "middleware2",
                                /* [] */0
                              ]
                            ]
                          ], partial_arg$1, param);
              });
          })));

var options = Express.Static.defaultOptions(/* () */0);

Express.App.useOnPath(app, "/static", Express.Static.asMiddleware(Express.Static.make("static", options)));

Express.App.postWithMany(app, "/:id/id", [Express.Middleware.from((function (next, req) {
              return (function (param) {
                  return checkProperties(req, next, /* :: */[
                              "middleware0",
                              /* :: */[
                                "middleware1",
                                /* :: */[
                                  "middleware2",
                                  /* [] */0
                                ]
                              ]
                            ], (function (res) {
                                var match = getDictString(Express.$$Request.params(req), "id");
                                if (match === "123") {
                                  return Express.$$Response.sendJson(makeSuccessJson(/* () */0), res);
                                } else {
                                  return Curry._2(next, Express.Next.route, res);
                                }
                              }), param);
                });
            }))]);

Express.App.patchWithMany(app, "/:id/id", [Express.Middleware.from((function (next, req) {
              return (function (param) {
                  return checkProperties(req, next, /* :: */[
                              "middleware0",
                              /* :: */[
                                "middleware1",
                                /* :: */[
                                  "middleware2",
                                  /* [] */0
                                ]
                              ]
                            ], (function (res) {
                                var match = getDictString(Express.$$Request.params(req), "id");
                                if (match === "123") {
                                  return Express.$$Response.sendJson(makeSuccessJson(/* () */0), res);
                                } else {
                                  return Curry._2(next, Express.Next.route, res);
                                }
                              }), param);
                });
            }))]);

Express.App.putWithMany(app, "/:id/id", [Express.Middleware.from((function (next, req) {
              return (function (param) {
                  return checkProperties(req, next, /* :: */[
                              "middleware0",
                              /* :: */[
                                "middleware1",
                                /* :: */[
                                  "middleware2",
                                  /* [] */0
                                ]
                              ]
                            ], (function (res) {
                                var match = getDictString(Express.$$Request.params(req), "id");
                                if (match === "123") {
                                  return Express.$$Response.sendJson(makeSuccessJson(/* () */0), res);
                                } else {
                                  return Curry._2(next, Express.Next.route, res);
                                }
                              }), param);
                });
            }))]);

Express.App.deleteWithMany(app, "/:id/id", [Express.Middleware.from((function (next, req) {
              return (function (param) {
                  return checkProperties(req, next, /* :: */[
                              "middleware0",
                              /* :: */[
                                "middleware1",
                                /* :: */[
                                  "middleware2",
                                  /* [] */0
                                ]
                              ]
                            ], (function (res) {
                                var match = getDictString(Express.$$Request.params(req), "id");
                                if (match === "123") {
                                  return Express.$$Response.sendJson(makeSuccessJson(/* () */0), res);
                                } else {
                                  return Curry._2(next, Express.Next.route, res);
                                }
                              }), param);
                });
            }))]);

Express.App.get(app, "/baseUrl", Express.Middleware.from((function (next, req) {
            var match = Express.$$Request.baseUrl(req);
            if (match === "") {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            } else {
              return Curry._1(next, Express.Next.route);
            }
          })));

Express.App.get(app, "/hostname", Express.Middleware.from((function (next, req) {
            var match = Express.$$Request.hostname(req);
            if (match === "localhost") {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            } else {
              return Curry._1(next, Express.Next.route);
            }
          })));

Express.App.get(app, "/ip", Express.Middleware.from((function (next, req) {
            var s = Express.$$Request.ip(req);
            if (s === "127.0.0.1") {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            } else {
              console.log(s);
              return Curry._1(next, Express.Next.route);
            }
          })));

Express.App.get(app, "/method", Express.Middleware.from((function (next, req) {
            var s = Express.$$Request.httpMethod(req);
            if (s !== 0) {
              console.log(s);
              return Curry._1(next, Express.Next.route);
            } else {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            }
          })));

Express.App.get(app, "/originalUrl", Express.Middleware.from((function (next, req) {
            var s = Express.$$Request.originalUrl(req);
            if (s === "/originalUrl") {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            } else {
              console.log(s);
              return Curry._1(next, Express.Next.route);
            }
          })));

Express.App.get(app, "/path", Express.Middleware.from((function (next, req) {
            var s = Express.$$Request.path(req);
            if (s === "/path") {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            } else {
              console.log(s);
              return Curry._1(next, Express.Next.route);
            }
          })));

Express.App.get(app, "/protocol", Express.Middleware.from((function (next, req) {
            var s = Express.$$Request.protocol(req);
            if (s) {
              console.log(s);
              return Curry._1(next, Express.Next.route);
            } else {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            }
          })));

Express.App.get(app, "/query", Express.Middleware.from((function (next, req) {
            var match = getDictString(Express.$$Request.query(req), "key");
            if (match === "value") {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            } else {
              return Curry._1(next, Express.Next.route);
            }
          })));

Express.App.get(app, "/not-found", Express.Middleware.from((function (param, param$1) {
            return Express.$$Response.sendStatus(/* NotFound */23);
          })));

Express.App.get(app, "/error", Express.Middleware.from((function (param, param$1, res) {
            return Express.$$Response.sendJson(makeSuccessJson(/* () */0), Express.$$Response.status(/* InternalServerError */47)(res));
          })));

Express.App.getWithMany(app, "/accepts", [
      Express.Middleware.from((function (next, req) {
              var match = Express.$$Request.accepts([
                    "audio/whatever",
                    "audio/basic"
                  ], req);
              if (match === "audio/basic") {
                return Curry._1(next, Express.Next.middleware);
              } else {
                return Curry._1(next, Express.Next.route);
              }
            })),
      Express.Middleware.from((function (next, req) {
              var match = Express.$$Request.accepts(["text/css"], req);
              if (match !== undefined) {
                return Curry._1(next, Express.Next.route);
              } else {
                var partial_arg = makeSuccessJson(/* () */0);
                return (function (param) {
                    return Express.$$Response.sendJson(partial_arg, param);
                  });
              }
            }))
    ]);

function $great$great(f, g, x) {
  return Curry._1(g, Curry._1(f, x));
}

Express.App.getWithMany(app, "/accepts-charsets", [
      Express.Middleware.from((function (next, req) {
              var match = Express.$$Request.acceptsCharsets([
                    "UTF-8",
                    "UTF-16"
                  ], req);
              if (match === "UTF-8") {
                return Curry._1(next, Express.Next.middleware);
              } else {
                return Curry._1(next, Express.Next.route);
              }
            })),
      Express.Middleware.from((function (next, req) {
              var match = Express.$$Request.acceptsCharsets(["UTF-16"], req);
              if (match !== undefined) {
                return Curry._1(next, Express.Next.route);
              } else {
                var partial_arg = makeSuccessJson(/* () */0);
                return (function (param) {
                    return Express.$$Response.sendJson(partial_arg, param);
                  });
              }
            }))
    ]);

Express.App.get(app, "/get", Express.Middleware.from((function (next, req) {
            var match = Express.$$Request.get("key", req);
            if (match === "value") {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            } else {
              return Curry._1(next, Express.Next.route);
            }
          })));

Express.App.get(app, "/fresh", Express.Middleware.from((function (next, req) {
            if (Express.$$Request.fresh(req)) {
              return Curry._1(next, Express.Next.route);
            } else {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            }
          })));

Express.App.get(app, "/stale", Express.Middleware.from((function (next, req) {
            if (Express.$$Request.stale(req)) {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            } else {
              return Curry._1(next, Express.Next.route);
            }
          })));

Express.App.get(app, "/secure", Express.Middleware.from((function (next, req) {
            if (Express.$$Request.secure(req)) {
              return Curry._1(next, Express.Next.route);
            } else {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            }
          })));

Express.App.get(app, "/xhr", Express.Middleware.from((function (next, req) {
            if (Express.$$Request.xhr(req)) {
              return Curry._1(next, Express.Next.route);
            } else {
              var partial_arg = makeSuccessJson(/* () */0);
              return (function (param) {
                  return Express.$$Response.sendJson(partial_arg, param);
                });
            }
          })));

Express.App.get(app, "/redir", Express.Middleware.from((function (param, param$1) {
            return (function (param) {
                return Express.$$Response.redirect("/redir/target", param);
              });
          })));

Express.App.get(app, "/redircode", Express.Middleware.from((function (param, param$1) {
            return (function (param) {
                return Express.$$Response.redirectCode(301, "/redir/target", param);
              });
          })));

Express.App.getWithMany(app, "/ocaml-exception", [
      Express.Middleware.from((function (param, param$1, _next) {
              throw [
                    Caml_builtin_exceptions.failure,
                    "Elvis has left the building!"
                  ];
            })),
      Express.Middleware.fromError((function (param, err, param$1, res) {
              if (err[0] === Caml_builtin_exceptions.failure) {
                return Express.$$Response.sendString(err[1], Express.$$Response.status(/* PaymentRequired */21)(res));
              } else {
                return Express.$$Response.sendStatus(/* NotFound */23)(res);
              }
            }))
    ]);

Express.App.get(app, "/promise", Express.PromiseMiddleware.from((function (_req, _next, res) {
            return Promise.resolve(Express.$$Response.sendStatus(/* NoContent */4)(res));
          })));

Express.App.getWithMany(app, "/failing-promise", [
      Express.PromiseMiddleware.from((function (param, param$1, _next) {
              return Promise.reject(Caml_builtin_exceptions.not_found);
            })),
      Express.PromiseMiddleware.fromError((function (param, _req, _next, res) {
              return Promise.resolve(Express.$$Response.sendString("Caught Failing Promise", Express.$$Response.status(/* InternalServerError */47)(res)));
            }))
    ]);

var router1 = Express.router(undefined, undefined, undefined, /* () */0);

Express.Router.get(router1, "/123", Express.Middleware.from((function (param, param$1) {
            return Express.$$Response.sendStatus(/* Created */1);
          })));

Express.App.useRouterOnPath(app, "/testing/testing", router1);

var router2 = Express.router(true, undefined, true, /* () */0);

Express.Router.get(router2, "/Case-sensitive", Express.Middleware.from((function (param, param$1) {
            return Express.$$Response.sendStatus(/* Ok */0);
          })));

Express.Router.get(router2, "/strict/", Express.Middleware.from((function (param, param$1) {
            return Express.$$Response.sendStatus(/* Ok */0);
          })));

Express.App.useRouterOnPath(app, "/router-options", router2);

Express.App.param(app, "identifier", Express.Middleware.from((function (_next, _req) {
            return Express.$$Response.sendStatus(/* Created */1);
          })));

Express.App.get(app, "/param-test/:identifier", Express.Middleware.from((function (_next, _req) {
            return Express.$$Response.sendStatus(/* BadRequest */19);
          })));

Express.App.get(app, "/cookie-set-test", Express.Middleware.from((function (_next, _req) {
            var partial_arg = Express.$$Response.sendStatus(/* Ok */0);
            return (function (param) {
                return Curry._1(partial_arg, Express.$$Response.cookie("test-cookie", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "cool-cookie", param));
              });
          })));

Express.App.get(app, "/cookie-clear-test", Express.Middleware.from((function (_next, _req) {
            var partial_arg = Express.$$Response.sendStatus(/* Ok */0);
            var partial_arg$1 = function (eta) {
              var param = undefined;
              var param$1 = undefined;
              var param$2 = undefined;
              var param$3 = undefined;
              var param$4 = undefined;
              var param$5 = eta;
              return Express.$$Response.clearCookie("test-cookie2", param, param$1, param$2, param$3, param$4, param$5);
            };
            return (function (param) {
                return Curry._1(partial_arg, Curry._1(partial_arg$1, param));
              });
          })));

Express.App.get(app, "/response-set-header", Express.Middleware.from((function (param, param$1, res) {
            return Express.$$Response.sendStatus(/* Ok */0)(Express.$$Response.setHeader("X-Test-Header", "Set", res));
          })));

var router3 = Express.router(true, undefined, true, /* () */0);

Express.Router.use(router3, Express.Middleware.json(undefined, undefined, Express.ByteLimit.mb(5.0), /* () */0));

Express.Router.use(router3, Express.Middleware.urlencoded(true, undefined, undefined, undefined, /* () */0));

function jsonDecoder(json) {
  return {
          number: Json_decode.field("number", Json_decode.$$int, json)
        };
}

function urlEncodedDecoder(dict) {
  return {
          number: Caml_format.caml_int_of_string(dict["number"])
        };
}

function encoder(body) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "number",
                body.number
              ],
              /* [] */0
            ]);
}

var Body = {
  jsonDecoder: jsonDecoder,
  urlEncodedDecoder: urlEncodedDecoder,
  encoder: encoder
};

function raiseIfNone(param) {
  if (param !== undefined) {
    return Caml_option.valFromOption(param);
  } else {
    return Pervasives.failwith("Body is none");
  }
}

Express.Router.post(router3, "/json-doubler", Express.Middleware.from((function (_next) {
            return (function (param) {
                var req = jsonDecoder(raiseIfNone(Express.$$Request.bodyJSON(param)));
                var partial_arg = encoder({
                      number: (req.number << 1)
                    });
                return (function (param) {
                    return Express.$$Response.sendJson(partial_arg, param);
                  });
              });
          })));

Express.Router.post(router3, "/urlencoded-doubler", Express.Middleware.from((function (_next) {
            return (function (param) {
                var req = urlEncodedDecoder(raiseIfNone(Express.$$Request.bodyURLEncoded(param)));
                var partial_arg = encoder({
                      number: (req.number << 1)
                    });
                return (function (param) {
                    return Express.$$Response.sendJson(partial_arg, param);
                  });
              });
          })));

Express.App.useRouterOnPath(app, "/builtin-middleware", router3);

var router4 = Express.router(true, undefined, true, /* () */0);

Express.Router.use(router4, Express.Middleware.text(undefined, undefined, undefined, undefined, /* () */0));

Express.Router.post(router4, "/text-body", Express.Middleware.from((function (_next) {
            return (function (param) {
                var partial_arg = raiseIfNone(Express.$$Request.bodyText(param));
                return (function (param) {
                    return Express.$$Response.sendString(partial_arg, param);
                  });
              });
          })));

Express.App.useRouterOnPath(app, "/router4", router4);

function onListen(e) {
  var val;
  try {
    val = e;
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Js_exn.$$Error) {
      console.log(exn[1]);
      return Process.exit(1);
    } else {
      throw exn;
    }
  }
  console.log("Listening at http://127.0.0.1:3000");
  return /* () */0;
}

var server = Express.App.listen(app, 3000, undefined, onListen, /* () */0);

function countRequests(server) {
  var count = {
    contents: 0
  };
  Express.HttpServer.on(server, /* `request */[
        -997925041,
        (function (param, param$1) {
            count.contents = count.contents + 1 | 0;
            return /* () */0;
          })
      ]);
  return (function (param) {
      var result = count.contents;
      count.contents = -1;
      return result;
    });
}

var getRequestsCount = countRequests(server);

Express.App.post(app, "/get-request-count", Express.Middleware.from((function (param, param$1) {
            var partial_arg = "The server has been called " + (String(getRequestsCount(/* () */0)) + " times.");
            return (function (param) {
                return Express.$$Response.sendString(partial_arg, param);
              });
          })));

exports.checkProperty = checkProperty;
exports.checkProperties = checkProperties;
exports.setProperty = setProperty;
exports.getDictString = getDictString;
exports.makeSuccessJson = makeSuccessJson;
exports.app = app;
exports.$great$great = $great$great;
exports.router1 = router1;
exports.router2 = router2;
exports.router3 = router3;
exports.Body = Body;
exports.raiseIfNone = raiseIfNone;
exports.router4 = router4;
exports.onListen = onListen;
exports.server = server;
exports.countRequests = countRequests;
exports.getRequestsCount = getRequestsCount;
/* app Not a pure module */
