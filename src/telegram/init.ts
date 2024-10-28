import TelegramBot from 'node-telegram-bot-api'
import { config } from '../utils/config'

import { Cmd, } from '../enums'


const TELEGRAM_BOT_TOKEN = config.get('telegram_bot_token')

export async function init() {
	const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })

	bot.on('message', async (msg) => {
		const chatId = msg.chat.id

		if (!msg.text?.startsWith('/')) {
			bot.sendMessage(chatId, "❓ Unknown command.")
			return
		}

		const texts = msg.text.split(' ')
		const [command, condition, threshold, min] = texts
		console.log(`${command} ${condition} ${threshold}`)

		switch (command) {
			case Cmd.VOLUME: {
				const message = `message received <code>${texts}</code>`
				bot.sendMessage(chatId, message, { parse_mode: 'HTML' })
				break
			}


			case Cmd.OHLC: {

				const message = `message received <code>${texts}</code>`
				bot.sendMessage(chatId, message, { parse_mode: 'HTML' })
				break
			}
		}
	})
}
