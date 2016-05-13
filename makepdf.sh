#!/bin/bash
pandoc --latex-engine=lualatex -V documentclass=ltjarticle src/index.md  -o out.pdf


