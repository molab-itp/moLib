# [moLib](https://github.com/molab-itp/moLib)

- a Library for multi-device experiences from handheld small screens to large screens using cloud storage
- compatible with p5js

# [repo](https://github.com/molab-itp/moLib)

# [github.io src](https://molab-itp.github.io/moLib/src?v=37)

# [moSalon usage examples](https://github.com/molab-itp/moSalon)

# --

```

# dev build
# can use <script type="module" src="../../moLib/src/lib/a_lib.js"></script>
#
bin/build.sh --dev --lib 1
#
# prod build
bin/build.sh --prod --lib 1

# publish lib to npm
#
bin/lib-publish.sh

# deploy to github pages
#
bin/git-release.sh


# example reference
#
# [github moSalon](https://github.com/molab-itp/moSalon) ?v=37
# https://github.com/molab-itp/moSalon/blob/main/src/vote/index.html
    <script src="https://unpkg.com/itp-molib@0.1.14/dist/moLib.umd.js?v=@lib"></script>


```
