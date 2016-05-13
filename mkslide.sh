#!/bin/bash
pandoc -t beamer -V theme:Singapore -o slides.pdf src/index.md --latex-engine=lualatex
