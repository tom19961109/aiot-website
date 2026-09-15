
/**
 * 依照某節點取得字串
 * @param node 
 * @returns 
 */
export function getContentText(node: unknown): string {
  if (typeof node === 'string') return node
  if (!Array.isArray(node)) return ''
  return node.slice(2).map(getContentText).join('')
}