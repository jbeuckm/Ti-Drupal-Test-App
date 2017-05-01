If you want to develop mobile apps with Drupal as backend you might want to check out this <a href="https://www.app-development.guide/appcelerator-drupalgap-comparison" target="new">SDK client video</a> comparing Drupalgap and the ADG app (using this library).

About www.app-development.guide: <a href="https://www.slideshare.net/AppDevelopmentGuide/app-development-guide-table-of-content">slides</a> and <a href="https://www.app-development.guide/video-tutorials" target="new">(premium) tutorials</a>


![Screenshot](screenshot.png)

# To Run The App...

[TitaniumDrupalAdapter](https://github.com/jbeuckm/TitaniumDrupalAdapter) is a submodule of this repo. clone with --recursive to get the submodule code.

```
git clone git@github.com:jbeuckm/Ti-Drupal-Test-App.git --recursive
```

Rename `app/lib/drupal/config.js.example` to `app/lib/drupal/config.js` and enter the url of your Drupal 7 install and your Services 3.4+ REST/JSON endpoint.


# Jasmine

The included spec is intended to be run with [TiShadow](https://github.com/dbankier/TiShadow) + [Jasmine](http://pivotal.github.io/jasmine/). 


