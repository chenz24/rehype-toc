import { Node, Parent } from "unist";

/**
 * Returns the text content of all children of the given node
 */
export function getInnerText(node: Node): string {
  let text = "";

  if (node.type === "text") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    text += node.value || "";
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (node.children) {
    let parent = node as Parent;
    for (let child of parent.children) {
      text += getInnerText(child);
    }
  }

  return text;
}
