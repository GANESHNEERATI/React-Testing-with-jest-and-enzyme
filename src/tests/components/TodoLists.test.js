import React from "react";
import { shallow } from "enzyme";
import TodoLists from "../../components/TodoLists";

test("should test TodoLists component with default state of empty array", () => {
  const wrapper = shallow(<TodoLists todos={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should test component with list of todos", () => {
  const wrapper = shallow(
    <TodoLists todos={["Read NewsPaper", "PublishArticle"]} />
  );
  expect(wrapper).toMatchSnapshot();
});
