import React from "react";
import { mount, shallow } from "enzyme";
import TodoList from "../../components/TodoList";
import { Component } from "react";

let wrapper;
beforeAll(() => {
  wrapper = shallow(<TodoList />);
});
test("should  test TodoList component", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should call handle Todo method", () => {
  const instance = wrapper.instance();
  const value = "Publish Article";
  instance.handleAddTodo({
    preventDefault: () => {},
    target: {
      todo: {
        value,
      },
    },
  });
});

test("should get values from local storage", () => {
  const spy = jest.spyOn(TodoList.prototype, "componentDidMount");
  wrapper.instance().componentDidMount();

  expect(spy).toHaveBeenCalledTimes(1);
});
