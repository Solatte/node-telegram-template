// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_anomaly_pb = require('../protos/anomaly_pb.js');

function serialize_solom_Boolean(arg) {
  if (!(arg instanceof protos_anomaly_pb.Boolean)) {
    throw new Error('Expected argument of type solom.Boolean');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_Boolean(buffer_arg) {
  return protos_anomaly_pb.Boolean.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_GetOHLCPriceAllWindowArgs(arg) {
  if (!(arg instanceof protos_anomaly_pb.GetOHLCPriceAllWindowArgs)) {
    throw new Error('Expected argument of type solom.GetOHLCPriceAllWindowArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_GetOHLCPriceAllWindowArgs(buffer_arg) {
  return protos_anomaly_pb.GetOHLCPriceAllWindowArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_GetOneMinuteTradeSizeByWindowArgs(arg) {
  if (!(arg instanceof protos_anomaly_pb.GetOneMinuteTradeSizeByWindowArgs)) {
    throw new Error('Expected argument of type solom.GetOneMinuteTradeSizeByWindowArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_GetOneMinuteTradeSizeByWindowArgs(buffer_arg) {
  return protos_anomaly_pb.GetOneMinuteTradeSizeByWindowArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_GetOneMinuteVolumeByWindowArgs(arg) {
  if (!(arg instanceof protos_anomaly_pb.GetOneMinuteVolumeByWindowArgs)) {
    throw new Error('Expected argument of type solom.GetOneMinuteVolumeByWindowArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_GetOneMinuteVolumeByWindowArgs(buffer_arg) {
  return protos_anomaly_pb.GetOneMinuteVolumeByWindowArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_GetTokenByArgs(arg) {
  if (!(arg instanceof protos_anomaly_pb.GetTokenByArgs)) {
    throw new Error('Expected argument of type solom.GetTokenByArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_GetTokenByArgs(buffer_arg) {
  return protos_anomaly_pb.GetTokenByArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_GetWhaleCountByWindowArgs(arg) {
  if (!(arg instanceof protos_anomaly_pb.GetWhaleCountByWindowArgs)) {
    throw new Error('Expected argument of type solom.GetWhaleCountByWindowArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_GetWhaleCountByWindowArgs(buffer_arg) {
  return protos_anomaly_pb.GetWhaleCountByWindowArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_IsAmmGoodArgs(arg) {
  if (!(arg instanceof protos_anomaly_pb.IsAmmGoodArgs)) {
    throw new Error('Expected argument of type solom.IsAmmGoodArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_IsAmmGoodArgs(buffer_arg) {
  return protos_anomaly_pb.IsAmmGoodArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_Mint(arg) {
  if (!(arg instanceof protos_anomaly_pb.Mint)) {
    throw new Error('Expected argument of type solom.Mint');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_Mint(buffer_arg) {
  return protos_anomaly_pb.Mint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_OHLCPriceAllWindow(arg) {
  if (!(arg instanceof protos_anomaly_pb.OHLCPriceAllWindow)) {
    throw new Error('Expected argument of type solom.OHLCPriceAllWindow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_OHLCPriceAllWindow(buffer_arg) {
  return protos_anomaly_pb.OHLCPriceAllWindow.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_OneMinuteTradeSizeByWindow(arg) {
  if (!(arg instanceof protos_anomaly_pb.OneMinuteTradeSizeByWindow)) {
    throw new Error('Expected argument of type solom.OneMinuteTradeSizeByWindow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_OneMinuteTradeSizeByWindow(buffer_arg) {
  return protos_anomaly_pb.OneMinuteTradeSizeByWindow.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_OneMinuteVolumeByWindow(arg) {
  if (!(arg instanceof protos_anomaly_pb.OneMinuteVolumeByWindow)) {
    throw new Error('Expected argument of type solom.OneMinuteVolumeByWindow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_OneMinuteVolumeByWindow(buffer_arg) {
  return protos_anomaly_pb.OneMinuteVolumeByWindow.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_PriceAllWindow(arg) {
  if (!(arg instanceof protos_anomaly_pb.PriceAllWindow)) {
    throw new Error('Expected argument of type solom.PriceAllWindow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_PriceAllWindow(buffer_arg) {
  return protos_anomaly_pb.PriceAllWindow.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_SubscribeEventRequest(arg) {
  if (!(arg instanceof protos_anomaly_pb.SubscribeEventRequest)) {
    throw new Error('Expected argument of type solom.SubscribeEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_SubscribeEventRequest(buffer_arg) {
  return protos_anomaly_pb.SubscribeEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_SubscribeEventUpdate(arg) {
  if (!(arg instanceof protos_anomaly_pb.SubscribeEventUpdate)) {
    throw new Error('Expected argument of type solom.SubscribeEventUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_SubscribeEventUpdate(buffer_arg) {
  return protos_anomaly_pb.SubscribeEventUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_SubscribeGeyserRequest(arg) {
  if (!(arg instanceof protos_anomaly_pb.SubscribeGeyserRequest)) {
    throw new Error('Expected argument of type solom.SubscribeGeyserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_SubscribeGeyserRequest(buffer_arg) {
  return protos_anomaly_pb.SubscribeGeyserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_SubscribeGeyserUpdate(arg) {
  if (!(arg instanceof protos_anomaly_pb.SubscribeGeyserUpdate)) {
    throw new Error('Expected argument of type solom.SubscribeGeyserUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_SubscribeGeyserUpdate(buffer_arg) {
  return protos_anomaly_pb.SubscribeGeyserUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_SubscribeRequest(arg) {
  if (!(arg instanceof protos_anomaly_pb.SubscribeRequest)) {
    throw new Error('Expected argument of type solom.SubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_SubscribeRequest(buffer_arg) {
  return protos_anomaly_pb.SubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_SubscribeUpdate(arg) {
  if (!(arg instanceof protos_anomaly_pb.SubscribeUpdate)) {
    throw new Error('Expected argument of type solom.SubscribeUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_SubscribeUpdate(buffer_arg) {
  return protos_anomaly_pb.SubscribeUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_TokenBy(arg) {
  if (!(arg instanceof protos_anomaly_pb.TokenBy)) {
    throw new Error('Expected argument of type solom.TokenBy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_TokenBy(buffer_arg) {
  return protos_anomaly_pb.TokenBy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_WhaleCountByWindow(arg) {
  if (!(arg instanceof protos_anomaly_pb.WhaleCountByWindow)) {
    throw new Error('Expected argument of type solom.WhaleCountByWindow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_WhaleCountByWindow(buffer_arg) {
  return protos_anomaly_pb.WhaleCountByWindow.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnomalyService = exports.AnomalyService = {
  subscribe: {
    path: '/solom.Anomaly/Subscribe',
    requestStream: true,
    responseStream: true,
    requestType: protos_anomaly_pb.SubscribeRequest,
    responseType: protos_anomaly_pb.SubscribeUpdate,
    requestSerialize: serialize_solom_SubscribeRequest,
    requestDeserialize: deserialize_solom_SubscribeRequest,
    responseSerialize: serialize_solom_SubscribeUpdate,
    responseDeserialize: deserialize_solom_SubscribeUpdate,
  },
  subscribeEvent: {
    path: '/solom.Anomaly/SubscribeEvent',
    requestStream: true,
    responseStream: true,
    requestType: protos_anomaly_pb.SubscribeEventRequest,
    responseType: protos_anomaly_pb.SubscribeEventUpdate,
    requestSerialize: serialize_solom_SubscribeEventRequest,
    requestDeserialize: deserialize_solom_SubscribeEventRequest,
    responseSerialize: serialize_solom_SubscribeEventUpdate,
    responseDeserialize: deserialize_solom_SubscribeEventUpdate,
  },
  subscribeGeyser: {
    path: '/solom.Anomaly/SubscribeGeyser',
    requestStream: true,
    responseStream: true,
    requestType: protos_anomaly_pb.SubscribeGeyserRequest,
    responseType: protos_anomaly_pb.SubscribeGeyserUpdate,
    requestSerialize: serialize_solom_SubscribeGeyserRequest,
    requestDeserialize: deserialize_solom_SubscribeGeyserRequest,
    responseSerialize: serialize_solom_SubscribeGeyserUpdate,
    responseDeserialize: deserialize_solom_SubscribeGeyserUpdate,
  },
  getPriceAllWindow: {
    path: '/solom.Anomaly/GetPriceAllWindow',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.Mint,
    responseType: protos_anomaly_pb.PriceAllWindow,
    requestSerialize: serialize_solom_Mint,
    requestDeserialize: deserialize_solom_Mint,
    responseSerialize: serialize_solom_PriceAllWindow,
    responseDeserialize: deserialize_solom_PriceAllWindow,
  },
  getOneMinuteVolumeByWindow: {
    path: '/solom.Anomaly/GetOneMinuteVolumeByWindow',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.GetOneMinuteVolumeByWindowArgs,
    responseType: protos_anomaly_pb.OneMinuteVolumeByWindow,
    requestSerialize: serialize_solom_GetOneMinuteVolumeByWindowArgs,
    requestDeserialize: deserialize_solom_GetOneMinuteVolumeByWindowArgs,
    responseSerialize: serialize_solom_OneMinuteVolumeByWindow,
    responseDeserialize: deserialize_solom_OneMinuteVolumeByWindow,
  },
  getOHLCPriceAllWindow: {
    path: '/solom.Anomaly/GetOHLCPriceAllWindow',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.GetOHLCPriceAllWindowArgs,
    responseType: protos_anomaly_pb.OHLCPriceAllWindow,
    requestSerialize: serialize_solom_GetOHLCPriceAllWindowArgs,
    requestDeserialize: deserialize_solom_GetOHLCPriceAllWindowArgs,
    responseSerialize: serialize_solom_OHLCPriceAllWindow,
    responseDeserialize: deserialize_solom_OHLCPriceAllWindow,
  },
  isAmmGood: {
    path: '/solom.Anomaly/IsAmmGood',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.IsAmmGoodArgs,
    responseType: protos_anomaly_pb.Boolean,
    requestSerialize: serialize_solom_IsAmmGoodArgs,
    requestDeserialize: deserialize_solom_IsAmmGoodArgs,
    responseSerialize: serialize_solom_Boolean,
    responseDeserialize: deserialize_solom_Boolean,
  },
  getMostActiveToken: {
    path: '/solom.Anomaly/GetMostActiveToken',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.GetTokenByArgs,
    responseType: protos_anomaly_pb.TokenBy,
    requestSerialize: serialize_solom_GetTokenByArgs,
    requestDeserialize: deserialize_solom_GetTokenByArgs,
    responseSerialize: serialize_solom_TokenBy,
    responseDeserialize: deserialize_solom_TokenBy,
  },
  getTokenByTrending: {
    path: '/solom.Anomaly/GetTokenByTrending',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.GetTokenByArgs,
    responseType: protos_anomaly_pb.TokenBy,
    requestSerialize: serialize_solom_GetTokenByArgs,
    requestDeserialize: deserialize_solom_GetTokenByArgs,
    responseSerialize: serialize_solom_TokenBy,
    responseDeserialize: deserialize_solom_TokenBy,
  },
  getTokenByBuy: {
    path: '/solom.Anomaly/GetTokenByBuy',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.GetTokenByArgs,
    responseType: protos_anomaly_pb.TokenBy,
    requestSerialize: serialize_solom_GetTokenByArgs,
    requestDeserialize: deserialize_solom_GetTokenByArgs,
    responseSerialize: serialize_solom_TokenBy,
    responseDeserialize: deserialize_solom_TokenBy,
  },
  getTokenBySell: {
    path: '/solom.Anomaly/GetTokenBySell',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.GetTokenByArgs,
    responseType: protos_anomaly_pb.TokenBy,
    requestSerialize: serialize_solom_GetTokenByArgs,
    requestDeserialize: deserialize_solom_GetTokenByArgs,
    responseSerialize: serialize_solom_TokenBy,
    responseDeserialize: deserialize_solom_TokenBy,
  },
  getWhaleCountByWindow: {
    path: '/solom.Anomaly/GetWhaleCountByWindow',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.GetWhaleCountByWindowArgs,
    responseType: protos_anomaly_pb.WhaleCountByWindow,
    requestSerialize: serialize_solom_GetWhaleCountByWindowArgs,
    requestDeserialize: deserialize_solom_GetWhaleCountByWindowArgs,
    responseSerialize: serialize_solom_WhaleCountByWindow,
    responseDeserialize: deserialize_solom_WhaleCountByWindow,
  },
  getOneMinuteTradeSizeByWindow: {
    path: '/solom.Anomaly/GetOneMinuteTradeSizeByWindow',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.GetOneMinuteTradeSizeByWindowArgs,
    responseType: protos_anomaly_pb.OneMinuteTradeSizeByWindow,
    requestSerialize: serialize_solom_GetOneMinuteTradeSizeByWindowArgs,
    requestDeserialize: deserialize_solom_GetOneMinuteTradeSizeByWindowArgs,
    responseSerialize: serialize_solom_OneMinuteTradeSizeByWindow,
    responseDeserialize: deserialize_solom_OneMinuteTradeSizeByWindow,
  },
};

exports.AnomalyClient = grpc.makeGenericClientConstructor(AnomalyService);
