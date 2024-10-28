import { SubscribeRequestFilterVolume, VolumeAbove, VolumeBelow, VolumeBetween } from "../../protos/pb/anomaly_pb";
import { Volume } from "../enums";

export function createVolumeFilter(condition: string, threshold: number, min?: number): SubscribeRequestFilterVolume {
    const volumeFilter = new SubscribeRequestFilterVolume()

    switch (condition) {
        case Volume.ABOVE: {
            const filter = new VolumeAbove()
            filter.setThreshold(threshold)
            volumeFilter.setAbove(filter)
        }
        case Volume.BETWEEN: {
            const filter = new VolumeBetween()
            filter.setMax(threshold)
            if (min) filter.setMin(min)
        }
        case Volume.BELOW: {
            const filter = new VolumeBelow()
            filter.setThreshold(threshold)
            volumeFilter.setBelow(filter)
        }
        default:
    }

    return volumeFilter
}