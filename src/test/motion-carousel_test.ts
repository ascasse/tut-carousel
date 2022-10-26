/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {MotionCarousel} from '../motion-carousel.js';

import {assert} from '@open-wc/testing';
// import {fixture, assert} from '@open-wc/testing';
// import {html} from 'lit/static-html.js';

suite('motion-carousel', () => {
  test('is defined', () => {
    const el = document.createElement('motion-carousel');
    assert.instanceOf(el, MotionCarousel);
  });
});
