import React from "react";

import { render } from "@testing-library/react";

import Modal from "../common/components/Modal";

describe("<Modal/>", () => {
  const close = jest.fn();
  it("Modal component를 render한다", () => {
    render(<Modal />);
  });

  it("모달 close시 모달이 닫혀야 한다", () => {
    const { getByTestId } = render(<Modal close={close}>black</Modal>);
    expect(getByTestId("modal")).toBeInTheDocument();
  });
});
