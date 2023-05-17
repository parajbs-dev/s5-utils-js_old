"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationError = exports.throwValidationError = exports.makeUrl = exports.ensureUrlPrefix = exports.ensureUrl = exports.ensurePrefix = exports.addUrlQuery = exports.getSubdomainFromUrl = exports.addUrlSubdomain = exports.defaultPortalUrl = exports.uriS5Prefix = exports.URI_S5_PREFIX = exports.defaultS5PortalUrl = exports.DEFAULT_S5_PORTAL_URL = exports.convertBase32ToBase64url = exports.convertBase64urlToBase32 = exports.convertBase58ToBase64url = exports.convertBase64urlToBase58 = exports.convertBase32ToBase58 = exports.convertBase58ToBase32 = exports.getS5bBytesDecoded = exports.getS5bCidEncoded = exports.getS5uBytesDecoded = exports.getS5uCidEncoded = exports.getS5zBytesDecoded = exports.getS5zCidEncoded = exports.trimSuffix = exports.trimPrefix = exports.getFileMimeType = exports.convertS5mHashToBase64url = exports.getS5CidFromHash = exports.getS5HashFromB3hash = exports.getB3hashFromFile = exports.numberToBuffer = exports.base64urlDecode = exports.base64urlEncode = exports.base32rfcDecode = exports.base32rfcEncode = exports.base58BitcoinDecode = exports.base58BitcoinEncode = void 0;
// Main exports.
var basetools_1 = require("./utils/basetools");
Object.defineProperty(exports, "base58BitcoinEncode", { enumerable: true, get: function () { return basetools_1.base58BitcoinEncode; } });
Object.defineProperty(exports, "base58BitcoinDecode", { enumerable: true, get: function () { return basetools_1.base58BitcoinDecode; } });
Object.defineProperty(exports, "base32rfcEncode", { enumerable: true, get: function () { return basetools_1.base32rfcEncode; } });
Object.defineProperty(exports, "base32rfcDecode", { enumerable: true, get: function () { return basetools_1.base32rfcDecode; } });
Object.defineProperty(exports, "base64urlEncode", { enumerable: true, get: function () { return basetools_1.base64urlEncode; } });
Object.defineProperty(exports, "base64urlDecode", { enumerable: true, get: function () { return basetools_1.base64urlDecode; } });
var blake3tools_1 = require("./utils/blake3tools");
Object.defineProperty(exports, "numberToBuffer", { enumerable: true, get: function () { return blake3tools_1.numberToBuffer; } });
Object.defineProperty(exports, "getB3hashFromFile", { enumerable: true, get: function () { return blake3tools_1.getB3hashFromFile; } });
Object.defineProperty(exports, "getS5HashFromB3hash", { enumerable: true, get: function () { return blake3tools_1.getS5HashFromB3hash; } });
Object.defineProperty(exports, "getS5CidFromHash", { enumerable: true, get: function () { return blake3tools_1.getS5CidFromHash; } });
Object.defineProperty(exports, "convertS5mHashToBase64url", { enumerable: true, get: function () { return blake3tools_1.convertS5mHashToBase64url; } });
var file_1 = require("./utils/file");
Object.defineProperty(exports, "getFileMimeType", { enumerable: true, get: function () { return file_1.getFileMimeType; } });
var string_1 = require("./utils/string");
Object.defineProperty(exports, "trimPrefix", { enumerable: true, get: function () { return string_1.trimPrefix; } });
Object.defineProperty(exports, "trimSuffix", { enumerable: true, get: function () { return string_1.trimSuffix; } });
var tools_1 = require("./utils/tools");
Object.defineProperty(exports, "getS5zCidEncoded", { enumerable: true, get: function () { return tools_1.getS5zCidEncoded; } });
Object.defineProperty(exports, "getS5zBytesDecoded", { enumerable: true, get: function () { return tools_1.getS5zBytesDecoded; } });
Object.defineProperty(exports, "getS5uCidEncoded", { enumerable: true, get: function () { return tools_1.getS5uCidEncoded; } });
Object.defineProperty(exports, "getS5uBytesDecoded", { enumerable: true, get: function () { return tools_1.getS5uBytesDecoded; } });
Object.defineProperty(exports, "getS5bCidEncoded", { enumerable: true, get: function () { return tools_1.getS5bCidEncoded; } });
Object.defineProperty(exports, "getS5bBytesDecoded", { enumerable: true, get: function () { return tools_1.getS5bBytesDecoded; } });
Object.defineProperty(exports, "convertBase58ToBase32", { enumerable: true, get: function () { return tools_1.convertBase58ToBase32; } });
Object.defineProperty(exports, "convertBase32ToBase58", { enumerable: true, get: function () { return tools_1.convertBase32ToBase58; } });
Object.defineProperty(exports, "convertBase64urlToBase58", { enumerable: true, get: function () { return tools_1.convertBase64urlToBase58; } });
Object.defineProperty(exports, "convertBase58ToBase64url", { enumerable: true, get: function () { return tools_1.convertBase58ToBase64url; } });
Object.defineProperty(exports, "convertBase64urlToBase32", { enumerable: true, get: function () { return tools_1.convertBase64urlToBase32; } });
Object.defineProperty(exports, "convertBase32ToBase64url", { enumerable: true, get: function () { return tools_1.convertBase32ToBase64url; } });
var url_1 = require("./utils/url");
Object.defineProperty(exports, "DEFAULT_S5_PORTAL_URL", { enumerable: true, get: function () { return url_1.DEFAULT_S5_PORTAL_URL; } });
Object.defineProperty(exports, "defaultS5PortalUrl", { enumerable: true, get: function () { return url_1.defaultS5PortalUrl; } });
Object.defineProperty(exports, "URI_S5_PREFIX", { enumerable: true, get: function () { return url_1.URI_S5_PREFIX; } });
Object.defineProperty(exports, "uriS5Prefix", { enumerable: true, get: function () { return url_1.uriS5Prefix; } });
Object.defineProperty(exports, "defaultPortalUrl", { enumerable: true, get: function () { return url_1.defaultPortalUrl; } });
Object.defineProperty(exports, "addUrlSubdomain", { enumerable: true, get: function () { return url_1.addUrlSubdomain; } });
Object.defineProperty(exports, "getSubdomainFromUrl", { enumerable: true, get: function () { return url_1.getSubdomainFromUrl; } });
Object.defineProperty(exports, "addUrlQuery", { enumerable: true, get: function () { return url_1.addUrlQuery; } });
Object.defineProperty(exports, "ensurePrefix", { enumerable: true, get: function () { return url_1.ensurePrefix; } });
Object.defineProperty(exports, "ensureUrl", { enumerable: true, get: function () { return url_1.ensureUrl; } });
Object.defineProperty(exports, "ensureUrlPrefix", { enumerable: true, get: function () { return url_1.ensureUrlPrefix; } });
Object.defineProperty(exports, "makeUrl", { enumerable: true, get: function () { return url_1.makeUrl; } });
var validation_1 = require("./utils/validation");
Object.defineProperty(exports, "throwValidationError", { enumerable: true, get: function () { return validation_1.throwValidationError; } });
Object.defineProperty(exports, "validationError", { enumerable: true, get: function () { return validation_1.validationError; } });
