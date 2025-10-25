import axios from 'axios';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Validate environment variables
if (!TELEGRAM_BOT_TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN environment variable is required');
}

if (!TELEGRAM_CHAT_ID) {
  throw new Error('TELEGRAM_CHAT_ID environment variable is required');
}

/**
 * Send a message to Telegram
 */
async function sendTelegramMessage(message: string): Promise<void> {
  try {
    console.log('Sending Telegram message...');
    
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });

    console.log('✅ Message sent successfully!');
    console.log('Response:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('❌ Error sending Telegram message:');
    if (axios.isAxiosError(error)) {
      console.error('Status:', error.response?.status);
      console.error('Data:', error.response?.data);
    } else {
      console.error(error);
    }
    throw error;
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log('🚀 Starting Telegram Cube...');
  
  const message = `
🎉 <b>SourceCraft Demo Bot</b> 🎉

✅ Your Telegram cube is working perfectly!
📦 Successfully deployed via Docker
🕐 Timestamp: ${new Date().toLocaleString()}

This is a test message from your SourceCraft cube implementation. 
Everything is configured correctly!

🌟 <i>Next step: Deploy to production</i>
  `.trim();

  await sendTelegramMessage(message);
  console.log('✅ Telegram cube execution completed!');
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('💥 Application failed:', error);
    process.exit(1);
  });
}

export { sendTelegramMessage, main };