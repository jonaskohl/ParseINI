/**
 * ParseINI v1.0.1
 * A simple, fast and lightweight INI file parser for JavaScript.
 * Written by and Copyright (c) 2018 Jonas Kohl (https://jonaskohl.de/)
 * https://github.com/jonaskohl/ParseINI
 */
function ParseINI(content, resolveValueTypes = true) {
  function resolvetype(value) {
    if (value.trim().length < 1)
      return null;
    else if (!isNaN(value))
      return value.indexOf(".") > -1 ? parseFloat(value, 10) : parseInt(value, 10);
    else if (value.match(/^(true|on|enabled)$/i))
      return true;
    else if (value.match(/^(false|off|disabled)$/i))
      return false;
    else if (value === "null")
      return null;
    else
      return value;
  }
  var obj = {};
  var currentKey = false;
  var lines = content.split(/(\r\n|\r|\n)/);
  for (var line of lines) {
    if (line.match(/^\[.+\]$/)) {
      var key = line.slice(1, -1);
      currentKey = key;
      if (!obj.hasOwnProperty(key))
        obj[key] = {};
    } else if (line.trim() !== "" && !line.startsWith(";")) {
      var kvp = line.split(/\s*=\s*/);
      var key = kvp[0];
      var value = kvp[1];
      (currentKey ? obj[currentKey] : obj)[key] = resolveValueTypes ? resolvetype(value) : value;
    }
  }
  return obj;
}
