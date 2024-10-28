// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var anomaly_pb = require('./anomaly_pb.js');

function serialize_solom_SubscribeRequest(arg) {
  if (!(arg instanceof anomaly_pb.SubscribeRequest)) {
    throw new Error('Expected argument of type solom.SubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_SubscribeRequest(buffer_arg) {
  return anomaly_pb.SubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_solom_SubscribeUpdate(arg) {
  if (!(arg instanceof anomaly_pb.SubscribeUpdate)) {
    throw new Error('Expected argument of type solom.SubscribeUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_solom_SubscribeUpdate(buffer_arg) {
  return anomaly_pb.SubscribeUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnomalyService = exports.AnomalyService = {
  subscribe: {
    path: '/solom.Anomaly/Subscribe',
    requestStream: true,
    responseStream: true,
    requestType: anomaly_pb.SubscribeRequest,
    responseType: anomaly_pb.SubscribeUpdate,
    requestSerialize: serialize_solom_SubscribeRequest,
    requestDeserialize: deserialize_solom_SubscribeRequest,
    responseSerialize: serialize_solom_SubscribeUpdate,
    responseDeserialize: deserialize_solom_SubscribeUpdate,
  },
};

exports.AnomalyClient = grpc.makeGenericClientConstructor(AnomalyService);
