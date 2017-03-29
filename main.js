const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const winOpts = {
  width: 800,
  height: 600
}

// switch this to true to enable debug mode
const debugMode = false;

app.on('ready', function() {
  let win = new BrowserWindow(winOpts);

  win.loadURL(`file://${__dirname}/index.html`);
});
