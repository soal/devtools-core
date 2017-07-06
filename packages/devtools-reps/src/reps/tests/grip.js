/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* global jest */
const React = require("react");
const { shallow } = require("enzyme");
const {
  getRep,
} = require("../rep");
const Grip = require("../grip");
const { MODE } = require("../constants");
const stubs = require("../stubs/grip");
const {
  getSelectableInInspectorGrips
} = require("./test-helpers");
const {maxLengthMap} = Grip;

function shallowRenderRep(object, props = {}) {
  return shallow(Grip.rep(Object.assign({
    object,
  }, props)));
}

describe("Grip - empty object", () => {
  // Test object: `{}`
  const object = stubs.get("testBasic");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = "Object {  }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Object");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - Boolean object", () => {
  // Test object: `new Boolean(true)`
  const object = stubs.get("testBooleanObject");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = "Boolean { true }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Boolean");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - Number object", () => {
  // Test object: `new Number(42)`
  const object = stubs.get("testNumberObject");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = "Number { 42 }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Number");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - String object", () => {
  // Test object: `new String("foo")`
  const object = stubs.get("testStringObject");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = `String { "foo" }`;

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("String");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - Proxy", () => {
  // Test object: `new Proxy({a:1},[1,2,3])`
  const object = stubs.get("testProxy");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = "Proxy { <target>: Object, <handler>: [3] }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Proxy");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - ArrayBuffer", () => {
  // Test object: `new ArrayBuffer(10)`
  const object = stubs.get("testArrayBuffer");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = "ArrayBuffer { byteLength: 10 }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("ArrayBuffer");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - SharedArrayBuffer", () => {
  // Test object: `new SharedArrayBuffer(5)`
  const object = stubs.get("testSharedArrayBuffer");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = "SharedArrayBuffer { byteLength: 5 }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("SharedArrayBuffer");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - ApplicationCache", () => {
  // Test object: `window.applicationCache`
  const object = stubs.get("testApplicationCache");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput =
      "OfflineResourceList { status: 0, onchecking: null, onerror: null, more… }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("OfflineResourceList");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);

    const longOutput = "OfflineResourceList { status: 0, onchecking: null, " +
      "onerror: null, onnoupdate: null, ondownloading: null, onprogress: null, " +
      "onupdateready: null, oncached: null, onobsolete: null, mozItems: [] }";
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(longOutput);
  });
});

describe("Grip - Object with max props", () => {
  // Test object: `{a: "a", b: "b", c: "c"}`
  const object = stubs.get("testMaxProps");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = `Object { a: "a", b: "b", c: "c" }`;

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Object");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - Object with more than short mode max props", () => {
  // Test object: `{a: undefined, b: 1, more: 2, d: 3}`;
  const object = stubs.get("testMoreProp");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = `Object { b: 1, more: 2, d: 3, more… }`;

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Object");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);

    const longOutput = `Object { a: undefined, b: 1, more: 2, d: 3 }`;
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(longOutput);
  });

  it("renders as expected when passed an objectLink prop", () => {
    const renderRep = (props) => shallowRenderRep(object, Object.assign({
      objectLink: (_, ...children) => React.DOM.span({}, "<", ...children, ">")
    }, props));
    const defaultOutput = `<Object>< { >b: 1, more: 2, d: 3, <more…>< }>`;

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("<Object>");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);

    const longOutput = `<Object>< { >a: undefined, b: 1, more: 2, d: 3< }>`;
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(longOutput);
  });
});

describe("Grip - Object with more than long mode max props", () => {
  // Test object = `{p0: "0", p1: "1", p2: "2", …, p100: "100"}`
  const object = stubs.get("testMoreThanMaxProps");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = `Object { p0: "0", p1: "1", p2: "2", more… }`;

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Object");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);

    const props = Array.from({length: maxLengthMap.get(MODE.LONG)})
      .map((item, i) => `p${i}: "${i}"`);
    const longOutput = `Object { ${props.join(", ")}, more… }`;
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(longOutput);
  });
});

