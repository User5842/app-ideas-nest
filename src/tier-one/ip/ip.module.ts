import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { IPController } from "./ip.controller";
import { IPService } from "./ip.service";

@Module({
  controllers: [IPController],
  imports: [HttpModule],
  providers: [IPService],
})
export class IPModule {}
