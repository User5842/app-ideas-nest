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
   * @param lang The language code.
   * @returns A response containing greeting information.
   */
  sayHello(lang: string) {
    const baseURL = new URL("https://fourtonfish.com/hellosalut");
    baseURL.searchParams.append("lang", lang);

    const stream = this.httpService.get<Hello>(baseURL.toString());
    return firstValueFrom(stream);
  }
}
