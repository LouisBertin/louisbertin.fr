export const getDataFromLanguage = (currentLng, versions) => {
    return versions.find(v => v.lang === currentLng);
}