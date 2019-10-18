 import { n } from "./null";

describe("null utilities", () => {

    test("should return null", () => {
        expect({}.n("test")).toEqual(null);
        expect({}.n("test").n("test")).toEqual(null);
    });

    test("should return value", () => {
        expect({ test: "content" }.n("test")).toEqual("content");
    });
});