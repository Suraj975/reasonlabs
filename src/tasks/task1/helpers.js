export const getGridProperties = (index, boxColor) => {
  const gridIndex = `grid-${index}`;
  const isActiveGrid = boxColor.active?.[gridIndex] === index;
  const isDormantGrid = boxColor.dormant?.[gridIndex] === index;
  const showGridNumber = isActiveGrid || isDormantGrid;
  const gridClassName = isActiveGrid
    ? "active"
    : isDormantGrid
    ? "dormant"
    : "";
  return { showGridNumber, gridClassName };
};
