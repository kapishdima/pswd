import { app, BrowserWindow, screen } from "electron";

const DEV_PORT = process.env.DEV_PORT || "8083";

const createWindow = () => {
  const {
    size: { width, height },
  } = screen.getPrimaryDisplay();

  const win = new BrowserWindow({
    width,
    height,
  });

  win.loadURL(`http://localhost:${DEV_PORT}`);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
