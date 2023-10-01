export const mergeClassName = (...classNames: any) => {
  // classNames => array.
  console.log(classNames);
  console.log(classNames.join(" "));

  // loại bỏ không phải string.
  return classNames
    .filter((cn: any) => {
      return typeof cn === "string";
    })
    .join(" "); // ["a","b","c"].join('-') => 'a-b-c'
};

export const saveLocalStorage = (key: any, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item !== null) {
    return JSON.parse(item);
  }
  // Trả về giá trị mặc định hoặc xử lý khác nếu cần.
  return null; // Hoặc một giá trị mặc định khác nếu bạn muốn.
};

export const deleteKey = (key: any) => {
  localStorage.removeItem(key);
};
