telegram bot template in nodejs

```
protoc --ts_out=import_style=commonjs,binary:./ --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./protos/anomaly.proto --experimental_allow_proto3_optional

```

```
protoc --js_out=import_style=commonjs,binary:./ --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./protos/anomaly.proto --experimental_allow_proto3_optional

```
