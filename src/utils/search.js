const search = (array, input) => {
  const result = [];
  const searchFunc = (array, input) => {
    array.forEach(item => {
      if (item.title) {
        if (item.title.search(input) !== -1)
          item.url
            ? result.push({ parent: null, url: '/', ...item })
            : result.push({ parent: item.title, ...item });
      }
      if (item.items) {
        searchFunc(item.items, input);
      }
    });
    return result;
  };
  return searchFunc(array, input);
};

export default search;
