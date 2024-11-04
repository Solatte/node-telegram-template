import convict from 'convict'
import * as dotenv from 'dotenv'
dotenv.config()

const config = convict({
	http_rpc_url: {
		format: String,
		default: 'https://base-mainnet.g.alchemy.com/v2/API_KEY',
		env: 'HTTP_RPC_URL',
	},
	websocket_rpc_url: {
		format: String,
		default: 'wss://base-mainnet.g.alchemy.com/v2/API_KEY',
		env: 'WEBSOCKET_RPC_URL',
	},
	log_level: {
		format: String,
		default: 'info',
		env: 'LOG_LEVEL',
	},
	bot_name: {
		format: String,
		default: '',
		env: 'BOT_NAME',
	},
	telegram_bot_token: {
		format: String,
		default: '',
		env: 'TELEGRAM_BOT_TOKEN',
	},
	grpc_url: {
		format: String,
		default: '127.0.0.1:3000',
		env: 'GRPC_URL',
	},
})

config.validate({ allowed: 'strict' })

export { config }
