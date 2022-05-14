import { Controller, Get } from "@nestjs/common";

import { IPService } from "./ip.service";

@Controller("ip")
export class IPController {
  constructor(private readonly ipService: IPService) {}

  /**
   * Routes the request to the `ipService`.
   * @returns The users IPv4 address.
   */
  @Get()
  async getIP() {
    const { data } = await this.ipService.getIP();
    return data;
  }
}
