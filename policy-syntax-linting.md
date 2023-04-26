# Policy Syntax Checking and Linting

The Open Horizon extension for VS Code provides syntax checking and linting features for policy files to help you ensure your policy files are correct and follow the required structure. This document provides an overview of these features and how to use them.

## Syntax Checking

Syntax checking is enabled by default when you edit policy files in VS Code. It checks the structure and syntax of your JSON policy files in real-time, highlighting any errors or issues it finds. When you hover over an error, a tooltip will appear, providing more information about the issue.

## Linting

Linting is a process that checks your policy files against a set of rules or best practices, helping you maintain a consistent coding style and catch potential errors. The Open Horizon extension uses a language server to provide linting features for policy files, offering real-time feedback and suggestions as you edit your files.

## Configuration

You can configure the linting rules and other settings related to policy file syntax checking and linting in your `settings.json` file or through the VS Code settings UI.

Here's an example of configuring linting rules in `settings.json`:

```json
{
  "openHorizon.policyLinting.rules": {
    "rule-1": "error",
    "rule-2": "warning",
    "rule-3": "off"
  }
}
```

Replace rule-1, rule-2, and rule-3 with the specific rule names you want to configure, and set their values to error, warning, or off as needed.

## Future: Test Validation for Open Horizon

The extension will include a feature to validate your policy files using test cases in the future. This will help you ensure your policies function as intended before deploying them to your Open Horizon environment. Keep an eye on the project's changelog and release notes for updates on this upcoming feature.