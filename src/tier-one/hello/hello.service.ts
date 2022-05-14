import { Injectable } from "@nestjs/common";

import axios from "axios";

@Injectable()
export class HelloService {
  sayHello(lang: string) {
    return axios.get(this.getRequestUrl(lang));
  }

  private getRequestUrl(lang: string) {
    const BASE_URL = new URL("https://fourtonfish.com/hellosalut");
    BASE_URL.searchParams.append("lang", lang);
    console.log(BASE_URL.toString());
    return BASE_URL.toString();
  }
}
