import React from "react";

import Title from "../feature/home/Title";
import { renderWithWrappers as render } from "../setupTests";

describe("<Title/>", () => {
  it("Title component를 render한다", () => {
    render(<Title />);
  });
});
