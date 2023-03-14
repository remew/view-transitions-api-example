import { UpdateCallback } from './types'

declare global {
  // 参考: https://w3c.github.io/csswg-drafts/css-view-transitions-1/#the-domtransition-interface
  export interface ViewTransition {
    readonly updateCallbackDone: Promise<undefined>
    readonly ready: Promise<undefined>
    readonly finished: Promise<undefined>
    skipTransition(): void
  }

  // 参考: https://w3c.github.io/csswg-drafts/css-view-transitions-1/#additions-to-document-api
  interface Document {
    startViewTransition?: (updateCallback?: UpdateCallback) => ViewTransition
  }
}
