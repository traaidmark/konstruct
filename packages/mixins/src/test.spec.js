// MIXINS > TESTS ##############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import {
  _setButtonSize
} from '.';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. PROPS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. SETTERS ................................................................

describe('_setButtonSize()', () => {

  test('Throws an error when nothing is passed.', () => {
    expect(() => {
      _setButtonSize()
    }).toThrow('_setButtonSize: Parameters are missing or incomplete.');
  });
  test('Throws an error when you pass in a single parameter.', () => {
    expect(() => {
      _setButtonSize('large')
    }).toThrow('_setButtonSize: Parameters are missing or incomplete.');
  });
  test('Returns correctly when isIcon is true', () => {
    expect(
      typeof _setButtonSize(true, 'large')
    ).toMatch('string');
  });
  test('Returns correctly when isIcon is false', () => {
    expect(
      typeof _setButtonSize(false, 'large')
    ).toMatch('string');
  });

});

// 3.1. END ....................................................................


// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
