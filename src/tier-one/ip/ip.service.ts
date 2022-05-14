import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

import { IP } from "./ip.interface";

@Injectable()
export class IPService {
  constructor(private httpService: HttpService) {}

  /**
   * Retrieves user information.
   * @returns The users IPv4 address.
   */
  getIP() {
    const baseURL = new URL("http://ip-api.com/json/");

    const stream = this.httpService.get<IP>(baseURL.toString());
    return firstValueFrom(stream);
  }
}
