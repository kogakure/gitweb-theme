================
Theme for gitweb
================

This is an alternative theme for `gitweb`_ (tested with git web interface version 1.7.12.3). It is *strongly* inspired by GitHub.

Fullsize screenshots available on `kogakure.github.com/gitweb-theme`_.

Installation
============

The installation of this stylesheet is very easy:

Just clone the repository to a location of your choice, probably into the same directory where the base gitweb stylesheet is located (in Ubuntu, this is e.g. /usr/share/gitweb/). It's recommended to move away the existing files and then create symlinks to the new files. You can do this with the following few commands::

  cd <PUT YOUR LOCATION OF GITWEB HERE, could be /usr/share/gitweb/>
  mv gitweb.css gitweb_original.css
  mv gitweb.js gitweb_original.js
  mv git-logo.png git-logo_original.png
  mv git-favicon.png git-favicon_original.png
  git clone git://github.com/kogakure/gitweb-theme.git
  ln -s gitweb-theme/gitweb.css gitweb.css
  ln -s gitweb-theme/gitweb.js gitweb.js
  ln -s gitweb-theme/git-logo.png git-logo.png
  ln -s gitweb-theme/git-favicon.png git-favicon.png

Of course you can just copy them to the new location. If you see some missing things or errors, please create a ticket or fix it and send a pull request.

Optionally, you can enable syntax highlighting for your code. Install the highligh package with your package manager and add this line to /etc/gitweb.conf:

  $feature{'highlight'}{'default'} = [1];

You can enable Gravatar support with this line:

  $feature{'avatar'}{'default'} = ['gravatar'];

.. _gitweb: http://git.or.cz/gitwiki/Gitweb
.. _kogakure.github.com/gitweb-theme: http://kogakure.github.com/gitweb-theme

Licence
=======

(The MIT License)

Copyright (c) 2009-2013 Stefan Imhoff stefan@imhoff.name

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
