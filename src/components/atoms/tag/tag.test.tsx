import React from 'react'
import { Tag } from './tag'
import { render } from '@testing-library/react'

describe('Tag test', () => {
	const text = 'This is a tag'
	const existingIcon = 'animated'
	const nonExistingIcon = 'idonotexist'

	test('Should render the specified text', () => {
		const { getByText } = render(<Tag icon={existingIcon}>{text}</Tag>)

		expect(getByText(text)).toBeInTheDocument()
	})

	test('Should contain the title accessibility tag', () => {
		const titleText = 'This is a tag title'

		const { getByTitle } = render(
			<Tag icon={existingIcon} title={titleText}>
				{text}
			</Tag>
		)

		expect(getByTitle(titleText)).toBeInTheDocument()
	})

	test('Should throw error if icon is not available', () => {
		// @ts-ignore
		expect(() => render(<Tag icon={nonExistingIcon}>{text}</Tag>)).toThrow()
	})

	test('Should throw error if icon is not provided', () => {
		// @ts-ignore
		expect(() => render(<Tag />)).toThrow()
	})
})
