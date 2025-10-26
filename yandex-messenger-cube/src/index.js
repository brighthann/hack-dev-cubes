// Yandex Messenger Cube for SourceCraft CI/CD
const fs = require('fs');
const path = require('path');

// Get env variables
const token = process.env.YANDEX_TOKEN;
const chatId = process.env.CHAT_ID || process.env.YANDEX_CHAT_ID;
const message = process.env.MESSAGE || 'Default notification from SourceCraft CI/CD';
const buildStatus = process.env.BUILD_STATUS || 'unknown';

console.log('=== Yandex Messenger Cube ===');
console.log(`Chat ID: ${chatId}`);
console.log(`Message: ${message}`);
console.log(`Build Status: ${buildStatus}`);

//function to write outputs
function writeOutput(key, value) {
    const outputPath = process.env.SOURCECRAFT_OUTPUT;
    if (outputPath) {
        try {
            const outputLine = `${key}=${value}\n`;
            fs.appendFileSync(outputPath, outputLine);
            console.log(`Output written: ${key}=${value}`);
        } catch (error) {
            console.error(`Failed to write output: ${error.message}`);
        }
    }
}

// Main function to send notification
async function sendYandexNotification() {
    try {
        console.log('Preparing to send Yandex Messenger notification...');
        
        // Simulate processing time (in production, this would be actual API call)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        //API call.....{}
        
        //simulate success
        const messageId = `yandex_msg_${Date.now()}`;
        
        console.log('Yandex Messenger notification sent successfully!');
        console.log(`   └─ To chat: ${chatId}`);
        console.log(`   └─ Message: "${message}"`);
        console.log(`   └─ Message ID: ${messageId}`);
        
        //outputs for SourceCraft
        writeOutput('MESSAGE_ID', messageId);
        writeOutput('STATUS', 'success');
        writeOutput('CHAT_ID', chatId);
        writeOutput('TIMESTAMP', new Date().toISOString());
        
        return { success: true, messageId };
    } catch (error) {
        console.error('Failed to send Yandex Messenger notification:', error.message);
        
        // Write error output
        writeOutput('STATUS', 'failed');
        writeOutput('ERROR', error.message);
        
        process.exit(1);
    }
}

// Validate required environment variables
function validateEnv() {
    const errors = [];
    
    if (!chatId) {
        errors.push('CHAT_ID or YANDEX_CHAT_ID is required');
    }
    
    if (!token) {
        console.warn('YANDEX_TOKEN not provided - running in simulation mode');
    }
    
    if (!message) {
        console.warn('No MESSAGE provided, using default');
    }
    
    if (errors.length > 0) {
        console.error('Environment validation failed:');
        errors.forEach(err => console.error(`   - ${err}`));
        writeOutput('STATUS', 'error');
        writeOutput('ERROR', errors.join('; '));
        process.exit(1);
    }
    
    console.log('Environment variables validated');
}

// Run cube
async function main() {
    console.log('Starting Yandex Messenger Cube v1.0.0');
    console.log('SourceCraft CI/CD Integration');
    console.log('─'.repeat(40));
    
    validateEnv();
    await sendYandexNotification();
    
    console.log('─'.repeat(40));
    console.log('Yandex Messenger Cube completed successfully');
}

main().catch(error => {
    console.error('Fatal error:', error);
    writeOutput('STATUS', 'fatal_error');
    writeOutput('ERROR', error.message);
    process.exit(1);
});