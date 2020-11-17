module.exports = {
  name: 'tmobile',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tmobile',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
