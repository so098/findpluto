import React from "react";

import { fireEvent } from "@testing-library/react";

import Title from "../feature/home/Title";
import { customRender } from "../setupTests";

describe("<Title/>", () => {
  it("Title component를 render한다", () => {
    const { getByText } = customRender(<Title />);
    const title = getByText("명왕성을 찾아라");
    expect(title).toBeInTheDocument();
  });

  it("인풋과 버튼을 정의한다.", () => {
    const { getByText, getByPlaceholderText } = customRender(<Title />);
    getByPlaceholderText("에리스");
    getByText("비행준비완료");
  });

  it("인풋 값을 변경한다", () => {
    const { getByPlaceholderText } = customRender(<Title />);
    const input = getByPlaceholderText("에리스");
    fireEvent.change(input, {
      target: {
        placeholder: "한소영",
      },
    });

    expect(input).toHaveAttribute("placeholder", "한소영");
  });
});
