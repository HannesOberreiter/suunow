export default function useAssets() {
  const jpeg = import.meta.globEager("/src/assets/images/*.jpeg");

  return {
    images: jpeg,
  };
}
