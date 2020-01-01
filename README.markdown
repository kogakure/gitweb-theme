![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)
![GitHub Stars](https://img.shields.io/github/stars/kogakure/gitweb-theme.svg?style=social&label=Star)
![GitHub Forks](https://img.shields.io/github/forks/kogakure/gitweb-theme.svg?style=social&label=Fork)

# Theme for gitweb

This is an alternative theme for [gitweb] (tested with git web interface version 2.0.4). It is *strongly* inspired by GitHub.

Fullsize screenshots available on [kogakure.github.com/gitweb-theme][gitweb-theme].

## Installation
The installation of this stylesheet is very easy:

1. Clone the repository to a location of your choice `git clone https://github.com/kogakure/gitweb-theme.git`
2. Run `./setup -vi --install` and your gitweb will be themed!
    - If you are on Ubuntu, then the script will default to gitweb's installation directory **/usr/share/gitweb/**.
    - If this is not where gitweb is located, then pass the directory to the script with the `--target` or `-t` option.
3. Of course you can just copy them to the new location too.

If you see some missing things or errors, please create a ticket or fix it and send a pull request.

### Configuration file
*Did you know?*

Updating Gitweb can be quite time consuming because you have to adjust your settings in the `gitweb.cgi`. **You don’t have to!**.

Create a file with the name `gitweb_config.perl` and put it into the same directory as `gitweb.cgi`.

In this file you write only your custom settings and they will override the settings in `gitweb.cgi` like this:

```perl
$GIT = "/bin/git";
$projectroot = "/www/git/repositories";
$project_maxdepth = 2009;
$home_link_str = "Projekte";
$projects_list_group_categories = 1;
$export_ok = "GITWEB_EXPORT_OK";
$feature{'avatar'}{'default'} = ['gravatar'];
$feature{'highlight'}{'default'} = [1];
```

### Syntax highlighting
Optionally, you can enable syntax highlighting for your code. Install the highlight package with your package manager and add this line to /etc/gitweb.conf:

```perl
$feature{'highlight'}{'default'} = [1];
```

### Gravatar support
You can enable Gravatar support with this line:

```perl
$feature{'avatar'}{'default'} = ['gravatar'];
```

[gitweb]: http://git.or.cz/gitwiki/Gitweb
[gitweb-theme]: http://kogakure.github.com/gitweb-theme

### Categories

Gitweb and this theme support categories, which can be enabled by the following gitweb config option:

```perl
$projects_list_group_categories = true;¬
```

The category name for each repository is read from `.git/category`, in the same manner as `.git/description`.


## Setup Script

### Usage:
- `./setup [-v|-i] [-t <TARGET>|--target <TARGET>] [--install|--remove|--repair]` or:
- `./setup [-V|-h|--version|--help]`

This script will create symlinks to your gitweb install for themeing.  The default location is **/usr/share/gitweb** unless set via `-t` or `--target`.

### Options:
| Parameter         | Description                                                       |
| ----------------- | ----------------------------------------------------------------- |
| -v, --verbose     | Verbose output                                                    |
| -i, --interactive | Pauses for confirmation at each step                              |
| -t, --target      | Where to create the symlinks, gitweb installation path            |
| -h, --help        | Shows this usage message                                          |
| -V, --version     | Displays version information                                      |
| --install         | Adds '.bak' to original files and creates symlinks to theme files |
| --remove          | Deletes themed symlinks and restores the original files.          |
| --repair          | Removes all theme files, then reinstalls                          |

## Licence
(The MIT License)

Copyright (c) 2009-2014 **Stefan Imhoff** <stefan@imhoff.name>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
