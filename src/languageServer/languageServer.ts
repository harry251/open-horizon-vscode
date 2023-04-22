import {
   createConnection,
   TextDocuments,
   ProposedFeatures,
   InitializeParams,
   TextDocumentSyncKind,
   TextDocumentChangeEvent,
   InitializeResult,
 } from 'vscode-languageserver/node';
 import { TextDocument } from 'vscode-languageserver-textdocument';
 import { getPolicyDiagnostics } from './policyDiagnostics';
 
 const connection = createConnection(ProposedFeatures.all);
 const documents = new TextDocuments(TextDocument);
 
 connection.onInitialize((params: InitializeParams) => {
   const capabilities = params.capabilities;
 
   const result: InitializeResult = {
     capabilities: {
       textDocumentSync: TextDocumentSyncKind.Full,
     },
   };
 
   return result;
 });
 
 documents.listen(connection);
 
 documents.onDidOpen((event) => {
   validateTextDocument(event.document);
 });
 
 documents.onDidChangeContent((change: TextDocumentChangeEvent) => {
   validateTextDocument(change.document);
 });
 
 async function validateTextDocument(textDocument: TextDocument): Promise<void> {
   const diagnostics = await getPolicyDiagnostics(textDocument);
 
   connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
 }
 
 connection.listen();
 