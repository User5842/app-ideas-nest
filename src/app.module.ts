import { Module } from "@nestjs/common";

import { TierOneModule } from "./tier-one/tier-one.module";

@Module({
  imports: [TierOneModule],
})
export class AppModule {}
