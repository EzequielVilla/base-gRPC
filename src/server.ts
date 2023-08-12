import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/main";

const PROTO_PATH = __dirname + "/../main.proto";
console.log({ PROTO_PATH });

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

function sayHello(call, callback) {
  callback(null, { message: "Hello " + call.request.name });
}

function main() {
  const server = new grpc.Server();
  server.addService(proto.main.Greeter.service, { sayHello: sayHello });
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
}

main();
