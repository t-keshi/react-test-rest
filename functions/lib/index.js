"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const serviceAccount_json_1 = __importDefault(require("./serviceAccount.json"));
const router_1 = require("./src/infra/router");
const params = {
    type: serviceAccount_json_1.default.type,
    projectId: serviceAccount_json_1.default.project_id,
    privateKeyId: serviceAccount_json_1.default.private_key_id,
    privateKey: serviceAccount_json_1.default.private_key,
    clientEmail: serviceAccount_json_1.default.client_email,
    clientId: serviceAccount_json_1.default.client_id,
    authUri: serviceAccount_json_1.default.auth_uri,
    tokenUri: serviceAccount_json_1.default.token_uri,
    authProviderX509CertUrl: serviceAccount_json_1.default.auth_provider_x509_cert_url,
    clientC509CertUrl: serviceAccount_json_1.default.client_x509_cert_url,
};
admin.initializeApp({ credential: admin.credential.cert(params) });
const app = express();
app.use(cors({ credentials: true }));
router_1.router(app);
exports.api = functions.region('asia-northeast1').https.onRequest(app);
//# sourceMappingURL=index.js.map