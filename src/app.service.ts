import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { Endpoints } from "common/interfaces";

@Injectable()
export class AppService {
  baseURL: string;

  constructor(configService: ConfigService) {
    this.baseURL = new URL("/api", configService.get("BASE_URL")).toString();
  }

  root(): Partial<Record<Endpoints, string>> {
    return {
      character: `${this.baseURL}/character`,
      episode: `${this.baseURL}/episode`,
      location: `${this.baseURL}/location`,
    };
  }
}
