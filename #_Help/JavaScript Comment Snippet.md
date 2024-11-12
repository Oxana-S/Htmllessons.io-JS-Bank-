Quickly generate JavaScript/TypeScript comments according to JSDoc, ESDoc and TSDoc rules, and use @ to trigger to reduce the burden of memory.

Generate comments statically, not responsive. For parameter functions or variables of existing types, it is recommended to use the built-in /** to trigger.

JavaScript Comment Snippet

# Settings
If that doesn't work, you may need to configure the editor.

Ctrl + Shift + P / ⇧ + ⌘ + P → Preferences: Open Settings (JSON)

`  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": false
  },
`

# Snippets
Comment Blocks
Common
Type Syntax
Function
Class
Misc
Instructions with single, without triggering ///, will generate a complete comment fragment.

Comment Blocks
Generate a comment fragment triggered by ///:

/// →

/**
 * description
 */

Then use the following categories to add specific annotation content.

Type Syntax
For Param
prefix	body
@param →	@param {TYPE} param - description
@param.property →	@param {?TYPE} param.name - description
@param.any / `@paa →	@param {\*} param - description
@param.object / @pao / @ppo →	@param {Object} param - description
@param.array / @paar / @ppar →	@param {Object[]} param - description
@param.string / @pas / @pps →	@param {string} param - description
@param.number / @panu / @ppn →	@param {number} param - description
@param.boolean / @pab / @ppb →	@param {boolean} param - description
@param.Function / @paf / @ppf →	@param {Function} param - description
@param.DOMElement / @pad / @ppd →	@param {DOMElement} param - description
@param.Node / @pan / @ppnode →	@param {Node} param - description
@param.NodeList / @panl / @ppnl →	@param {NodeList} param - description
@param.RegExp / @pare / @ppre →	@param {RegExp} param - description
@param.generics / @pag / @ppg →	@param {GenericIdentity<Type>} param - description
For Member And Variable
prefix	body
@typeParam →	@typeParam {TYPE} Name - description, (* TS Doc)
@type →	@type {TYPE} - description
@type.boolean →	@type {boolean} type - description
@type.Object →	@type {Object} type - description
@type.string →	@type {string} type - description
@type.number →	@type {number} type - description
@type.boolean →	@type {boolean} type - description
@type.Function →	@type {Function} type - description
@type.DOMElement →	@type {DOMElement} type - description
@type.Node →	@type {Node} type - description
@type.NodeList →	@type {NodeList} type - description
@type.RegExp →	@type {RegExp} type - description
prefix	body
@property →	@property {TYPE} property - description
@property.boolean →	@property {boolean} property - description
@property.Object →	@property {Object} property - description
@property.string →	@property {string} property - description
@property.number →	@property {number} property - description
@property.boolean →	@property {boolean} property - description
@property.Function →	@property {Function} property - description
@property.DOMElement →	@property {DOMElement} property - description
@property.Node →	@property {Node} property - description
@property.NodeList →	@property {NodeList} property - description
@property.RegExp →	@property {RegExp} property - description
Example:

class MyClass {
  constructor() {
    /**
     * @type {number}
     */
    this.foo = 123;

    /**
     * @type {Object}
     * @property {number} p.foo
     * @property {string} p.bar
     */
    this.bar = { foo: 123, bar: 'abc' };
  }

  /** @type {string} */
  get baz() {}

  /** @type {string} */
  set baz(v) {}

  /**
   * @param {number} param - this is p description.
   * @return {Object} this is description.
   * @property {number} foo this is description.
   * @property {number} bar this is description.
   */
  qux(param) {}
}

For Virtual Type
prefix	body
@typedef →	@typedef {TYPE} Name - description
Example:

/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Set the magic number.
 * @param {NumberLike} x - The magic number.
 */
function setMagicNumber(x) { }

Function
prefix	body
@return/@rt →	@return {TYPE} description
@return.promise/@rp →	@return {Promise<TYPE>} description
@return (single) →	/** @return {TYPE} description */
@requires →	@requires module
@emits →	/** @emits {eventName} emit event when ... */
@listens →	/** @listens {eventName} listen event because ... */
@throws →	/** @throws {errorType} Will throw an error if argument is null./Argument x must be x. */
Example:

/**
 * function description
 * @param {Object} param - this is object param.
 * @param {number} param.foo - this is property param.
 * @param {string} param.bar - this is property param.
 */
function myFunc(param) {}