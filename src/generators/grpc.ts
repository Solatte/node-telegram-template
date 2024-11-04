import { ChannelOptions, credentials, Metadata, CallOptions } from "@grpc/grpc-js";
import { solom } from "../../protos/anomaly"

type SubscribeArgs = {
    solBalance: {
        max?: number,
        min?: number
    },
    isPumpfun: boolean,
    transaction: {
        mint?: string[],
        signer?: string[],
        max?: number,
        min?: number
    }
}

type CheckVolumeArgs = {
    time_range: string[];
    action: string;
    operator: string;
    value: number;
    amm_id: string;
}

export class GrpcClient {
    private _client
    private host: string

    constructor(address: string) {
        const keepaliveParams: ChannelOptions = {
            'grpc.keepalive_time_ms': 600000, // 10 minutes in milliseconds
            'grpc.keepalive_timeout_ms': 20000, // 20 seconds in milliseconds
            'grpc.keepalive PermitWithoutStream': 1, // true
        };
        const options: ChannelOptions = {
            ...keepaliveParams,
            'grpc.initial_window_size': 100 * 1024 * 1024, // 100 MB
            'grpc.initial_conn_window_size': 100 * 1024 * 1024, // 100 MB
            'grpc.max_receive_message_length': 1 * 1024 * 1024 * 1024, // 1 GB
            "grpc-node.tls_enable_trace": 1
        };


        this._client = new solom.AnomalyClient(address,
            credentials.createInsecure(),
            options
        )

        this.host = address
    }

    get client() {
        return this._client
    }

    public subscribe({ solBalance, isPumpfun, transaction }: Partial<SubscribeArgs>) {
        let request = new solom.SubscribeRequest()

        if (solBalance != undefined) {
            request.sol_balance = new solom.SubscribeRequestFilterSolBalance(solBalance)
        }

        if (isPumpfun != undefined) {
            request.pumpfun = new solom.SubscribeRequestFilterPumpFun({ is_pumpfun: isPumpfun })
        }

        if (transaction != undefined) {
            request.transaction = new solom.SubscribeRequestFilterTransactionFilter(transaction)
        }

        let options: CallOptions = {}
        let stream = this.client.Subscribe(options)

        stream.on('data', (chunk: solom.SubscribeUpdate) => {
            console.log('data', chunk.toObject())
        })

        stream.on('error', (chunk) => {
            console.log('error', chunk)
        })

        stream.write(new solom.SubscribeRequest(request), (chunk: solom.SubscribeUpdate) => {
            console.log(chunk)
        })
    }

    public getOHLCPriceAllWindow(mint: string, duration: number): Promise<solom.OHLCPriceAllWindow | undefined> {
        return new Promise((resolve, reject) => {
            let options: CallOptions = {
            }

            this.client.GetOHLCPriceAllWindow(
                new solom.GetOHLCPriceAllWindowArgs({ mint, duration }),
                new Metadata({ waitForReady: true }),
                options,
                (error, data) => {
                    if (error || !data) {
                        reject(error)
                    } else {
                        resolve(data)
                    }
                })
        })
    }

    public getPriceAllWindow(mint: string): Promise<solom.PriceAllWindow | undefined> {
        return new Promise((resolve, reject) => {
            let options: CallOptions = {
            }

            this.client.GetPriceAllWindow(
                new solom.Mint({ mint }),
                new Metadata({ waitForReady: true }),
                options,
                (error, data) => {
                    if (error || !data) {
                        reject(error)
                    } else {
                        resolve(data)
                    }
                })
        })
    }

    public getOneMinuteVolumeByWindow(mint: string, duration: number): Promise<solom.OneMinuteVolumeByWindow | undefined> {
        return new Promise((resolve, reject) => {
            let options: CallOptions = {
            }

            this.client.GetOneMinuteVolumeByWindow(
                new solom.GetOneMinuteVolumeByWindowArgs({ mint, duration }),
                new Metadata({ waitForReady: true }),
                options,
                (error, data) => {
                    if (error || !data) {
                        reject(error)
                    } else {
                        resolve(data)
                    }
                })
        })
    }

    public checkVolume(req: CheckVolumeArgs): Promise<boolean | undefined> {
        return new Promise((resolve, reject) => {

            let request = new solom.CheckVolumeArgs(req)
            let options: CallOptions = {}

            this.client.CheckVolume(
                request,
                new Metadata({ waitForReady: true }),
                options,
                (error, data) => {
                    if (error || !data) {
                        reject(error)
                    } else {
                        resolve(data.value)
                    }
                })
        })
    }
}