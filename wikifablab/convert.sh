#!/bin/sh
# for f in ./*.wiki; do
    find . -iname '*.wiki' -exec pandoc -f mediawiki -t markdown {} -o ./converted/{}.md \;   
# done
