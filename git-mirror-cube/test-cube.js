// test-cube.js - For local testing without Docker
process.env.TELEGRAM_BOT_TOKEN = "demo";
process.env.TELEGRAM_CHAT_ID = "123";
process.env.MESSAGE = "Local test";
process.env.BUILD_STATUS = "success";

console.log("Testing cube without Docker...");
require('./src/index.js');