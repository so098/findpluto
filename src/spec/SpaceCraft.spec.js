import React from "react";

import SpaceCraft from "../common/components/SpaceCraft";
import { customRender } from "../setupTests";
describe("<SpaceCraft/>", () => {
  let me = "me";
  let children = "test";
  it("SpaceCraft를 render한다.", () => {
    customRender(<SpaceCraft speaker={me}>{children}</SpaceCraft>);
  });
});
