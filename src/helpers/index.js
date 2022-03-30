export const currentTimestamp = () => new Date().getTime();

export const onLoadImage = (url) =>
  new Promise((resolve, reject) => {
    if (!url) reject(new Error('Uri is null'));
    if (typeof url !== 'string' || !url?.startsWith('http')) reject(new Error('Is not uri'));
    return fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
  });
