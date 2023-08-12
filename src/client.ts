import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/main";

const PROTO_PATH = __dirname + "/../main.proto";
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

function main() {
  const target = "localhost:50051";

  const Greeter = proto.main.Greeter;
  const services = new Greeter(target, grpc.credentials.createInsecure());
  const user = "Eze";

  services.sayHello({ name: user }, (err, response) => {
    if (err) {
      console.log({ err });
      return;
    }
    console.log("Greeting:", response.message);
  });
}

main();
