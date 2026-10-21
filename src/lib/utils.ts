/**
 * Joins class names while skipping falsy values.
 * Kept deliberately small so the project does not need clsx.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ')
}
