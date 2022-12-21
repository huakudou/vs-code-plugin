import * as vscode from "vscode";
import DocumentHoverProvider from "./documents";
import WebView from "./webview";
const MarkdownIt = require("markdown-it")();
import * as fs from "fs";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  const registerHover = vscode.languages.registerHoverProvider(
    "typescriptreact",
    new DocumentHoverProvider(context.extensionPath)
  );
  const webview = vscode.commands.registerCommand("catCoding.start", () => {
    WebView.showWebView();
  });

  const completion = vscode.languages.registerCompletionItemProvider(
    "typescriptreact",
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context1: vscode.CompletionContext
      ) {
        console.log(token);
        const basePath = path.join(
          context.extensionPath,
          `docFiles/TableList.md`
        );
        let sources = MarkdownIt.parse(fs.readFileSync(basePath, "utf8"), {});
        console.log(sources);
        const linePrefix = document
          .lineAt(position)
          .text.substr(0, position.character);
        if (!linePrefix.endsWith("hello.")) {
          return undefined;
        }
        return [
          {
            label: "HelloGitHub",
            detail: `test`,
            kind: vscode.CompletionItemKind.Snippet,
            documentation: `| 属性`,
          },
          new vscode.CompletionItem(
            "HelloWorld",
            vscode.CompletionItemKind.Property
          ),
          new vscode.CompletionItem(
            "HelloPeople",
            vscode.CompletionItemKind.Property
          ),
        ];
      },
    },
    "." // triggered whenever a '.' is being typed
  );

  context.subscriptions.push(webview);
  context.subscriptions.push(registerHover);
}

export function deactivate() { }
