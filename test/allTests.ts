
import { JsonPointerTest } from "./json-ptr.test";
import { JsonReferenceTest } from "./json-ref.test";

import {
  TestAsync,
  TestDescription
} from "@hn3000/tsunit-async"

function parmNum(t:TestDescription) {
  return (null != t.parameterSetNumber) ? `[${t.parameterSetNumber}]` : '';
}

export function runTests() {
  "use strict";
  let test = new TestAsync();
  test.addTestClass(new JsonPointerTest(), "JsonPointerTest");
  test.addTestClass(new JsonReferenceTest(), "JsonReferenceTest");

  let promise = test.runAsync();
  promise.then((result) => {
    //console.log(result);

    if (result.errors.length) {
      console.log('---');
      result.errors.forEach((e)=>{
        console.log(`Failed: ${e.testName}.${e.funcName}${parmNum(e)} - ${e.message}`);
      });
      console.log('---');
      console.log(`ran unit tests, ${result.passes.length} passed, ${result.errors.length} failed`);
    } else {
      let testnames = result.passes.map((x)=>`${x.testName}.${x.funcName}${parmNum(x)}`).join('\n');
      console.log('---');
      console.log(testnames);
      console.log('---');
      console.log(`ran unit tests, all ${result.passes.length} tests passed`);
    }
  });
}

runTests();
