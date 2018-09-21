/**
 * ParseINI v1.0.0
 * A simple, fast and lightweight INI file parser for JavaScript.
 * Written by and Copyright (c) 2018 Jonas Kohl (https://jonaskohl.de/)
 * https://github.com/jonaskohl/ParseINI
 */
function ParseINI(content, resolveValueTypes) {
  if (resolveValueTypes !== false)
    resolveValueTypes = true;
  function resolvetype(value) {
    if (value.trim().length < 1)
      return null;
    else if (!isNaN(value)) {
      if (value.indexOf(".") > -1)
        return parseFloat(value, 10);
      else
        return parseInt(value, 10);
    } else if (value.match(/^(true|on|enabled)$/i))
      return true;
    else if (value.match(/^(false|off|disabled)$/i))
      return false;
    else if (value.match(/^null$/i))
      return null;
    else
      return value;
  }
  var obj = {};
  var currentKey = false;
  var lines = content.split(/(\r\n|\r|\n)/);
  for (var line of lines) {
    if (line.match(/^\[*.+\]$/)) {
      var key = line.replace(/^\[(.+)\]$/, "$1");
      if (!obj.hasOwnProperty(key))
        obj[key] = {};
      currentKey = key;
    } else if (line.trim() !== "" && !line.startsWith(";")) {
      var kvp = line.split(/\s*=\s*/);
      var key = kvp[0];
      var value = kvp[1];
      if (currentKey)
        obj[currentKey][key] = resolveValueTypes ? resolvetype(value) : value;
      else
        obj[key] = resolveValueTypes ? resolvetype(value) : value;
    }
  }
  return obj;
}
