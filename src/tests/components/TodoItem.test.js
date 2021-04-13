import React from "react";
import { shallow } from "enzyme";
import TodoItem from "../../components/TodoItem";

test("should test Todocomponent", () => {
  const wrapper = shallow(<TodoItem todo="Read  News Papers" />);
  expect(wrapper).toMatchSnapshot();
});
