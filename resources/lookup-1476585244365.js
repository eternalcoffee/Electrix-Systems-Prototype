(function(window, undefined) {
  var dictionary = {
    "a73d37d5-a09a-4310-867f-8678e15b66b3": "Main",
    "a1471b70-9d18-4c33-8bf8-921c35098c9d": "Login",
    "b97c949e-6322-4304-a7b1-bcc1ff3ed8dd": "Testing",
    "a223b72e-e259-4ac8-bff8-ab46c69678f5": "Soldering",
    "833463e7-b18d-4313-8bdd-966aaeb2662d": "Splash",
    "b7e7be42-3dce-49f1-a6cf-33ffc4b60d80": "Packaging",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Layout",
    "2626163d-f366-4a02-b0e4-64a720c13c95": "Empty",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);