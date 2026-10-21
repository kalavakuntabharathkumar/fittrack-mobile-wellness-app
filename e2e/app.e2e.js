describe("FitTrack", () => {
  beforeAll(async () => { await device.launchApp(); });
  it("shows the daily wellness screen", async () => {
    await expect(element(by.text("Small steps."))).toBeVisible();
    await expect(element(by.text("Your daily intentions"))).toBeVisible();
  });
});
