// package: solom
// file: anomaly.proto

import * as jspb from "google-protobuf";

export class SubscribeRequest extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): SubscribeRequestFilterVolume | undefined;
  setVolume(value?: SubscribeRequestFilterVolume): void;

  hasOhlc(): boolean;
  clearOhlc(): void;
  getOhlc(): SubscribeRequestFilterOHLC | undefined;
  setOhlc(value?: SubscribeRequestFilterOHLC): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
  static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
  export type AsObject = {
    source: string,
    volume?: SubscribeRequestFilterVolume.AsObject,
    ohlc?: SubscribeRequestFilterOHLC.AsObject,
  }
}

export class SubscribeRequestFilterVolume extends jspb.Message {
  hasAbove(): boolean;
  clearAbove(): void;
  getAbove(): VolumeAbove | undefined;
  setAbove(value?: VolumeAbove): void;

  hasBelow(): boolean;
  clearBelow(): void;
  getBelow(): VolumeBelow | undefined;
  setBelow(value?: VolumeBelow): void;

  hasBetween(): boolean;
  clearBetween(): void;
  getBetween(): VolumeBetween | undefined;
  setBetween(value?: VolumeBetween): void;

  getConditionCase(): SubscribeRequestFilterVolume.ConditionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeRequestFilterVolume.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeRequestFilterVolume): SubscribeRequestFilterVolume.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeRequestFilterVolume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeRequestFilterVolume;
  static deserializeBinaryFromReader(message: SubscribeRequestFilterVolume, reader: jspb.BinaryReader): SubscribeRequestFilterVolume;
}

export namespace SubscribeRequestFilterVolume {
  export type AsObject = {
    above?: VolumeAbove.AsObject,
    below?: VolumeBelow.AsObject,
    between?: VolumeBetween.AsObject,
  }

  export enum ConditionCase {
    CONDITION_NOT_SET = 0,
    ABOVE = 1,
    BELOW = 2,
    BETWEEN = 3,
  }
}

export class SubscribeRequestFilterOHLC extends jspb.Message {
  getAmmId(): string;
  setAmmId(value: string): void;

  getTimeInterval(): number;
  setTimeInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeRequestFilterOHLC.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeRequestFilterOHLC): SubscribeRequestFilterOHLC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeRequestFilterOHLC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeRequestFilterOHLC;
  static deserializeBinaryFromReader(message: SubscribeRequestFilterOHLC, reader: jspb.BinaryReader): SubscribeRequestFilterOHLC;
}

export namespace SubscribeRequestFilterOHLC {
  export type AsObject = {
    ammId: string,
    timeInterval: number,
  }
}

export class VolumeAbove extends jspb.Message {
  getThreshold(): number;
  setThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeAbove.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeAbove): VolumeAbove.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeAbove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeAbove;
  static deserializeBinaryFromReader(message: VolumeAbove, reader: jspb.BinaryReader): VolumeAbove;
}

export namespace VolumeAbove {
  export type AsObject = {
    threshold: number,
  }
}

export class VolumeBelow extends jspb.Message {
  getThreshold(): number;
  setThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeBelow.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeBelow): VolumeBelow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeBelow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeBelow;
  static deserializeBinaryFromReader(message: VolumeBelow, reader: jspb.BinaryReader): VolumeBelow;
}

export namespace VolumeBelow {
  export type AsObject = {
    threshold: number,
  }
}

export class VolumeBetween extends jspb.Message {
  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeBetween.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeBetween): VolumeBetween.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeBetween, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeBetween;
  static deserializeBinaryFromReader(message: VolumeBetween, reader: jspb.BinaryReader): VolumeBetween;
}

export namespace VolumeBetween {
  export type AsObject = {
    min: number,
    max: number,
  }
}

export class SubscribeUpdate extends jspb.Message {
  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): SubscribeUpdateVolume | undefined;
  setVolume(value?: SubscribeUpdateVolume): void;

  hasOhlc(): boolean;
  clearOhlc(): void;
  getOhlc(): SubscribeUpdateOHLC | undefined;
  setOhlc(value?: SubscribeUpdateOHLC): void;

  getUpdateOneofCase(): SubscribeUpdate.UpdateOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeUpdate): SubscribeUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeUpdate;
  static deserializeBinaryFromReader(message: SubscribeUpdate, reader: jspb.BinaryReader): SubscribeUpdate;
}

export namespace SubscribeUpdate {
  export type AsObject = {
    volume?: SubscribeUpdateVolume.AsObject,
    ohlc?: SubscribeUpdateOHLC.AsObject,
  }

  export enum UpdateOneofCase {
    UPDATE_ONEOF_NOT_SET = 0,
    VOLUME = 2,
    OHLC = 3,
  }
}

export class SubscribeUpdateVolume extends jspb.Message {
  getAmmId(): string;
  setAmmId(value: string): void;

  getMint(): string;
  setMint(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getBaseVault(): number;
  setBaseVault(value: number): void;

  getTokenPrice(): number;
  setTokenPrice(value: number): void;

  getVolume1m(): number;
  setVolume1m(value: number): void;

  getIsPumpFun(): boolean;
  setIsPumpFun(value: boolean): void;

  getTriggerValue(): number;
  setTriggerValue(value: number): void;

  getSignature(): string;
  setSignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeUpdateVolume.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeUpdateVolume): SubscribeUpdateVolume.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeUpdateVolume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeUpdateVolume;
  static deserializeBinaryFromReader(message: SubscribeUpdateVolume, reader: jspb.BinaryReader): SubscribeUpdateVolume;
}

export namespace SubscribeUpdateVolume {
  export type AsObject = {
    ammId: string,
    mint: string,
    name: string,
    ticker: string,
    baseVault: number,
    tokenPrice: number,
    volume1m: number,
    isPumpFun: boolean,
    triggerValue: number,
    signature: string,
  }
}

export class SubscribeUpdateOHLC extends jspb.Message {
  getAmmId(): string;
  setAmmId(value: string): void;

  getTimeInterval(): number;
  setTimeInterval(value: number): void;

  getPricesMap(): jspb.Map<number, OHLC>;
  clearPricesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeUpdateOHLC.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeUpdateOHLC): SubscribeUpdateOHLC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeUpdateOHLC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeUpdateOHLC;
  static deserializeBinaryFromReader(message: SubscribeUpdateOHLC, reader: jspb.BinaryReader): SubscribeUpdateOHLC;
}

export namespace SubscribeUpdateOHLC {
  export type AsObject = {
    ammId: string,
    timeInterval: number,
    pricesMap: Array<[number, OHLC.AsObject]>,
  }
}

export class OHLC extends jspb.Message {
  getOpen(): number;
  setOpen(value: number): void;

  getHigh(): number;
  setHigh(value: number): void;

  getLow(): number;
  setLow(value: number): void;

  getClose(): number;
  setClose(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OHLC.AsObject;
  static toObject(includeInstance: boolean, msg: OHLC): OHLC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OHLC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OHLC;
  static deserializeBinaryFromReader(message: OHLC, reader: jspb.BinaryReader): OHLC;
}

export namespace OHLC {
  export type AsObject = {
    open: number,
    high: number,
    low: number,
    close: number,
  }
}

