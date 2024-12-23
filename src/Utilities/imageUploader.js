
function imageUploader(image){
  return new URL(`../assets/${image}`, import.meta.url).href;
}
export default imageUploader