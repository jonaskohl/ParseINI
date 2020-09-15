# ParseINI

A simple, fast and lightweight INI file parser for JavaScript.

----------------------------------------------------------------------

ParseINI.js is a library which lets you parse INI files easily in JS.
The minified version is < 1KB.

----------------------------------------------------------------------

## Documentation

ParseINI.js only exposes one function:

<!-- use CoffeeScript for highlight can render the arguments and types
in different color -->
``` CoffeeScript
window.ParseINI(content string, parseValueTypes boolean)
```
<dl>
  <dt><var>content</var></dt>
  <dd>The content of the INI file as string</dd>
  <dt><var>parseValueTypes</var></dt>
  <dd>
    If <code>true</code> or not present, the parser tries to resolve
    all types in the INI file, e.g. if the key-value-pair is
    <code>property = 42</code>, then it tries to resolve the number as
    such, so the value will become <code>42</code> instead of
    <code>"42"</code>.
  </dd>
</dl>  

## Download

To download ParseINI.js, head over to the
[GitHub releases page](https://github.com/jonaskohl/ParseINI/releases).

## Try it!

To see a live demo, head over to the demo section of the
[project page](https://jonaskohl.de/project/parseini/#demo).
