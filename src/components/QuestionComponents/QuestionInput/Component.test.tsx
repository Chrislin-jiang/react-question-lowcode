/**
 * 传属性或者不传属性会有哪些情况？
 */
import React from 'react'
import { render, screen } from '@testing-library/react'

import Component from './Component'

test('默认属性', () => {
  render(<Component />)

  const p = screen.getByText('输入框标题')
  expect(p).toBeInTheDocument()

  const input = screen.getByPlaceholderText('请输入...')
  expect(input).toBeInTheDocument()
})

test('传入属性', () => {
  render(<Component title="hello" placeholder="world" />)

  const p = screen.getByText('hello')
  expect(p).toBeInTheDocument()

  const input = screen.getByPlaceholderText('world')
  expect(input).toBeInTheDocument()
})
