import { Controller, Get, Param } from "@nestjs/common";
import { HelloService } from "./hello.service";

@Controller("hello")
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get(":lang")
  async sayHello(@Param() params: any) {
    return this.helloService.sayHello(params.lang).then((res) => {
      if (res.statusText === "OK") {
        return res.data;
      }
    });
  }
}
