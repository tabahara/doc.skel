% doc.skel
% Hiroki Tsukahaar
% 2016/10/17

# My document skeleton

This is a typical markdown skeleton for me.

* This skeleton provides on the fly preview by the browser sync.
* PlantUML code block are processed by the filter.
* You can create ePub format. 
    * ```$ gulp epub```
 
## How to use
precondition: nodejs, npm, gulp and [pandoc-filter-plantuml](https://github.com/tabahara/pandoc-filter-plantuml.git)

1. make document folder
2. clone this project in the document folder
3. execute 'npm install'
4. start gulp (activate browser sync)

gulp checks '../*.md'.
if there are some modification, execute pandoc.

``` shell
$ mkdir docs
$ cd docs
$ git clone https://github.com/tabahara/doc.skel 
$ npm install
$ gulp
$ cd ..
```

Using git submodule for doc.skel is a good idea.

end.

## How to create slides with Japanese.

1. apply a modification to style file.
    * search style file by ```$ kpsewhich beamerthemeSingapore.sty```

beamerthemeSingapore.sty
```
  \setbeamercolor{section in head/foot}{bg=}
}

\addtoheadtemplate{\pgfuseshading{beamer@headfade}\vskip-1.25cm}{}

\beamertemplatedotitem
\usepackage{luatexja}  <====== ADD THIS COMMAND!
\mode
<all>
```

2. execute build a slides by following command;

```
$ pandoc -t beamer -V theme:Singapore -o slide.pdf src/index.md --latex-engine=lualatex
```

	


