"use strict"

var StartingPoint = require("basic-distributed-computation").StartingPoint;
var Request = require("basic-distributed-computation").Request;
var uuid = require("uuid");

class CaptureImage extends StartingPoint {
  constructor(){
    super("capture-image");
    this.add(0, "capture-image");
    this.add(1, "pipe-to-buffer");
    this.add(2, "cp/_output/raw");
    this.add(3, "jpeg/_input/raw/_output/jpeg-data")
  }

  createRequest(payload){
    var req = super.createRequest(payload, Request);
    req.correlationId = uuid.v4();
    return req;
  }
}

module.exports = new CaptureImage();
