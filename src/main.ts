
import { GrpcClient } from './generators/grpc'
import { config } from './utils/config'
// import { init as initTelegramBot } from './telegram/init'

async function main() {
	console.log(config.get("grpc_url"))

	const grpcClient = new GrpcClient(config.get('grpc_url').toString())

	/* 	
	
		let mint = "F4aLcMxQy6CPcXAuER3J5QgB89n4fqBMs2bcrqQBpump"
	
		let price = await grpcClient.getPriceAllWindow(mint)
		if (!price) return
		console.log(price.toObject())
	
		let ohlcPrice = await grpcClient.getOHLCPriceAllWindow(mint, 5)
		if (!ohlcPrice) return
		console.log(ohlcPrice.toObject())
	
		let amm_id = "3bhsmuvsbxtpbisbby5jtmz5xrfj9ymr89xpm6bgytq1"
	
		let volume = await grpcClient.getOneMinuteVolumeByWindow(amm_id, 5)
		if (!volume) return
		console.log(volume.toObject())
	
		let isAmmGood = await grpcClient.isAmmGood({
			amm_id,
			time_range: ["1m", "2m", "3m", "4m", "5m"],
			action: "both",
			operator: "==",
			value: 1000000000,
		})
		if (!volume) return
		console.log(isAmmGood)
		
		grpcClient.subscribe({ transaction: { mint: ["H7dmoe1zwv8w5kWudmm6D28vStzYzLDgBeJG6652pump"] } })
	*/

	let now = Date.now()
	let fiveteenMinutesAgo = now - 15 * 60 * 1000
	let token = await grpcClient.getMostActiveToken(fiveteenMinutesAgo, now, 5)
	if (!token) return
	console.log(token.toObject())

	token = await grpcClient.getTokenByTrending(fiveteenMinutesAgo, now, 5)
	if (!token) return
	console.log(token.toObject())

	token = await grpcClient.getTokenByBuy(fiveteenMinutesAgo, now, 5)
	if (!token) return
	console.log(token.toObject())

	token = await grpcClient.getTokenBySell(fiveteenMinutesAgo, now, 5)
	if (!token) return
	console.log(token.toObject())


	grpcClient.subscribeEvent()


	// initTelegramBot()
}

(async () => {
	await main()
})()



