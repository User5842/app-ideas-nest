import { Module } from "@nestjs/common";

import { HelloModule } from "./tier-one/hello/hello.module";

@Module({
  imports: [HelloModule],
})
export class AppModule {}
