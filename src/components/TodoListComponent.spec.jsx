
import { render, fireEvent } from '@testing-library/react';
import React from 'react'
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import TodoListComponent from './TodoListComponent'

describe('#TodoListComponent', () => {
  let component = null;
  const initialState = {
    id: 1,
    title: 'sample to do',
    status: 'COMPLETE'
  }
  afterEach(() => {
    jest.clearAllMocks();
  })
  describe('# initialState', () => {
    beforeEach(async () => {
      await act(async () => {
        component = shallow(<TodoListComponent item={initialState} />);
      });
    });
    it('Should render TodoListComponent to toMatchSnapshot', () => {
      const { container } = render(<TodoListComponent item={initialState} />);
      expect(container).toMatchSnapshot();
    })
    it('should render onChange toBeDefined', () => {
      const onChange = jest.fn();
      const { getByTestId } = render(<TodoListComponent item={initialState} onChange={onChange}/>);
      const checkboxId = getByTestId('1');
      expect(checkboxId).toBeDefined();
    });
    it('should render onChange value', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(<TodoListComponent item={initialState} onChange={onChange}/>);
      const checkboxId = getByTestId('1')
      fireEvent.click(checkboxId, initialState)
      expect(onChange).toHaveBeenCalledWith(initialState)
    })
    it('should render onChange true', () => {
      const { getByTestId } = render(<TodoListComponent item={initialState} />);
      const checkboxId = getByTestId('1')
      expect(checkboxId.checked).toBe(true)
    })
  })
})