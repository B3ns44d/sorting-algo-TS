export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number): boolean;
  abstract swap(leftIndex: number): void;

  public sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.compare(j)) {
          this.swap(j);
        }
      }
    }
  }
}