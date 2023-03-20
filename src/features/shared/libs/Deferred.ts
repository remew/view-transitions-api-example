export class Deferred {
  readonly promise: Promise<void>
  private _resolve!: () => void
  private _reject!: () => void

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })
  }

  resolve() {
    return this._resolve()
  }

  reject() {
    return this._reject()
  }
}
