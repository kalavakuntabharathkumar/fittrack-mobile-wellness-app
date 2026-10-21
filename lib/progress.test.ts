describe("daily habit progress", () => {
  const progress = (completed: number, total: number) => total === 0 ? 0 : Math.round((completed / total) * 100);
  it("returns zero when nothing is complete", () => expect(progress(0, 3)).toBe(0));
  it("returns one hundred when all habits are complete", () => expect(progress(3, 3)).toBe(100));
  it("handles an empty goal list", () => expect(progress(0, 0)).toBe(0));
});
