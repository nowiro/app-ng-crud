import { TestBed } from "@angular/core/testing";

import { ApiServiceUser } from "./api.service.user";

describe("ApiServiceUser", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ApiServiceUser = TestBed.get(ApiServiceUser);
    expect(service).toBeTruthy();
  });
});
