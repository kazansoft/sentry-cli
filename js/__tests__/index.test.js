/* eslint-env jest */

const SentryCli = require('../index');
const helper = require('../helper');

describe('SentryCli', () => {
  it("won't construct an instance if sentry-cli binary is missing", () => {
    helper.mockBinaryPath('i/do/not/exist/sentry-cli');
    expect(() => new SentryCli()).toThrow('Cannot find `sentry-cli` executable');
  });
});