describe("Grip - Object with uninteresting properties", () => {
  // Test object: `{a: undefined, b: undefined, c: "c", d: 1}`
  const object = stubs.get("testUninterestingProps");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it.skip("renders as expected", () => {
    // @TODO This is broken at the moment.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=1276376
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = `Object {c: "c", d: 1, a: undefined, more...}`;

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Object");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - Object with non-enumerable properties", () => {
  // Test object: `Object.defineProperty({}, "foo", {enumerable : false});`
  const object = stubs.get("testNonEnumerableProps");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = "Object {  }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Object");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - Object with nested object", () => {
  // Test object: `{objProp: {id: 1}, strProp: "test string"}`
  const object = stubs.get("testNestedObject");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = `Object { objProp: Object, strProp: "test string" }`;

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Object");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);

    // Check the custom title with nested objects to make sure nested objects are not
    // displayed with their parent's title.
    expect(renderRep({
      mode: MODE.LONG,
      title: "CustomTitle",
    }).text()).toBe(`CustomTitle { objProp: Object, strProp: "test string" }`);
  });
});

describe("Grip - Object with nested array", () => {
  // Test object: `{arrProp: ["foo", "bar", "baz"]}`
  const object = stubs.get("testNestedArray");

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("renders as expected", () => {
    const renderRep = (props) => shallowRenderRep(object, props);
    const defaultOutput = "Object { arrProp: [3] }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Object");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });
});

describe("Grip - Object with connected nodes", () => {
  const object = stubs.get("testObjectWithNodes");
  const grips = getSelectableInInspectorGrips(object);
  const renderRep = (props) => shallowRenderRep(object, props);

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("has the expected number of node grip", () => {
    expect(grips.length).toBe(2);
  });

  it("renders as expected", () => {
    const defaultOutput =
      "Object { foo: button#btn-1.btn.btn-log, bar: button#btn-2.btn.btn-err }";

    expect(renderRep({ mode: undefined }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.TINY }).text()).toBe("Object");
    expect(renderRep({ mode: MODE.SHORT }).text()).toBe(defaultOutput);
    expect(renderRep({ mode: MODE.LONG }).text()).toBe(defaultOutput);
  });

  it("calls the expected function on mouseover", () => {
    const onDOMNodeMouseOver = jest.fn();
    const wrapper = renderRep({ onDOMNodeMouseOver });
    const node = wrapper.find(".objectBox-node");

    node.at(0).simulate("mouseover");
    node.at(1).simulate("mouseover");

    expect(onDOMNodeMouseOver.mock.calls.length).toBe(2);
    expect(onDOMNodeMouseOver.mock.calls[0][0]).toBe(grips[0]);
    expect(onDOMNodeMouseOver.mock.calls[1][0]).toBe(grips[1]);
  });

  it("calls the expected function on mouseout", () => {
    const onDOMNodeMouseOut = jest.fn();
    const wrapper = renderRep({ onDOMNodeMouseOut });
    const node = wrapper.find(".objectBox-node");

    node.at(0).simulate("mouseout");
    node.at(1).simulate("mouseout");

    expect(onDOMNodeMouseOut.mock.calls.length).toBe(2);
  });

  it("calls the expected function on click", () => {
    const onInspectIconClick = jest.fn();
    const wrapper = renderRep({ onInspectIconClick });
    const node = wrapper.find(".open-inspector");

    node.at(0).simulate("click");
    node.at(1).simulate("click");

    expect(onInspectIconClick.mock.calls.length).toBe(2);
    expect(onInspectIconClick.mock.calls[0][0]).toBe(grips[0]);
    expect(onInspectIconClick.mock.calls[1][0]).toBe(grips[1]);
  });
});

describe("Grip - Object with disconnected nodes", () => {
  const object = stubs.get("testObjectWithDisconnectedNodes");
  const renderRep = (props) => shallowRenderRep(object, props);
  const grips = getSelectableInInspectorGrips(object);

  it("correctly selects Grip Rep", () => {
    expect(getRep(object)).toBe(Grip.rep);
  });

  it("has the expected number of grips", () => {
    expect(grips.length).toBe(2);
  });

  it("renders no inspect icon when nodes are not connected to the DOM tree", () => {
    const onInspectIconClick = jest.fn();
    const wrapper = renderRep({ onInspectIconClick });

    const node = wrapper.find(".open-inspector");
    expect(node.exists()).toBe(false);
  });
});