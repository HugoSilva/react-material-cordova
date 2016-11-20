
import actions from '../src/actions/template'

describe('actions', () => {
  it('should return the same value of the input', () => {
    expect(actions.sameValue(4)).toEqual(4);
  })
})
