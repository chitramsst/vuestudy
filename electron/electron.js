const { app, BrowserWindow, ipcMain  } = require('electron')
const path = require('path')

/* db section*/
global.share = {app, ipcMain}

let db = require('./database/db')()
let {runSeeders} = require('./database/db');
require('./database/dbHandler')

async function readySqlite()
{
  try{
    (await db).sequelize.sync();
    runSeeders();
  }
  catch(e)
  {
    console.log(e)
  }
}

/* end db section */





let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
    width: 1500,
    height: 900,
    minHeight:900,
    minWidth:1200, 
    webPreferences: {
      preload: path.join(__dirname, './preload.js')
    }
  })

  const isDev = true;
  //const isDev = process.env.IS_DEV == "true" ? true : false;
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:5173'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  );

  mainWindow.openDevTools()
}

app.whenReady().then(async () => {
  await readySqlite()

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


// ipcMain.handle('database-function',async (event,params) => {
//   console.log(event);
// })