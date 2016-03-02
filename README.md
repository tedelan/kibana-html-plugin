# Kibana HTML Widget Plugin
HTML Widget Plugin for Kibana. This Plugin was originally adapted from the Markdown Plugin.

![preview-create](/resources/preview-create.png)

![preview-edit](/resources/preview-edit.png)

# Install

```bash
git clone https://github.com/raystorm-place/raystorm-kibana-html.git
cp -R ./raystorm-kibana-html kibana/src/plugins/
```

# Compatibility
Plugins are officialy not supported, because of fast code changes even in minor Versions.

The plugin is 100% compatible with following Versions (other not tested yet):
* kibana (=4.4.1)


# Dev
Clear plugin cache, redeploy and restart

```bash
cd kibana
rm -rf ./optimize/*
cp -R ~/tmp/kibana-html ./src/plugins/
bin/kibana
```
