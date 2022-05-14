import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { HelloController } from "./hello.controller";
import { HelloService } from "./hello.service";

@Module({
  controllers: [HelloController],
  imports: [HttpModule],
  providers: [HelloService],
})
export class HelloModule {}
