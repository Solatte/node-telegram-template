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

function serialize_solom_CheckVolumeArgs(arg) {
  if (!(arg instanceof protos_anomaly_pb.CheckVolumeArgs)) {
    throw new Error('Expected argument of type solom.CheckVolumeArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_CheckVolumeArgs(buffer_arg) {
  return protos_anomaly_pb.CheckVolumeArgs.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_solom_GetOneMinuteVolumeByWindowArgs(arg) {
  if (!(arg instanceof protos_anomaly_pb.GetOneMinuteVolumeByWindowArgs)) {
    throw new Error('Expected argument of type solom.GetOneMinuteVolumeByWindowArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_GetOneMinuteVolumeByWindowArgs(buffer_arg) {
  return protos_anomaly_pb.GetOneMinuteVolumeByWindowArgs.deserializeBinary(new Uint8Array(buffer_arg));
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
  checkVolume: {
    path: '/solom.Anomaly/CheckVolume',
    requestStream: false,
    responseStream: false,
    requestType: protos_anomaly_pb.CheckVolumeArgs,
    responseType: protos_anomaly_pb.Boolean,
    requestSerialize: serialize_solom_CheckVolumeArgs,
    requestDeserialize: deserialize_solom_CheckVolumeArgs,
    responseSerialize: serialize_solom_Boolean,
    responseDeserialize: deserialize_solom_Boolean,
  },
};

exports.AnomalyClient = grpc.makeGenericClientConstructor(AnomalyService);
