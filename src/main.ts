
import { init as initTelegramBot } from './telegram/init'


function main() {
	initTelegramBot()
}

(async () => {
	await main()
	console.log("telegram bot is running")
})()



