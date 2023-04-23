import { TextDocument } from 'vscode-languageserver-textdocument';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver/node';

export async function getPolicyDiagnostics(
  document: TextDocument
): Promise<Diagnostic[]> {
  const diagnostics: Diagnostic[] = [];

  try {
    const policyJson = JSON.parse(document.getText());

    // Add custom validation logic for the policy here
    // For example, checking the presence of specific keys or values

  } catch (error) {
    if (error instanceof SyntaxError) {
      diagnostics.push({
        severity: DiagnosticSeverity.Error,
        range: {
          start: document.positionAt(error.location.start.offset),
          end: document.positionAt(error.location.end.offset),
        },
        message: error.message,
        source: 'Open Horizon',
      });
    }
  }

  return diagnostics;
}
