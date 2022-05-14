import { Controller, Get, Param } from "@nestjs/common";

import { HelloService } from "./hello.service";

@Controller("hello")
export class HelloController {
  constructor(private helloService: HelloService) {}

  /**
   * Routes the request to the `helloService`.
   * @param lang The language code.
   * @returns The data for the greeting in the users chosen language.
   */
  @Get(":lang")
  async sayHello(@Param("lang") lang: string) {
    return this.helloService.sayHello(lang).then((res) => {
      if (res.statusText === "OK") {
        return res.data;
      }
    });
  }
}
