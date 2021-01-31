Dark and Cool
=============

> A dark VS Code theme with cool colors for my personal use.


Table of Contents
-----------------

* [Features](#features)
* [Screenshots](#screenshots)
* [Colors](#colors)
* [Known issues](#known-issues)

Features
--------

* A dark as sin theme with just enough contrast to tell things apart.
* Consistency in workbench elements of similar kind.
* Sparingly employed accent colors that pop to indicate the focused/active
* area/element.
* Source control diffs are themed to dark, unobtrusive colors.
* Modestly themed buttons won't nag, they just want you to know they're there for you.


Screenshots
-----------

[![Code Screenshots](screenshots/code/code-samples.png)](docs/screenshots.md)

[![Interface Screenshots](screenshots/interface/interface.png)](docs/screenshots.md)

[More screenshots](docs/screenshots.md)


Colors
------

${colorTable}

${refsDefs}

Known issues
------------

**Low contrast diffs**

There is currently no way to theme changed characters within the overall
block of changed text in a diff. Instead the characters are hardcoded to be a
shade lighter than the contained text block. With the dark and
semi-transparent colors in this theme, the changed characters don't stand out
much.

If you feel the need you can set your own colors by choosing `Preferences:
Open Settings (JSON)` from the command palette, then adding your preferred `diffEditor` colors under `workbench.colorCustomizations`. The following example uses
the same colors as the default dark theme.

```jsonc
// User settings.json
"workbench.colorCustomizations": {
	"[Dark and Cool]": {
		"diffEditor.insertedTextBackground": "#9bb95533",
		"diffEditor.removedTextBackground": "#ff000033"
	}
},
```

This feature request for the ability to theme changed characters is tracked
at
[microsoft/vscode#103207](https://github.com/microsoft/vscode/issues/103207)
and has been under consideration since September 2020.

**Unthemed elements**
- tags (`"recently used"`) in command palette and settings dropdowns
