import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

import { Hello } from "./hello.interface";

@Injectable()
export class HelloService {
  constructor(private httpService: HttpService) {}

  /**
   * Makes a request to the `hellosalut` service to retrieve
   * a greeting in the users chosen language.
   * @param code The language code.
   * @returns A response containing greeting information.
   */
  sayHelloWithCode(code: string) {
    const baseURL = new URL("https://fourtonfish.com/hellosalut");
    baseURL.searchParams.append("lang", code);

    const stream = this.httpService.get<Hello>(baseURL.toString());
    return firstValueFrom(stream);
  }

  /**
   * Makes a request to the `hellosalut` service to retrieve
   * a greeting in the users chosen language.
   * @param ip The users IPv4 address.
   * @returns A response containing greeting information.
   */
  sayHelloWithIP(ip: string) {
    const baseURL = new URL("https://fourtonfish.com/hellosalut");
    baseURL.searchParams.append("ip", ip);

    const stream = this.httpService.get<Hello>(baseURL.toString());
    return firstValueFrom(stream);
  }
}
