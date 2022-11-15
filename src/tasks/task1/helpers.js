export const getGridProperties = (index, gridBoxState) => {
  const gridIndex = `grid-${index}`;
  const isActiveGrid = gridBoxState.active?.[gridIndex] === index;
  const isDormantGrid = gridBoxState.dormant?.[gridIndex] === index;
  const showGridNumber = isActiveGrid || isDormantGrid;
  const gridClassName = isActiveGrid
    ? "active"
    : isDormantGrid
    ? "dormant"
    : "";
  return { showGridNumber, gridClassName };
};
