export const updateObjectInArray = (items: Array<any>, itemID: number, objPropName: string, newObjProps: any) => {
  return items.map(u => u[objPropName] === itemID ? {...u, ...newObjProps} : u)
}

