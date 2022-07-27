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

[![Code Screenshots](screenshots/code-code-samples.png)](docs/screenshots.md)

[![Interface Screenshots](screenshots/interface-interface.png)](docs/screenshots.md)

[More screenshots](docs/screenshots.md)


Colors
------

| Element             | Hex                                | Color      | Description                                                                           |
|---------------------|------------------------------------|------------|---------------------------------------------------------------------------------------|
| Frame BG            | ![#0A0A0A][0A0A0A] `#0A0A0A`       | Near Black | frame-like workbench elements (ie activity bar, sidebar section titles)               |
| Editor BG           | ![#0F0F0F][0F0F0F] `#0F0F0F`       | Charcoal   | editor                                                                                |
| Area BG             | ![#101316][101316] `#101316`       | Midnight   | interactive areas (ie sidebar, widgets)                                               |
| Area Border         | ![#232530][232530] `#232530`       | Black Gray | subtle border separating areas (ie between sidebar and editor)                        |
| Text FG             | ![#AAB1C0][AAB1C0] `#AAB1C0`       | Light Gray | overall text (ie editor text)                                                         |
| Guide (Active)      | ![#6D57FFBB][6D57FFBB] `#6D57FFBB` | Purple     | accent line indicating the active area or element (ie indentation guides, active tab) |
| Text FG (Emphasis)  | ![#80CBC4][80CBC4] `#80CBC4`       | Mint       | emphasized text (ie links, typed letters in command palette)                          |
| Icon BG (Emphasis)  | ![#88C0D0][88C0D0] `#88C0D0`       | Light Blue | emphasized icons (ie SCM change count)                                                |
| Area Border (Focus) | ![#008097][008097] `#008097`       | Teal       | accent indicating the active/focus area (ie input boxes)                              |

[0A0A0A]: https://via.placeholder.com/20/0A0A0A/?text=+
[0F0F0F]: https://via.placeholder.com/20/0F0F0F/?text=+
[101316]: https://via.placeholder.com/20/101316/?text=+
[232530]: https://via.placeholder.com/20/232530/?text=+
[AAB1C0]: https://via.placeholder.com/20/AAB1C0/?text=+
[6D57FFBB]: https://via.placeholder.com/20/6D57FFBB/?text=+
[80CBC4]: https://via.placeholder.com/20/80CBC4/?text=+
[88C0D0]: https://via.placeholder.com/20/88C0D0/?text=+
[008097]: https://via.placeholder.com/20/008097/?text=+

Install
-------

Download it on the [VS Code Marketplace][download] or install it on the command line:

```bash
code --install-extension alissahuskey.vscode-python-class
```

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

This feature request for the ability to theme changed characters is tracked at
[microsoft/vscode#103207][vscode#103207] and has been under consideration since
September 2020.

**Unthemed elements**
- tags (`"recently used"`) in command palette and settings dropdowns


[download]: http://marketplace.visualstudio.com/items?itemName=alissahuskey.dark-cool-color-theme
[vscode#103207]: https://github.com/microsoft/vscode/issues/103207
