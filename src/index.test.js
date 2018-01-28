// @flow

import mitLicense from '.'

test('generates MIT license for supplied year and name', () => {
  expect(
    mitLicense({ name: 'Macklin Underdown', date: new Date('2018-01-28') })
  ).toMatchSnapshot()
})

test('throws if missing name', () => {
  expect(() => mitLicense()).toThrow()
  expect(() => mitLicense({ name: '' })).toThrow()
})
