# Dev
Install depencies, clear plugin cache, redeploy and restart

```bash
cd ~/tmp/kibana-html-plugin
bower install

cd kibana
rm -rf ./optimize/*
cp -R ~/tmp/kibana-html-plugin ./src/plugins/
bin/kibana
```

## Debug scope

1. Open Firebug
2. Select HTML
3. Enter `angular.element($0).scope()` in console