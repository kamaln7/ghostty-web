/**
 * Whether a link-activation event should open the link.
 *
 * Mouse users must hold Ctrl/Cmd so plain clicks keep selecting text and
 * reaching terminal applications. Touch has no modifier keys, so a completed
 * touch tap (the `pointerup` the terminal forwards once it has verified a
 * stationary single-finger press) activates the link directly.
 */
export function isLinkActivation(event: MouseEvent): boolean {
  if (event.ctrlKey || event.metaKey) return true;
  return event.type === 'pointerup' && (event as PointerEvent).pointerType === 'touch';
}
