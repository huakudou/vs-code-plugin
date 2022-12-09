import {
  CancellationToken,
  ProviderResult,
  TextDocument,
  Position,
  HoverProvider,
  Uri,
  Hover,
  MarkdownString,
} from "vscode";
import * as path from "path";
import * as fs from "fs";

function originResourceProcess(url: string) {
  return Uri.file(url).with({ scheme: "vscode-resource" });
}

// 文档通过 hover 形式查看
export default class DocumentHoverProvider implements HoverProvider {
  private extensionPath: string = "";
  private documents: { [key: string]: string } = {};
  constructor(_path: string) {
    this.extensionPath = _path;
  }
  provideHover(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<import("vscode").Hover> {
    const line = document.lineAt(position.line);
    const selectText =
      line.text.match(/(?<=<\s*)(\w+)(?=(\s.*|\/)?>?$)/g)?.toString() || "";
    if (!selectText) {
      return;
    }
    let docMd = this.documents[selectText];
    if (docMd === undefined) {
      const basePath = path.join(
        this.extensionPath,
        `docFiles/${selectText}.md`
      );
      try {
        this.documents[selectText] = fs.readFileSync(basePath, "utf8");
        docMd = this.documents[selectText];
      } catch (error) {
        this.documents[selectText] = "";
      }
    }
    if (docMd) {
      return new Hover(new MarkdownString(docMd));
    }

    return null;
  }
}
