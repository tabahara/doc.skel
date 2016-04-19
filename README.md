# My document skeleton
2016/04/20.

This is a typical markdown skeleton for me.

* This skeleton provides on the fly preview by the browser sync.
* PlantUML code block are processed by the filter.
* You can create ePub format. 
    * ```$ gulp epub```
 
## How to use
precondition: nodejs, npm, gulp and [pandoc-filter-plantuml](https://github.com/tabahara/pandoc-filter-plantuml.git)

1. clone this project.
2. make document folder
3. then setup it.
4. make src folder for markdown sources.
5. start gulp (activate browser sync)


``` shell
$ git clone https://github.com/tabahara/doc.skel .doc.skel
$ mkdir docs
$ cd docs
$ cp ../.doc.skel/gulpfile.js
$ ln -s ../.doc.skel/defstyle.css
$ ln -s ../.doc.skel/package.json
$ npm install
$ mkdir src
$ gulp
```
Using git submodule for doc.skel is a good idea.

end.





