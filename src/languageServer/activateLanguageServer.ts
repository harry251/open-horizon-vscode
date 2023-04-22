import * as vscode from 'vscode';
import { ServerOptions, TransportKind } from 'vscode-languageclient/node';
import { LanguageClient } from 'vscode-languageclient';

export function activateLanguageServer(context: vscode.ExtensionContext) {
  const serverModule = context.asAbsolutePath('out/languageServer/languageServer.js');
  const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions,
    },
  };

  const clientOptions = {
    documentSelector: [{ scheme: 'file', language: 'json' }],
    synchronize: {
      configurationSection: 'openHorizon',
      fileEvents: vscode.workspace.createFileSystemWatcher('**/.json'),
    },
  };

  const client = new LanguageClient('openHorizon', 'Open Horizon Language Server', serverOptions, clientOptions);
  context.subscriptions.push(client.start());
}
