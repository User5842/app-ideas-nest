import { Controller, Get, Param } from "@nestjs/common";
import { HelloService } from "./hello.service";

@Controller("hello")
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get(":lang")
  async sayHello(@Param("lang") lang: string) {
    return this.helloService.sayHello(lang).then((res) => {
      if (res.statusText === "OK") {
        return res.data;
      }
    });
  }
}
