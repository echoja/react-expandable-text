import {fireEvent, render, screen, waitFor} from "@testing-library/react";

import {ExpandableText} from "./ExpandableText";

let originalResizeObserver: typeof globalThis.ResizeObserver | undefined;
let scrollHeightDescriptor: PropertyDescriptor | undefined;

beforeEach(() => {
  originalResizeObserver = globalThis.ResizeObserver;
  scrollHeightDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "scrollHeight");

  jest.spyOn(window, "getComputedStyle").mockImplementation(
    () =>
      ({
        lineHeight: "20px",
        getPropertyValue: () => "",
      }) as unknown as CSSStyleDeclaration
  );

  class ResizeObserverMock {
    private callback: ResizeObserverCallback;

    constructor(callback: ResizeObserverCallback) {
      this.callback = callback;
    }

    observe() {
      this.callback([], this as unknown as ResizeObserver);
    }

    disconnect() {
      return undefined;
    }

    unobserve() {
      return undefined;
    }
  }

  globalThis.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;

  Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
    configurable: true,
    get() {
      return 80;
    },
  });
});

afterEach(() => {
  jest.restoreAllMocks();

  if (scrollHeightDescriptor) {
    Object.defineProperty(HTMLElement.prototype, "scrollHeight", scrollHeightDescriptor);
  } else {
    Reflect.deleteProperty(HTMLElement.prototype, "scrollHeight");
  }

  if (originalResizeObserver) {
    globalThis.ResizeObserver = originalResizeObserver;
  } else {
    Reflect.deleteProperty(globalThis as Record<string, unknown>, "ResizeObserver");
  }
});

describe("ExpandableText", () => {
  it("toggles between collapsed and expanded states when content exceeds clamp", async () => {
    render(
      <ExpandableText
        lineClamp={2}
        content="Laboris mollit esse labore velit minim labore ut voluptate exercitation exercitation consequat ad amet incididunt."
      />
    );

    const expandButton = await screen.findByRole("button", {name: "더보기"});

    fireEvent.click(expandButton);

    const collapseButton = await screen.findByRole("button", {name: "접기"});
    expect(collapseButton).toBeInTheDocument();

    fireEvent.click(collapseButton);

    await waitFor(() => {
      expect(screen.getByRole("button", {name: "더보기"})).toBeInTheDocument();
    });
  });
});
