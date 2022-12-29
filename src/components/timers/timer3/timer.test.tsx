import React from 'react'
import { Timer } from './timer'
import { render, fireEvent } from '@testing-library/react'

describe('Timer1 test', () => {
	test('Should render', () => {
		const { getByRole, rerender, unmount } = render(<Timer />)

		const element = getByRole('div')
		expect(element).toBeInTheDocument()
	})
	test('Should re-render without errors', () => {
		const { getByRole, rerender } = render(<Timer />)

		const element = getByRole('div')
		expect(element).toBeInTheDocument()
	})
	test('Should unmount without errors', () => {
		const { getByRole, rerender, unmount } = render(<Timer />)

		unmount()
		const element = getByRole('div')
		expect(element).toBeInTheDocument()
	})
	test('Should click correctly', () => {
		const onClick = jest.fn()
		const label = 'This is a button'

		const { getByText, getByRole } = render(<Timer />)

		const button = getByRole('button')

		expect(getByText(label)).toBeInTheDocument()
		expect(button).toBeInTheDocument()
		fireEvent.click(button)

		expect(onClick).toHaveBeenCalledTimes(1)
	})
})
