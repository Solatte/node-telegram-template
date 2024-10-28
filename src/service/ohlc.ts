import { SubscribeRequestFilterOHLC } from "../../protos/pb/anomaly_pb"

export function createOHLCFilter(ammId: string, timeIntervalInMinute: number): SubscribeRequestFilterOHLC {
    const filter = new SubscribeRequestFilterOHLC()

    filter.setAmmId(ammId)
    filter.setTimeInterval(timeIntervalInMinute)

    return filter
}