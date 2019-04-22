import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Display from './Display';
import Dashboard from '../dashboard/Dashboard';
describe('display', () => {
  describe('gate status', () => {
    it('closes the gate', () => {
      const { getByText } = render(<Dashboard />);
      const { getByTestId } = render(<Display />);

      const closeButton = getByText(/close gate/i);
      fireEvent.click(closeButton);
      const selected = getByTestId('gateStatus');
      expect(selected).toHaveTextContent(/closed/i);
    });
  });
  it('closes the gate', () => {
    const { getByText } = render(<Dashboard />);
    const { getByTestId } = render(<Display />);

    const openButton = getByText('open gate');
    const closeButton = getByText('close gate');
    fireEvent.click(openButton);
    fireEvent.click(closeButton);
    const selected = getByTestId('gateStatus');
    expect(selected).toHaveTextContent(/opened/i);
  });
});
