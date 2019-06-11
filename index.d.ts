export const v1: () => string;
export const v2: () => string;
export const ordered: {
  generate: () => string,
  toBinary16: (orderedUuid: string) => Buffer,
  fromBinary16: (binaryOrderedUuid: Buffer) => string
}
