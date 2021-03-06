import functions = require('firebase-functions');
import admin = require('firebase-admin');
import express = require('express');
import cors = require('cors');
import serviceAccount from './serviceAccount.json';
import { router } from './src/infra/router';

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

admin.initializeApp({ credential: admin.credential.cert(params) });

const firebaseapp = express();

firebaseapp.use(cors({ credentials: true }));
router(firebaseapp);

exports.api = functions.region('asia-northeast1').https.onRequest(firebaseapp);
