export {};

// owner 所有者 初期化時に設定できる　途中から変更できない 参照できる
// secretNumber 個人番号 途中で変更できる　参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNUmber: number) {
    this._secretNumber = secretNUmber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("鏡", 1234567);

card.owner;
card.secretNumber = 123;

console.log(card.debugPrint());
