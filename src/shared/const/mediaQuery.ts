// Query constants

// xxl
export const xxlMinWidthNumber = 1536;
export const xxlMinWidth = `${xxlMinWidthNumber}px`; // 1536px

// xl
export const xlMinWidthNumber = 1280;
export const xlMinWidth = `${xlMinWidthNumber}px`; // 1280px
export const xlMaxWidth = `${xxlMinWidthNumber - 1}px`; // 1535px

// lg
export const lgMinWidthNumber = 1024;
export const lgMinWidth = `${lgMinWidthNumber}px`; // 1024px
export const lgMaxWidth = `${xlMinWidthNumber - 1}px`; // 1279px

// md
export const mdMinWidthNumber = 768;
export const mdMinWidth = `${mdMinWidthNumber}px`; // 768px
export const mdMaxWidth = `${lgMinWidthNumber - 1}px`; // 1023px

// sm
export const smMinWidthNumber = 640;
export const smMinWidth = `${smMinWidthNumber}px`; // '640px'
export const smMaxWidth = `${mdMinWidthNumber - 1}px`; // '767px'

// xs
export const xsMinWidthNumber = 376;
export const xsMinWidth = `${xsMinWidthNumber}px`; // '376px'
export const xsMaxWidth = `${smMinWidthNumber - 1}px`; // '639px'

// xxs
export const xxsMaxWidth = `${xsMinWidthNumber - 1}px`; // '375px'

// Query sizes

// xxl
export const xxl = { minWidth: xxlMinWidth };
export const smallerThanXxl = { maxWidth: xlMaxWidth };

// xl
export const xl = { minWidth: xlMinWidth, maxWidth: xlMaxWidth };
export const smallerThanXl = { maxWidth: lgMaxWidth };
export const largerThanXl = { minWidth: xxlMinWidth };

// lg
export const lg = { minWidth: lgMinWidth, maxWidth: lgMaxWidth };
export const smallerThanLg = { maxWidth: mdMaxWidth };
export const largerThanLg = { minWidth: xlMinWidth };

// md
export const md = { minWidth: mdMinWidth, maxWidth: mdMaxWidth };
export const smallerThanMd = { maxWidth: smMaxWidth };
export const largerThanMd = { minWidth: lgMinWidth };

// sm
export const sm = { minWidth: smMinWidth, maxWidth: smMaxWidth };
export const smallerThanSm = { maxWidth: xsMaxWidth };
export const largerThanSm = { minWidth: mdMinWidth };

// xs
export const xs = { minWidth: xsMinWidth, maxWidth: xsMaxWidth };
export const smallerThanXs = { maxWidth: xxsMaxWidth };
export const largerThanXs = { minWidth: smMinWidth };
