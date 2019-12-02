import { TestBed } from "@angular/core/testing";

import { ApiServiceProduct } from "./api.service.product";

describe("ApiServiceProduct", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ApiServiceProduct = TestBed.get(ApiServiceProduct);
    expect(service).toBeTruthy();
  });
});
