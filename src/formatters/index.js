export const excerpt = (string, maxLength = 100) => {
  if (string.length > maxLength) {
    const stringA = string
      .replace(/(<([^>]+)>)/gi, "") // removendo tags
      .substring(0, maxLength); // reduzindo
    const length = Math.min(stringA.length, stringA.lastIndexOf(" ")); // evitando quebra de palavras
    return `${stringA.substring(0, length)} ...`;
  }
  return string;
};
