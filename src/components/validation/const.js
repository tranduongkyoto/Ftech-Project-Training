// import {
//     isEmail, isUrl, isExisty, isDefaultRequiredValue, notEmptyString, isTrue, isFalse, isNumeric, isAlpha, isAlphanumeric,
//     isInt, isFloat, isWords, isLength, minLength, maxLength, equals, equalsField, isBigger, isBiggerOrEqual, isSmaller, isSmallerOrEqual
// } from './validationRules'

// const invalidFieldMessage = (label) => (`${label} is not valid`)
// const requiredFieldMessage = (label) => (`${label} is required`)
// const canNotBeEmptyFieldMessage = (label) => (`${label} can not be empty`)

// const validations = {
//     email: (message) => ({ rule: isEmail, message: message || invalidFieldMessage }),
//     url: (message) => ({ rule: isUrl, message: message || invalidFieldMessage }),
//     required: (message) => (message || { rule: isExisty, message: requiredFieldMessage }),
//     defaultRequired: (message) => ({ rule: isDefaultRequiredValue, message: message || requiredFieldMessage }),
//     notEmptyString: (message) => ({ rule: notEmptyString, message: message || canNotBeEmptyFieldMessage }),
//     numeric: (message) => ({ rule: isNumeric, message: (label) => (message || `${label} must be a numeric value`) }),
//     alpha: (message) => ({ rule: isAlpha, message: (label) => (message || `${label} must be alphabetic`) }),
//     alphaNumeric: (message) => ({ rule: isAlphanumeric, message: (label) => (message || `${label} must be alphanumeric`) }),
//     int: (message) => ({ rule: isInt, message: (label) => (message || `${label} must be an integer`) }),
//     float: (message) => ({ rule: isFloat, message: (label) => (message || `${label} must be a number`) }),
//     words: (message) => ({ rule: isWords, message: (label) => (message || `${label} must be a collection of words`) }),
//     length: (length, message) => ({ rule: isLength(length), message: (label) => (message || `${label} must be ${length} characters long`) }),
//     minLength: (length, message) => ({ rule: minLength(length), message: (label) => (message || `${label} must be at least ${length} characters long`) }),
//     maxLength: (length, message) => ({ rule: maxLength(length), message: (label) => (message || `${label} must be up to ${length} characters long`) }),
//     equals: (value, message) => ({ rule: equals(value), message: (label) => (message || `${label} must be equal to ${value}`) }),
//     equalsField: (field, fieldLabel, message) => ({ rule: equalsField(field), message: (label) => (message || `${label} does not match ${fieldLabel || field}`) }),
//     True: (message) => ({ rule: isTrue, message: (label) => (message || `${label} must be True`) }),
//     False: (message) => ({ rule: isFalse, message: (label) => (message || `${label} must be False`) }),
//     bigger: (value, message) => ({ rule: isBigger(value), message: (label) => (message || `${label} must be bigger than ${value}`) }),
//     biggerOrEqual: (value, message) => ({ rule: isBiggerOrEqual(value), message: (label) => (message || `${label} must be bigger or eqial to ${value}`) }),
//     smaller: (value, message) => ({ rule: isSmaller(value), message: (label) => (message || `${label} must be smaller than ${value}`) }),
//     smallerOrEqual: (value, message) => ({ rule: isSmallerOrEqual(value), message: (label) => (message || `${label} must be smaller or equal to ${value}`) }),
// }

// export default validations;