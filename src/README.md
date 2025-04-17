# [moLib](https://github.com/molab-itp/moLib)

- a Library for building
- multi-device experiences from handheld small screens
- to large screens
- using cloud storage
- compatible with p5js

# [repo](https://github.com/molab-itp/moLib)

# [github.io src](https://molab-itp.github.io/moLib/?v=104)

# [moSalon usage examples](https://github.com/molab-itp/moSalon)

# Build instructions

```
bin/git-release.sh
```

# --

- [src/doc](src/doc)
- [src/rroom](src/rroom)

# --

```

# src/doc-vitals
# documentation and unit testing the lib api

# test in node
node src/doc-vitals/main.js

# test in browser
src/doc-vitals/index.html

# publish lib to npm
#
bin/lib-publish.sh

# deploy to github pages
#
bin/git-release.sh

# example reference
#
# [github moSalon](https://github.com/molab-itp/moSalon) ?v=104
# https://github.com/molab-itp/moSalon/blob/main/src/vote/index.html
    <script src="https://unpkg.com/itp-molib@0.1.14/dist/moLib.umd.js"></script>


```
