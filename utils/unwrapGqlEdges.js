export const unwrapGqlEdges = (prop) => {
  if (typeof prop !== "object" || prop === null) return prop;
  const entries = Object.entries(prop);

  return entries.reduce(
    (acc, [key, value]) =>
      key === "edges"
        ? value.map(({ node }) => unwrapGqlEdges(node))
        : { ...acc, [key]: unwrapGqlEdges(value) },
    {}
  );
};
