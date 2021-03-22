const hydrateInfo = (() => {
   let isHydrated = false;

   const getHydrated = () => {
      return isHydrated
   };

   const didHydrate = () => {
      isHydrated = true;
   };

   return {
      getHydrated,
      didHydrate,
   }
})();

export {
   hydrateInfo,
}
