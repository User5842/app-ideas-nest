import { Controller, Get, Param } from "@nestjs/common";

import { HelloService } from "./hello.service";

@Controller("hello")
export class HelloController {
  constructor(private helloService: HelloService) {}

  /**
   * Routes the request to the `helloService`.
   * @param code The language code.
   * @returns The data for the greeting in the users chosen language.
   */
  @Get("code/:code")
  async sayHelloWithCode(@Param("code") code: string) {
    const { data } = await this.helloService.sayHelloWithCode(code);
    return data;
  }

  /**
   * Routes the request to the `helloService`.
   * @param ip The users IPv4 address.
   * @returns The data for the greeting in the users chosen language.
   */
  @Get("ip/:ip")
  async sayHelloWithIP(@Param("ip") ip: string) {
    const { data } = await this.helloService.sayHelloWithIP(ip);
    return data;
  }
}
