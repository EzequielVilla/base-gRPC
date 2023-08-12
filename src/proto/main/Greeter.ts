// Original file: main.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloReply as _main_HelloReply, HelloReply__Output as _main_HelloReply__Output } from '../main/HelloReply';
import type { HelloRequest as _main_HelloRequest, HelloRequest__Output as _main_HelloRequest__Output } from '../main/HelloRequest';

export interface GreeterClient extends grpc.Client {
  SayHello(argument: _main_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_main_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _main_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_main_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _main_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_main_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _main_HelloRequest, callback: grpc.requestCallback<_main_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _main_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_main_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _main_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_main_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _main_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_main_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _main_HelloRequest, callback: grpc.requestCallback<_main_HelloReply__Output>): grpc.ClientUnaryCall;
  
}

export interface GreeterHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_main_HelloRequest__Output, _main_HelloReply>;
  
}

export interface GreeterDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_main_HelloRequest, _main_HelloReply, _main_HelloRequest__Output, _main_HelloReply__Output>
}
