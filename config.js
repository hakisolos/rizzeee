//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxFV3ZWZlhEZDNQbGlIaWt5ZTRZcStxcWVaY1NBZGpyWGtrTkIzUU0wWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWxyVGJ0UmgrYzVjRkI5OTNqS2tXMXBNTDQycVBhY0hzeFkyNlVIZk95WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTjd6dlVSNHhiYi90UDFtNVo4bW1mVyt5MVovV0hxRmZXR0szNllKa0ZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKeGtCdUtHd2JrRXMycHMvdXNEalpBZ2pIb0ViMENJVTAzUTIxUnB6M0dJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGaFhzYmdQTFM5d2Y1WHBhYml1R0lBVGZNa0ZhbTNxK3VUMDEvTHorME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPNjBaTmpleTRqNDRnL1MzZ1pIQkdwY2ZCRWVkNVR0RHZrRWtiRkttVHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxzcDVVVk83eXBvbHlVb2pHRm5xYXdQZjlXWmhUVFZrYTd4alZWWExGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEp3MDBYUjhHeFRyOCtmVnpzdS9HVGZJbndJZXBOV1paR3pkL2poMWcxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWbnp6WkZaUzBpdUpuNko0NW1MaUNGTFdMVmk5dTlRRS9DM3g3YVVvblUyWkNFMitDZUlNaHlCOTNnY0lXNzJyVkhyQVp3U0puS29HOEtMTlp6c0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJIczgrQThXempidU5mVHV5dnZnVmIveGhheFV2VzdubTJOaUdjTmFtMGhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNDI1NDExNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRTFCNEY3RTkwMzJDNUMwODdFOTYzOEQyMEMwRjc1MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NzMyNTcxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTQyNTQxMTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTlBNTc5M0RDRTE1QkI4RkNGNzM3REZGNUYzNTU1NTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjczMjU3MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE0MjU0MTE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRCNENENEVCMzBCRjdFODEzMjQyQzQ2RjNGRUJCODM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY3MzI1NzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNDI1NDExNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCOUI3Mzg0OUE5OTQyRjRFQjhBQUIyNDFFQUU4Q0VFQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NzMyNTc0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItb1V1enFDY1JXNm03d1NQUm83dmpRIiwicGhvbmVJZCI6IjYxMjhlMjE0LTlkMGMtNDAwNC05YWU1LWE4Y2VjYjUyY2U3MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuRmM2TE1UYTJwZFFwaUlWNHgyc1Rka09jZnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm0yOTdubjc3TXBKa1hLdnJncG5rN05ubG1JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlEMkM5M1Y4IiwibWUiOnsiaWQiOiIyNjM3MTQyNTQxMTU6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTzYrdEpzREVJMnlyN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRlBXMndBeWlCZ2NwamNEbWFQb1N1RE5TSXhZalpOdGpGTnQyTFovTnJ3Yz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYkNJckFPZk0xQndhSWViOXVMcm0zVm1pSEpEbW1PTG9sTWRRbytYZkFFZ0ZlYnIxWU9QV2doVmJNWjFkaENHSGk5Zzk5anJrSmNGbEc1dUprNVNzQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImpOZlBVeXQ2WUxtRjBsa2I3SHNTV1I0aVY0bjdCMXhEaVJ2USt4RllPMGphS0Yvd3QwTFJmenUycHY1SlhNQzZrbVBaaFdhNWR5bUJkM3RMWml5M0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0MjU0MTE1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlQxdHNBTW9nWUhLWTNBNW1qNkVyZ3pVaU1XSTJUYll4VGJkaTJmemE4SCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjczMjU2OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKWVIifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
