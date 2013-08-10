================
Theme for gitweb
================

This is an alternative theme for `gitweb`_ (tested with git web interface version 1.7.12.3). It is *strongly* inspired by GitHub.

Fullsize screenshots available on `kogakure.github.com/gitweb-theme`_.

Installation
============

The installation of this stylesheet is very easy:

1. Clone the repository to a location of your choice ``git clone https://github.com/kogakure/gitweb-theme.git``
2. Run ``./setup -vi --install`` and your gitweb will be themed!

 - If you are on Ubuntu, then the script will default to gitweb's installation directory "/usr/share/gitweb/".
 - If this is not where gitweb is located, then pass the directory to the script with the --target or -t option.

3. Of course you can just copy them to the new location too.

If you see some missing things or errors, please create a ticket or fix it and send a pull request.

Optionally, you can enable syntax highlighting for your code. Install the highlight package with your package manager and add this line to /etc/gitweb.conf:

  $feature{'highlight'}{'default'} = [1];

You can enable Gravatar support with this line:

  $feature{'avatar'}{'default'} = ['gravatar'];

.. _gitweb: http://git.or.cz/gitwiki/Gitweb
.. _kogakure.github.com/gitweb-theme: http://kogakure.github.com/gitweb-theme

Setup Script
============

::

  Usage: ./setup [-v|-i] [-t <TARGET>|--target <TARGET>] [--install|--remove|--repair]  
  Or: ./setup [-V|-h|--version|--help]

  This script will create symlinks to your gitweb install for themeing.
  The default location is '/usr/share/gitweb' unless set via -t or --target. 

  OPTIONS:
  -v, --verbose       Verbose output
  -i, --interactive   Pauses for confirmation at each step
  -t, --target        Where to create the symlinks, gitweb installation path
  -h, --help          Shows this usage message
  -V, --version       Displays version information
  --install           Adds '.bak' to original files and creates symlinks to theme files
  --remove            Deletes themed symlinks and restores the original files.
  --repair            Removes all theme files, then reinstalls

Licence
=======

(The MIT License)

Copyright (c) 2009-2013 Stefan Imhoff stefan@imhoff.name

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
