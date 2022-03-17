import React from "react";

import Modal from "../common/components/Modal";
import { customRender } from "../setupTests";
describe("<Modal/>", () => {
  const open = true;
  const close = jest.fn();
  const check = "확인";

  beforeEach(() => {
    const { getByText } = customRender(<Modal open={open}>test</Modal>);
    expect(getByText("test")).toBeTruthy();
  });

  it("Modal component를 render한다.", () => {
    customRender(<Modal />);
  });

  it("Modal button을 클릭하면 닫힌다..", () => {
    const { getByTestId } = customRender(<Modal close={close} check={check} />);
    const smallEl = getByTestId("closeButton");
    expect(smallEl).toBeInTheDocument();
  });
});
