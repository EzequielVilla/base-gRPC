import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreeterClient as _main_GreeterClient, GreeterDefinition as _main_GreeterDefinition } from './main/Greeter';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  main: {
    Greeter: SubtypeConstructor<typeof grpc.Client, _main_GreeterClient> & { service: _main_GreeterDefinition }
    HelloReply: MessageTypeDefinition
    HelloRequest: MessageTypeDefinition
  }
}

