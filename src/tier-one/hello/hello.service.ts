import { Injectable } from "@nestjs/common";
import axios from "axios";

import { Hello } from "./hello.interface";

@Injectable()
export class HelloService {
  /**
   * Makes a request to the `hellosalut` service to retrieve
   * a greeting in the users chosen language.
   * @param lang The language code.
   * @returns A response containing greeting information.
   */
  sayHello(lang: string) {
    return axios.get<Hello>(this.getRequestUrl(lang));
  }

  private getRequestUrl(lang: string) {
    const BASE_URL = new URL("https://fourtonfish.com/hellosalut");
    BASE_URL.searchParams.append("lang", lang);
    console.log(BASE_URL.toString());
    return BASE_URL.toString();
  }
}
