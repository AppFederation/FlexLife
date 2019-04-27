module.exports = {
  name: "cloud-time",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/cloud-time/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
