# PhotonUI Website

This is the repository of the PhotonUI Website that is available here:

* http://wanadev.github.io/PhotonUI/

It containes all PhotonUI's documentation, demos and howtos.


## Modify / Build the site

### Getting started

This documentation is built using [Hexo][hexo]. Every pages of the documentation are stored in the `source` directory as [Markdown][md] files. The generated site is in the `public` folder.

To edit this site, first clone it:

    git clone git@github.com:wanadev/photonui-site.git
    cd photonui-site

then install the required dependencies:

    npm install


[hexo]: http://hexo.io/
[md]: http://daringfireball.net/projects/markdown/


### Building the site

To build the site just use the `grunt` command:

    npx grunt

If you are writing a documentation page and you want to see changes in your browser without rebuilding the site each times, you can start the server integrated to Hexo:

    npx hexo server

then go to the following address:

* http://localhost:4000/PhotonUI/


### Updating PhotonUI

To update PhotonUI, run:

    npx grunt shell:updatePhotonUI

This will update the content of `./ref/`, `./themes/photonui/source/style/_partial/` and `./themes/photonui/source/js/`.
