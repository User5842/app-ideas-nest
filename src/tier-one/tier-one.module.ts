import { Module } from "@nestjs/common";

import { HelloModule } from "./hello/hello.module";
import { IPModule } from "./ip/ip.module";

@Module({
  imports: [HelloModule, IPModule],
})
export class TierOneModule {}
