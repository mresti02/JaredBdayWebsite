const { getRandomMessage, MESSAGES } = require("../src/app");

describe("getRandomMessage", () => {
  test("returns a string from the messages array", () => {
    const result = getRandomMessage(MESSAGES);
    expect(typeof result).toBe("string");
    expect(MESSAGES).toContain(result);
  });

  test("works with a single-item array", () => {
    const single = ["Only message"];
    expect(getRandomMessage(single)).toBe("Only message");
  });

  test("MESSAGES array is not empty", () => {
    expect(MESSAGES.length).toBeGreaterThan(0);
  });
});
