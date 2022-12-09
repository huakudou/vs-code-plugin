import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

const { window, Uri: URI, ViewColumn } = vscode;

export default class WebView {
  private static panel: vscode.WebviewPanel | undefined;

  // webview
  public static showWebView() {
    const editor: vscode.TextEditor | undefined =
      vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    const selection: vscode.Selection = editor.selections[0];
    const document: vscode.TextDocument = editor.document;
    let wordUnderCursor = "";
    const rangeUnderCursor: vscode.Range | undefined =
      document.getWordRangeAtPosition(selection.active);
    if (rangeUnderCursor) {
      wordUnderCursor = document.getText(rangeUnderCursor);
    }
    const selectedVar: string = (
      document.getText(selection) || wordUnderCursor
    ).replace(/[A-Z]/g, function ($0) {
      return $0.toLowerCase();
    });
    if (this.panel) {
      this.panel.webview.html = this.generateTpl(selectedVar);
      this.panel.onDidDispose(() => {
        this.panel = undefined;
      });
    } else {
      const layout = { orientation: 0, groups: [{ size: 0.6 }, { size: 0.4 }] };
      const viewColumn = ViewColumn.Beside;
      this.panel = vscode.window.createWebviewPanel(
        "Document",
        "文档",
        {
          viewColumn,
          preserveFocus: true,
        },
        {
          enableScripts: true,
          retainContextWhenHidden: true,
        }
      );
      this.panel.webview.html = this.generateTpl(selectedVar);
      this.panel.onDidDispose(() => {
        this.panel = undefined;
      });
      vscode.commands.executeCommand("vscode.setEditorLayout", layout);
    }
  }

  // 静态html
  public static generateTpl(key: string): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
      <meta content="portrait" name="x5-orientation">
      <meta content="true" name="x5-fullscreen">
      <meta content="portrait" name="screen-orientation">
      <meta content="yes" name="full-screen">
      <meta content="webkit" name="renderer">
      <meta content="IE=Edge" http-equiv="X-UA-Compatible">
      <title>TEST</title>
      <style>
      html,body,iframe{
        width:100%;
        height:100%;
        border:0;
        overflow: hidden;
      }
      </style>
    </head>
    <body>
      <iframe src="https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect"/>
    </body>
    </html>`;
  }
}
