import { ChannelOptions, credentials, } from "@grpc/grpc-js";
import { AnomalyClient } from "../../protos/pb/anomaly_grpc_pb";
import { SubscribeRequest } from "../../protos/pb/anomaly_pb";

export type SubscribeArgs = {
    subscription: SubscribeRequest
    onError: (data: any, error: any) => void,
    onData: (data: any, error: any) => void,
    onEnd: (data: any, error: any) => void
}

class GrpcClient {
    private client: any

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


        this.client = new AnomalyClient(
            address,
            credentials.createInsecure(),
            options
        )
    }



    public subscribe({ subscription, onData, onEnd, onError }: SubscribeArgs) {
        const call = this.client.subscribe(subscription)

        call.on('error', onError)
        call.on('data', onData)


        const _onEnd = function (data: any, error: any) {
            onEnd(data, error)
            call.end()
        }

        call.on('end', _onEnd)
        call.write(subscription)
        console.log(call)
        console.log("Subsribe")
    }
}



export const grpcClient = new GrpcClient("127.0.0.1:1234")
